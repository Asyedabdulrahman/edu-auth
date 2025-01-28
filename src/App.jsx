import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Page from "./dashboard/Page";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";
import LessonPlan from "./components/LessonPlan";
import Splinee from "./dashboard/Spline";

const AppComponent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Page />} />
        <Route path="/lessonPlan" element={<LessonPlan />} />
        <Route path="/spline" element={<Splinee />} />
        {/* remove splinee code before pushing, i just tested how its works. */}
      </Routes>

      {location.pathname !== "/lessonPlan" && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppComponent />
    </Router>
  );
};

export default App;
