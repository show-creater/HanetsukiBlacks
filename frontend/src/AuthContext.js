import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkTokenValidity = async () => {
    const token = localStorage.getItem('token'); // トークンの取得
    if (!token) {
      // console.log('トークンが存在しません。');
      return false;
    }
  
    try {
      const response = await fetch('https://hanetsukiblackssite.onrender.com/rest-auth/user/', {
        method: 'POST', // またはGET、トークン検証のエンドポイントに依存
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data), // 必要に応じて
      });
  
      if (response.ok) {
        // トークンが有効
        // console.log('トークンは有効です。');
        return true;
      } else {
        // トークンが無効
        // console.log('トークンは無効です。');
        return false;
      }
    } catch (error) {
      // console.error('エラーが発生しました:', error);
      return false;
    }
  };
  
  // トークンの検証を試みる
  useEffect(() => {
    const verifyToken = async () => {
      const isValid = await checkTokenValidity();
      setIsAuthenticated(isValid);
    };
  
    verifyToken();
  }, []);
  


  const login = () => {
    setIsAuthenticated(true);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login }}>{children}</AuthContext.Provider>;
};
