"use client";

import Link from "next/link";

export default function SignUpPage() {
  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!result.success) {
      alert(result.message); 
    } else {
      alert("User registered successfully!");
      
      window.location.href = "/"; 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={(e) => handleSubmit(e as unknown as Event)} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
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
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account? <Link href="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
