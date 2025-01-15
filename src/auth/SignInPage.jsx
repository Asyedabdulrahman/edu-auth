import { SignIn, useClerk } from "@clerk/clerk-react";
import Header from "../components/Header";
import { useEffect } from "react";

const SigninPage = () => {
  const { isSignedIn, user } = useClerk();

  useEffect(() => {
    if (isSignedIn) {
      window.location.href = "/dashboard";
    }
  }, [isSignedIn]);

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
