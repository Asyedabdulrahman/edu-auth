// import Testing from "./Testing";
import { useEffect } from "react";
import Layout from "../components/Layout";
import ProgressOverview from "../components/ProgressOverview";
import ExploreSection from "../components/ExploreSection";
import CollaborativeUpdates from "../components/CollaborativeUpdates";
import Activity from "../components/Activity";

const Page = () => {
  useEffect(() => {
    // Get the current URL
    const url = new URL(window.location.href);

    // Check if the __clerk_handshake parameter exists
    if (url.searchParams.has("__clerk_handshake")) {
      // Remove the __clerk_handshake parameter
      url.searchParams.delete("__clerk_handshake");

      // Update the URL in the browser without refreshing the page
      window.history.replaceState(null, "", url.toString());
    }
  }, []);
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