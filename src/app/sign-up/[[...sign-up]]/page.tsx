import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-red-400 to-purple-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
