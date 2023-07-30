import Topic from "@/types/Topic";
import sendPutOrPostRequest, {sendDeleteRequest} from "@/utils";

const BASE_URL = "http://localhost:3000/api/topics";

export async function saveTopic(topic: Topic) {
    try {
        const response = await sendPutOrPostRequest(topic, BASE_URL);
        if(!response.ok) {
            alert("Network response was not OK");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        alert("ERROR");
    }
}

export async function deleteTopic(topicId: string) {
    try {
        const response = await sendDeleteRequest(topicId, BASE_URL);
        if(!response.ok) {
            alert("Network response was not OK");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        alert("ERROR");
    }
}