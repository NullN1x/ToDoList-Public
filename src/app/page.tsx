"use server";

import Link from "next/link";
import "@/styles/globals.css";
import SignInButton from "./components/SignInAndOutButtons/SignInButton";

import { auth } from "@/auth";
import Image from "next/image";
import SignOutButton from "./components/SignInAndOutButtons/SignOutButton";

export default async function HomePage() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="text-heading-2">
        <h1>NextAuth v5 + Next 15</h1>
        <p>User signed in with name: {session.user.name}</p>
        <p>User signed in with name: {session.user.email}</p>
        {session.user.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? "Avatar"}
            style={{ borderRadius: "50%" }}
          />
        )}
        <SignOutButton />
      </div>
    );
  }
  return (
    <div className="text-heading-2">
      <h1>Need Space</h1>
      <h1>You Are Not Signed In</h1>
      <SignInButton />
    </div>
  );
}
