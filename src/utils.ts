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

export function formatParagraph(paragraph: string) {
    // Splitting on ": " to get the introduction and the list of points
    const [introduction, ...rest] = paragraph.split(": ");

    // Combining the introduction with the list of points
    const formattedIntroduction = introduction + ":\n\n";
    const formattedPoints = rest.join(": ").split(/\d+\./).slice(1).map((point, index) => 
        (index + 1) + "." + point.trim()
    ).join("\n\n");

    return formattedIntroduction + formattedPoints;
}