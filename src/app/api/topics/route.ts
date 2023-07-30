import { firestore } from "@/firebase";
import { isTopicValid } from "@/services/topics.server";
import Topic from "@/types/Topic";
import { NextRequest, NextResponse } from "next/server";

//POST /api/topics
export async function POST(request: NextRequest) {
    const topic: Topic = await request.json();
    
    // if(!(isTopicValid(topic))) {
    //     return new NextResponse("Bad Request", { status: 400 });
    // }

    try {
        await firestore.collection("topics").doc().set({...topic});
        console.log("Topic added successfully");
        return NextResponse.json({message: "Topic added successfully"});
    } catch (error) {
        console.error("error adding topic: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}