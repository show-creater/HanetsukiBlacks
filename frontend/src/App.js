import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/View/HomePage.js'; // ホームページのコンポーネント
import Blog from './Page/View/Blog.js'; // ブログページのコンポーネント
import Chat from './Page/View/Chat.js'; // ブログページのコンポーネント
import Admin from './Page/View/adminPage.js'; // ブログページのコンポーネント
import BlogLatest from './Page/View/BlogLatest.js';
import Login from './Page/View/login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/BlogLatest" element={<BlogLatest />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
