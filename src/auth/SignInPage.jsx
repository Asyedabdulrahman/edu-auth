import { SignIn } from "@clerk/clerk-react";
import Header from "../components/Header";

const SigninPage = () => {
  return (
    <>
      <Header />
      <div className="bg-lime-300 flex flex-row justify-center items-center p-20 z-10">
        <SignIn signUpUrl="/signup" forceRedirectUrl={"/dashboard"} />
      </div>
    </>
  );
};

export default SigninPage;
