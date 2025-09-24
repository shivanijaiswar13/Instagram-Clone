import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-black border border-neutral-800 rounded-lg p-8 w-80 text-center">
        <h1 className="font-[cursive] text-4xl mb-4">Instagram</h1>
        <p className="text-sm text-gray-300 mb-4">
          Sign up to see photos and videos from your friends.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md font-bold mb-3">
          Log in with Facebook
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="mx-2 text-gray-400 text-xs">OR</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <form className="space-y-2">
          <input
            type="text"
            placeholder="Mobile Number or Email"
            className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-sm"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-sm"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-sm"
          />

          <p className="text-xs text-gray-400 mt-3">
            People who use our service may have uploaded your contact information to Instagram.{" "}
            <a href="#" className="text-blue-500">Learn More</a>
          </p>

          <p className="text-xs text-gray-400 mt-3">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500">Terms</a>,{" "}
            <a href="#" className="text-blue-500">Privacy Policy</a> and{" "}
            <a href="#" className="text-blue-500">Cookies Policy</a>.
          </p>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md font-bold mt-3"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
