import connectMongoDb from "@/lib/db";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;

  const { newTitle: title, newDescription: description } = await req.json();
  console.log("Params:", params);
  await connectMongoDb();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Topic updated successfully" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDb();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
