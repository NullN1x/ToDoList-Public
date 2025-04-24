"use client";

import { login } from "@/lib/actions/auth";

const SignInButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          login();
        }}
      >
        Sign In With GitHub
      </button>
    </div>
  );
};

export default SignInButton;
