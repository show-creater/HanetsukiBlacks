import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Page/View/HomePage.js'; // ホームページのコンポーネント
import Blog from './Page/View/Blog.js'; // ブログページのコンポーネント
import Chat from './Page/View/Chat.js'; // ブログページのコンポーネント
import Admin from './Page/View/adminPage.js'; // ブログページのコンポーネント
import BlogLatest from './Page/View/BlogLatest.js';
import Login from './Page/View/login.js';
import { AuthProvider } from './AuthContext.js';
import PrivateRoute from './Page/View/PrivateRoute';
import {useAuth} from './AuthContext.js';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/BlogLatest" element={<BlogLatest />} />
          <Route path="/Admin" element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          } />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
