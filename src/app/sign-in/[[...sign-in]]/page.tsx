import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  <div className="w-screen min-h-screen bg-gradient-to-r">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn />
    </div>
  </div>;
};

export default SignInPage;
