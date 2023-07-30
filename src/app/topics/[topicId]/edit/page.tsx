import TopicForm from "@/components/TopicForm";
import { getTopic } from "@/services/topics.server";

interface EditTopicProps {
    params: {
        topicId: string;
    }
}
// export const dynamic = "force-static";

export const metadata = {
    title: "Edit Topic",
    description: "Edit Topic Page"
}

export default async function EditTopic(props: EditTopicProps) {
    const {topicId} = props.params;
    const topic = await getTopic(topicId);
    return (
        <>
            <h1>Edit Topic</h1>
            <TopicForm topicId={topicId} name={topic.name} introduction={topic.introduction} sections={topic.sections}/>
        </>
    )
}