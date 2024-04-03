import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/View/HomePage.js'; // ホームページのコンポーネント
import Blog from './Page/View/Blog.js'; // ブログページのコンポーネント
import Chat from './Page/View/Chat.js'; // ブログページのコンポーネント
import BlogLatest from './Page/View/BlogLatest.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/BlogLatest" element={<BlogLatest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
