"use client"

import Link from "next/link";
import { deleteTopic } from "@/services/topics.client";
import { useRouter } from "next/navigation";
import Btn from "./Btn";

interface TopicActionsProps {
    topicId: string;
}

export default function TopicActions({ topicId }: TopicActionsProps) {
    const { push } = useRouter();

    async function onDelete() {
        await deleteTopic(topicId);
        alert("Topic deleted successfully");
        push("/topics");
    }

    return (
        <div className="ml-auto flex gap-4">
            {/* <Btn onClick={onDelete} className="deleteBtn">Delete</Btn> */}
        </div>
    )
}