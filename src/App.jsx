import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page from "./dashboard/Page";
// import { SignIn, SignUp } from "@clerk/clerk-react";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Page />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
