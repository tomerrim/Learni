"use client"

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import RestrictedContent from "./RestrictedContent";
import Btn from "./Btn";

export default function HeaderUser() {
    const { data: session } = useSession();

    function handleSignout() {
        signOut();
    }

    function fallback() {
        return <Link href="/signin" className="btn">Sign In</Link>
    }

    return (
        <div className="ml-auto flex gap-4">
            <RestrictedContent fallback={fallback()}>
                <h3 className="text-white">{session?.user?.name}</h3>
                <Btn className="signoutBtn" onClick={handleSignout}>Sign Out</Btn>
            </RestrictedContent>
        </div>
    )
}