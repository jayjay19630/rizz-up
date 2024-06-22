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
              {!isAuth
                ? "Want to improve your rizz?"
                : "Starting improving your rizz!"}
            </h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth ?? <Button>Go to chats</Button>}
          </div>
          <div className="w-[600px] flex flex-col mt-6 mb-6 bg-red-100 p-5 rounded shadow">
            <div className="w-[300px] mb-4">
              <div className="relative bg-white p-4 rounded-lg shadow-md">
                <div className="absolute w-3 h-3 bg-white transform rotate-45 -left-2 translate-x-1"></div>
                <p className="text-left">
                  hey, do you want to go out tonight? I have some free time
                </p>
              </div>
            </div>
            <div className="w-[300px] ml-auto">
              <div className="relative bg-green-300 p-4 rounded-lg shadow-md">
                <div className="absolute w-3 h-3 bg-green-300 transform rotate-45 top-2 -right-1 translate-y-2"></div>
                <p className="text-gray-800 text-left">
                  uhhhhhhh..... maybe??? &#128517;
                </p>
              </div>
            </div>
          </div>

          <p className="max-w-xl text-lg text-amber-50">
            Export your Whatsapp texts here to generate text responses and rizz
            up your desired partner in style!
          </p>
          <div className="w-full mt-4"></div>
          {isAuth ? (
            <FileUpload />
          ) : (
            <Link href="/sign-in">
              <Button className="bg-red-500 hover:bg-red-400">
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
