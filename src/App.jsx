import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
