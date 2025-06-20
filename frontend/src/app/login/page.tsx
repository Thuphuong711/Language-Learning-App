'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    router.push('/menu');
  };

  return (
    <div className="w-full h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <div className="bg-lime-400 px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => router.push('/')}
          className="text-black text-3xl font-bold"
        >
          ←
        </button>
        <div className="flex-1 text-center pr-6">
          <h1 className="text-black text-2xl font-bold">Login</h1>
        </div>
      </div>

      {/* Form area */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 justify-center px-6 space-y-6"
      >
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-50 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-50 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-lg bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
        >
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-sm text-gray-700 font-semibold">OR</span>
          <div className="flex-grow border-t border-gray-600" />
        </div>

        {/* Google login button */}
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/menu" })}
          className="w-full py-3 text-base bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition flex items-center justify-center shadow-sm"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5 mr-3" />
          Log In with Google
        </button>

        {/* Facebook login button */}
        <button
          type="button"
          onClick={() => signIn("facebook", { callbackUrl: "/menu" })}  
          className="w-full py-3 text-base bg-[#1877F2] text-white rounded-lg hover:bg-[#155db8] transition flex items-center justify-center shadow-sm"
        >
          <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 mr-3" />
          Log In with Facebook
        </button>
      </form>
    </div>
  );
}
