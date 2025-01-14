import { SignUp } from "@clerk/clerk-react";
import Header from "../components/Header";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <div className="bg-lime-300 flex flex-row justify-center items-center p-14">
        <SignUp signInUrl="/login" forceRedirectUrl={"/dashboard"} />
      </div>
    </>
  );
};

export default SignUpPage;
