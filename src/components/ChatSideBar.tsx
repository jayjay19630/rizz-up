"use client";
import { DrizzleChat } from "@/lib/db/schema";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MessageCircle, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
};

const ChatSideBar = ({ chats, chatId }: Props) => {
  return (
    <div className="w-full max-h-screen min-h-screen overflow-scroll soff p-4 text-gray-200 bg-rose-400">
      <Link href="/">
        <Button className="w-full border-dashed border-white bg-rose-400 hover:bg-rose-500 border">
          <PlusCircle className="mr-2 w-4 h-4" />
          Create New Chat
        </Button>
      </Link>

      <div className="flex max-h-screen overflow-scroll pb-20 flex-col gap-2 mt-4">
        {chats.map((chat) => (
          <Link key={chat.id} href={`/chats/${chat.id}`}>
            <div
              className={cn("rounded-lg p-3 text-white flex items-center", {
                "bg-rose-500 text-white": chat.id === chatId,
                "hover:text-white": chat.id !== chatId,
                "hover:bg-rose-500": chat.id !== chatId,
              })}
            >
              <MessageCircle className="mr-2" />
              <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
                {chat.pdfName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatSideBar;
