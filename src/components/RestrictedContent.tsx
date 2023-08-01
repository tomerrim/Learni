"use client"

import {useSession} from "next-auth/react";

interface RestrictedContentProps {
    children: React.ReactNode,
    fallback?: JSX.Element,
    createdBy?: string | null ,
}

export default function RestrictedContent({children, fallback, createdBy}: RestrictedContentProps) {

    // const { data: session, status } = useSession();
    // const currentEmail = session?.user?.email;

    // const isAdmin = currentEmail === process.env.ADMIN_EMAIL;
    // const isCreator = currentEmail === createdBy;

    // if (status === "loading") {
    //     return null;
    // }

    // if (!session) {
    //     return fallback || null;
    // }

    // if (isAdmin) {
    //     return <>{children}</>;
    // }

    // if (createdBy && isCreator) {
    //     return <>{children}</>;
    // }

    // return fallback || null;

    // const isAdmin: boolean = userEmail === process.env.ADMIN_EMAIL;
    // const isContentOwner: boolean = userEmail === createdBy;

    // if(!userEmail && !createdBy) {
    //     return <>{children}</>
    // }

    // if(isAdmin || isContentOwner) {
    //     return <>{children}</>
    // }

    // return fallback || null;

    const { status } = useSession();
    const isLoggedIn: boolean = status === "authenticated";
    const isLoadingAuth: boolean = status === "loading";

    if (isLoadingAuth) {
        return null;
    }

    if (!isLoggedIn) {
        return fallback || null;
    }

    return <>{children}</>;
}