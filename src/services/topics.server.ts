import { firestore } from "@/firebase";
import Topic from "@/types/Topic";
import { redirect } from "next/navigation";

export async function getTopics() {
    const snapshot: FirebaseFirestore.QuerySnapshot = await firestore.collection("topics").get();
    const topics: Topic[] = snapshot.docs.map((doc) => {
        const {name, introduction, sections} = doc.data();
        return {
            id: doc.id,
            name,
            introduction,
            sections,
        }
    })
    return topics;
}

export async function getTopic(topicId: string) {
    const document: FirebaseFirestore.DocumentSnapshot = await firestore.collection("topics").doc(topicId).get();
    const data = document.data();

    if(!(document.exists && data)) {
        redirect("/topics")
    }   
    
    return {
        id: document.id,
        name: data.name,
        introduction: data.introduction,
        sections: data.sections,
    }
}

export function isTopicValid(topic: Topic) {
    return (topic.name && topic.introduction && topic.sections && topic.name.length > 3 && topic.introduction.length > 3 && topic.sections.length > 0);
}