import { firestore } from "@/firebase";
import Topic from "@/types/Topic";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, context: { params: { topicId: string } }) {
    try {
        const { topicId } = context.params;
        const topic: Topic = await request.json();

        if (!topicId) {
            return new NextResponse("Invalid Request", { status: 400 });
        }

        await firestore.collection("topics").doc(topicId).set({
            name: topic.name,
            introduction: topic.introduction,
            sections: topic.sections
        })

        console.log("topic updated successfully");
        return NextResponse.json({message: "topic updated successfully"});
    } catch (error) {
        console.error("Error editing topic: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });  
    }
}
