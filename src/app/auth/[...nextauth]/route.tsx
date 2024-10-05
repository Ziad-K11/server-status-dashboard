import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Define the User type expected by NextAuth
type User = {
  id: string; // Change this to string
  name: string;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock authentication logic
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: "1", name: "User" }; // Change id to a string
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
