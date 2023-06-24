import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Comment } from "./pages/Comment";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments/:postId" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
