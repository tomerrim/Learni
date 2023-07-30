"use client"

import Topic from "@/types/Topic";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopicCard(props: Topic) {
    const { id: topicId, name } = props;
    const { push } = useRouter();

    function onClick() {
        push(`/topics/${topicId}`);
    }
    return (
        <div className="topicCard" onClick={onClick}>
            {name}
        </div>
    )
}