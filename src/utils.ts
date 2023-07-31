import Topic from "./types/Topic";

export default function sendPutOrPostRequest(topic: Topic, url: string) {
    const method = topic?.id ? "PUT" : "POST";
    console.log("topic is: ", topic);
    return fetch(`${url}/${topic?.id || "" }`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
    })
}

export function sendDeleteRequest(topicId: string, url: string) {
    return fetch(`${url}/${topicId}`, {
        method: "DELETE",
    });
}