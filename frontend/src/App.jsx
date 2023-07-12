import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import ChatPageId from "./pages/ChatPageId";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatpage" element={<ChatPage />} />
            <Route path="/chatpage/:id" element={<ChatPageId />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </main>
      <BottomNav />
    </>
  );
};

export default App;
