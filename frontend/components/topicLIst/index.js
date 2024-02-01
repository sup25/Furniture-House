"use client";
import React from "react";
import RemoveBtn from "../removeBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import useGetTopics from "@/hooks/GetTopic";

export default function TopicLists() {
  const { topics } = useGetTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-2 items-start">
            <RemoveBtn />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
