import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext.js'; // AuthContextからのフックを使用

// PrivateRouteコンポーネントの代わりに使用するフック
// PrivateRouteコンポーネントの代わりに使用するフック
function usePrivateRoute({children}) {
    
    const auth = useAuth();
  
    if (!auth.isAuthenticated) {
      return <Navigate to="/Login" replace />;
    }
  
    return children;

}export default usePrivateRoute;
  