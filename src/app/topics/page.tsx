import TopicCard from "@/components/TopicCard";
import { getTopics } from "@/services/topics.server";
import Topic from "@/types/Topic";
import Link from "next/link";

export const metadata = {
    title: "Topics",
    description: "Topics Page"
}

export default async function Topics() {
    const topics: Topic[] = await getTopics(); 
    return (
        <div>
            <h1>Topics</h1>
            <Link href="/topics/new" className="btn newTopicBtn">new Topic</Link>
            <div className="topics">
                {topics.map(topic => (
                    <TopicCard key={topic.id} {...topic}/>
                ))}
            </div>
        </div>
    );
}