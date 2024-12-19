'use client';

import Link from 'next/link';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // استيراد أيقونات الفيسبوك والجوجل من react-icons

export default function LoginPage() {
  return (
    <>
      <Header />
      <br /> <br /> <br />
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ">
            <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
            {/* Signup Link */}
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-blue-600 hover:underline dark:text-blue-400">
                Signup
              </Link>
            </p>
            <br />



            {/* Form fields */}
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-zinc-300 rounded p-2 mt-1 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full border border-zinc-300 rounded p-2 mt-1 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
            </form>

<br />

            {/* Remember me and Forgot Password */}
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <label htmlFor="remember" className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="form-checkbox"
                />
                <span>Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </div>

            <br />
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Login
            </button>

            {/* Or continue with */}
              <div className="relative my-6 flex items-center justify-center">
                {/* خط يسار */}
                <hr className="absolute left-0 w-[30%] border-zinc-300 dark:border-zinc-600" />
                {/* النص في المنتصف */}
                <span className="relative px-2 text-sm text-zinc-600 dark:text-zinc-400 bg-transparent z-10">Or continue with</span>
                {/* خط يمين */}
                <hr className="absolute right-0 w-[30%] border-zinc-300 dark:border-zinc-600" />
              </div>



            {/* Facebook and Google Login Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                className="w-1/2 bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <FaFacebook className="h-5 w-5 mr-2" />
                Facebook
              </button>
              <button
                type="button"
                className="w-1/2 bg-red-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400"
              >
                <FaGoogle className="h-5 w-5 mr-2" />
                Google
              </button>
            </div>


          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
