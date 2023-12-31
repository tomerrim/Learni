import { getTopic } from "@/services/topics.server";
import SectionComponent from "@/components/Section";
import Section from "@/types/Section";
import TopicActions from "@/components/TopicActions";
import DisplayText from "@/components/DisplayText";

interface TopicPageProps {
    params: {
        topicId: string;
    }
}

export const metadata = {
    title: "Topic",
    description: "Topic page",
    
}

export default async function TopicPage(props: TopicPageProps) {
    const { topicId } = props.params;
    const { name, introduction, sections } = await getTopic(topicId);
    return (
        <>
            <h1>{name}</h1>
            <TopicActions topicId={topicId}/>
            <DisplayText text={introduction}/>
            {sections.map((section: Section) => <SectionComponent key={section.id} section={section} />)}
        </>
    );
}