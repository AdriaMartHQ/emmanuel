
import React, { useEffect } from 'react';
import { 
  createHashRouter, 
  RouterProvider, 
  Outlet, 
  Navigate, 
  useLocation 
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// 页面组件
import Home from './pages/Home';
import Approach from './pages/Approach';
import Focus from './pages/Focus';
import Cases from './pages/Cases';
import Cooperation from './pages/Cooperation';
import Contact from './pages/Contact';

// 页面切换自动回到顶部逻辑
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return null;
};

// 全局根布局
const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// 1. 创建路由实例并配置 Future Flags
const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'approach',
        element: <Approach />,
      },
      {
        path: 'focus',
        element: <Focus />,
      },
      {
        path: 'cases',
        element: <Cases />,
      },
      {
        path: 'cooperation',
        element: <Cooperation />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

const App: React.FC = () => {
  return (
    <RouterProvider 
      router={router} 
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
