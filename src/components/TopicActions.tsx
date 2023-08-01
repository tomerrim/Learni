"use client"

import Link from "next/link";
import { deleteTopic } from "@/services/topics.client";
import { useRouter } from "next/navigation";
import Btn from "./Btn";
import RestrictedContent from "./RestrictedContent";
import { useSession } from "next-auth/react";
import { useTopic } from "@/hooks/useTopic";

interface TopicActionsProps {
    topicId: string;
}

export default function TopicActions({ topicId }: TopicActionsProps) {
    const { push } = useRouter();
    // const topic = useTopic(topicId);
    // const { data: session } = useSession();

    async function onDelete() {
        await deleteTopic(topicId);
        alert("Topic deleted successfully");
        push("/topics");
    }

    // if(!topic) return null;

    return (
        <RestrictedContent>
            <div className="ml-auto flex gap-4">
                <Link href={`/topics/${topicId}/edit`} className="btn edit">Edit</Link>
                {/* <Btn onClick={onDelete} className="deleteBtn">Delete</Btn> */}
            </div>
        </RestrictedContent>
    )
}