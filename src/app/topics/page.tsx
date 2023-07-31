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
            <Link href="/topics/new" className="btn newTopicBtn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>

            </Link>
            <div className="topics">
                {topics.map(topic => (
                    <TopicCard key={topic.id} {...topic}/>
                ))}
            </div>
        </div>
    );
}