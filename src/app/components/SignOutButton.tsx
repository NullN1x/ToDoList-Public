"use client";

import { logout } from "@/lib/actions/auth";

const SignOutButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          logout();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
