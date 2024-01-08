"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onLogin = async () => {
    // Implement your signup logic here
    // Example: await axios.post('/api/signup', user);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="w-full max-w-xs">
        <form
          // onSubmit={onSignup}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-center text-gray-800 text-2xl mb-6">Login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={onLogin}
            >
              Sign Up
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500">
              Dont't have an account?
              <a className="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-900">
                <Link href="/signup">SignUp</Link>
              </a>
            </a>
          </div>
        </form>
        <p className="text-center text-white text-xs">
          ©2024 Self Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
