import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Link from "next/link";

const HomePage = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-red-400 to-pink-400">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold text-amber-50">
              Can you feel the love tonight?
            </h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth ?? <Button>Go to chats</Button>}
          </div>
          <div className="mt-4 top-1/2 flex items-start">hello</div>
          <div className="mb-4 top-1/2 flex items-end">hello</div>
          <p className="max-w-xl mt-1 text-lg text-amber-50">
            Export your Whatsapp texts here to generate text responses and rizz
            up your partner in style!
          </p>
          <div className="w-full mt-4"></div>
          {isAuth ? (
            <FileUpload />
          ) : (
            <Link href="/sign-in">
              <Button className="bg-red-500 hover:bg-red-600">
                Login to get started
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
