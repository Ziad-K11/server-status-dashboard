import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface User {
  email: string;
  password: string;
}


const usersFilePath = path.join(process.cwd(), 'src/data/users.json');


const readUsers = (): User[] => {
  if (!fs.existsSync(usersFilePath)) {
    
    return [];
  }
  const jsonData = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(jsonData);
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    
    const users = readUsers();

    
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'An error occurred' });
  }
}
