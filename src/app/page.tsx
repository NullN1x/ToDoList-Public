"use server";

import Link from "next/link";

import SignInButton from "./components/SignInButton";

import { auth } from "@/auth";
import Image from "next/image";

export default async function HomePage() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
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
      </div>
    );
  }
  return (
    <div>
      <h1>You Are Not Signed In</h1>
      <SignInButton />
    </div>
  );
}
