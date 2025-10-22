import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
  fullscreen?: boolean; // 新增：是否全屏模式（隐藏侧边栏和页脚）
}

export default function Layout({ children, fullscreen = false }: LayoutProps) {
  if (fullscreen) {
    // 全屏模式：无侧边栏、无页脚
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTop />
      </div>
    );
  }

  // 普通模式：带侧边栏
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-blue-50 to-cyan-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
