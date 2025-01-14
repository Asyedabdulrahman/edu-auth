import Testing from "./Testing";
import React from "react";
import Layout from "../components/Layout";
import ProgressOverview from "../components/ProgressOverview";
import ExploreSection from "../components/ExploreSection";
import CollaborativeUpdates from "../components/CollaborativeUpdates";
import Activity from "../components/Activity";

const Page = () => {
  return (
    <Layout>
      <h2 className="text-xl font-bold pb-3 flex flex-row justify-start">
        Hello <span className="text-primary pl-2">Madhavan</span>, Welcome Back!
      </h2>

      {/* Progress Overview */}
      <ProgressOverview />

      {/* ExploreSection */}
      <ExploreSection />

      {/* CollaborativeAndActivity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <CollaborativeUpdates />
        <Activity />
      </div>
    </Layout>
  );
};

export default Page;




// import Testing from "./Testing";
// const Page = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <Testing />
//     </div>
//   );
// };

// export default Page;
