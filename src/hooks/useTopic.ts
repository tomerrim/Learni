"use client"

import Topic from "@/types/Topic";
import { useState, useEffect } from "react";

export function useTopic(topicId: string) {
    const [topic, setTopic] = useState<Topic | null>(null);

    useEffect(() => {
        async function fetchTopic() {
            const response = await fetch(`/api/topics/${topicId}`);
            const data = await response.json();
            setTopic(data);
        }
        fetchTopic();
    },[topicId]);

    return topic;
}