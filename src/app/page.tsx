"use client";

import { signIn } from "next-auth/react"; // For signing in
import Link from "next/link"; // For linking to other pages

const SignInPage = () => {
  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    // Cast the target to HTMLFormElement
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Call NextAuth's signIn method
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      // Handle error (you might want to show a message to the user)
      console.error(result.error);
    } else {
      // Redirect to dashboard or handle successful login
      window.location.href = "/dashboard"; // Update with the correct path
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={(e) => handleSubmit(e as unknown as Event)} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            name="password"
            required
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
          Sign In
        </button>
        <p className="mt-4">
          Don't have an account? <Link href="/auth/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
