import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


const usersFilePath = path.join(process.cwd(), 'src/data/users.json');


const readUsers = () => {
  const jsonData = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(jsonData);
};


const writeUsers = (users: any) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    
    const users = readUsers();

    
    const existingUser = users.find((user: { email: string }) => user.email === email);
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists' });
    }

    
    users.push({ email, password });

    
    writeUsers(users);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'An error occurred' });
  }
}
