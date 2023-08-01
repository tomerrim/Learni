"use client"

import Btn from "@/components/Btn";
import SectionForm from "@/components/SectionForm";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import { saveTopic } from "@/services/topics.client";
import Section from "@/types/Section";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface TopicFormProps {
    topicId?: string;
    name?: string;
    introduction?: string;
    sections?: Section[];
    // image?: string;
}

export default function TopicForm(props: TopicFormProps) {
    const [name, setName] = useState<string>(props?.name || "");
    const [introduction, setIntroduction] = useState<string>(props?.introduction || "")
    const [sections, setSections] = useState<Section[]>(props?.sections || []);
    const { push } = useRouter();
    const { data: session } = useSession();
    const createdBy = session?.user?.email;

    function updateSections(newSections: Section[]) {
        setSections(newSections);
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await saveTopic({id: props.topicId, name, introduction, sections, createdBy});
            console.log("Topic saved successfully");
            push("/topics");
        } catch (error) {
            console.error(error);
        }   
    }

    return (
        <form onSubmit={onSubmit}>
            <TextInput title="Name" value={name} onChangeEvent={(e) => setName(e.target.value)}/>
            <TextArea title="Introduction" rows={5} value={introduction} onChangeEvent={(e) => setIntroduction(e.target.value)}/>
            <SectionForm sections={sections} updateSections={updateSections}/>
            <Btn type="submit">Submit</Btn>
        </form>
    )
}