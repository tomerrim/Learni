import TopicForm from "@/components/TopicForm";


export const metadata = {
    title: "New Topic",
    description: "New Topic Page"
}

export default function NewTopic() {

    return (
        <>
            <h1>Create New Topic</h1>
            <TopicForm/>
        </>
    );
}