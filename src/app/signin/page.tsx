"use client"

import Btn from "@/components/Btn";
import { signIn } from "next-auth/react";

export const metadata = {
    title: 'Sign in',
    description:'sign into your account'
};

export default function SignInPage() {
    function handleSignIn() {
        signIn("google");
    }

    return (
        <>
            <h1>Sign In</h1>
            <div className="flex justify-center items-center my-5">
                <Btn onClick={handleSignIn}>Sign In With Google</Btn>
            </div>
        </>
    )
}