import { getTopic } from "@/services/topics.server";
import SectionComponent from "@/components/Section";
import Section from "@/types/Section";
import TopicActions from "@/components/TopicActions";
import { formatParagraph } from "@/utils";

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
    // const intro = formatParagraph(introduction).split('\n')
    return (
        <>
            <h1>{name}</h1>
            <TopicActions topicId={topicId}/>
            <p>{introduction}</p>
             {/* {intro.map((line, index) => <p key={index}>{line}</p>)} */}
            {sections.map((section: Section) => <SectionComponent key={section.id} section={section} />)}
        </>
    );
}