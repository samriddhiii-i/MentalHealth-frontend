import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Home from "./components/home/Home";
import Login from "./components/Login";
import GetHelp from "./components/GetHelp.jsx";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
import Signup from "./components/Signup";
import Blog from "./components/post/Blog.jsx";
import Post from "./components/post/post.jsx";
import Posts from "./components/post/Posts.jsx";
import DetailedPost from "./components/post/detailedpost.jsx";
import CreatePost from "./components/post/createpost.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gethelp" element={<GetHelp />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/taketest/:test" element={<QuizPage />} />
          <Route path="/results" element={<Results />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post" element={<Post />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/details/:postId" element={<DetailedPost />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
