import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTap, setSelectedTap] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
        <div className="content">
          <Header />
          {selectedTap === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
