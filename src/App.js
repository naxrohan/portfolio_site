import MyApps from "./pages/MyApps";
import HomePage from "./pages/HomePage";
import MyWork from "./pages/MyWork";
import Blog from "./pages/Blog";
import BlogsPage from "./pages/BlogsPage";
import AppsPage from "./pages/AppsPage"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<MyApps />} />
          <Route path="/apps/:appName" element={<AppsPage />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/my-work/:workName" element={<MyWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleName" element={<BlogsPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
  );
}

export default App;
