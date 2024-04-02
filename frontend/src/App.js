import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/View/HomePage.js'; // ホームページのコンポーネント
import Blog from './Page/View/Blog.js'; // ブログページのコンポーネント
// import Chat from './Chat'; // ブログページのコンポーネント

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
