import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import BrainrotClickerPage from './pages/BrainrotClickerPage';
import BrainrotHookSwingPage from './pages/BrainrotHookSwingPage';
import ItalianBrainrotBabyClickerPage from './pages/ItalianBrainrotBabyClickerPage';
import StealTheItalianBrainrotPage from './pages/StealTheItalianBrainrotPage';
import ObbyMySingingBrainrotPage from './pages/ObbyMySingingBrainrotPage';
import StealBrainrotOnlinePage from './pages/StealBrainrotOnlinePage';
import StealBrainrotNewAnimalsPage from './pages/StealBrainrotNewAnimalsPage';
import FixDaBrainrotPage from './pages/FixDaBrainrotPage';
import MemoryBrainrotPage from './pages/MemoryBrainrotPage';
import ItalianBrainrotClicker2Page from './pages/ItalianBrainrotClicker2Page';
import PlantsVsBrainrotsPage from './pages/PlantsVsBrainrotsPage';
import CrazyCattle3DPage from './pages/CrazyCattle3DPage';
import BrainrotTagPage from './pages/BrainrotTagPage';
import CasualTagPage from './pages/CasualTagPage';
import MemeTagPage from './pages/MemeTagPage';
import ClickerTagPage from './pages/ClickerTagPage';
import RobloxTagPage from './pages/RobloxTagPage';
import PuzzleTagPage from './pages/PuzzleTagPage';
import IdleTagPage from './pages/IdleTagPage';
import FunnyTagPage from './pages/FunnyTagPage';
import StrategyTagPage from './pages/StrategyTagPage';
import AdventureTagPage from './pages/AdventureTagPage';
import BrainTagPage from './pages/BrainTagPage';
import ArcadeTagPage from './pages/ArcadeTagPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CopyrightPage from './pages/CopyrightPage';

interface Route {
  path: RegExp;
  component: (params: any) => JSX.Element;
}

const routes: Route[] = [
  {
    path: /^\/$/,
    component: () => <HomePage />,
  },
  {
    path: /^\/tag\/brainrot$/,
    component: () => <BrainrotTagPage />,
  },
  {
    path: /^\/tag\/casual$/,
    component: () => <CasualTagPage />,
  },
  {
    path: /^\/tag\/meme$/,
    component: () => <MemeTagPage />,
  },
  {
    path: /^\/tag\/clicker$/,
    component: () => <ClickerTagPage />,
  },
  {
    path: /^\/tag\/roblox$/,
    component: () => <RobloxTagPage />,
  },
  {
    path: /^\/tag\/puzzle$/,
    component: () => <PuzzleTagPage />,
  },
  {
    path: /^\/tag\/idle$/,
    component: () => <IdleTagPage />,
  },
  {
    path: /^\/tag\/funny$/,
    component: () => <FunnyTagPage />,
  },
  {
    path: /^\/tag\/strategy$/,
    component: () => <StrategyTagPage />,
  },
  {
    path: /^\/tag\/adventure$/,
    component: () => <AdventureTagPage />,
  },
  {
    path: /^\/tag\/brain$/,
    component: () => <BrainTagPage />,
  },
  {
    path: /^\/tag\/arcade$/,
    component: () => <ArcadeTagPage />,
  },
  {
    path: /^\/all$/,
    component: () => <CategoryPage slug="all" />,
  },
  {
    path: /^\/hot$/,
    component: () => <CategoryPage slug="hot" />,
  },
  {
    path: /^\/search$/,
    component: () => <SearchPage />,
  },
  {
    path: /^\/about$/,
    component: () => <AboutUsPage />,
  },
  {
    path: /^\/contact$/,
    component: () => <ContactUsPage />,
  },
  {
    path: /^\/terms$/,
    component: () => <TermsOfUsePage />,
  },
  {
    path: /^\/privacy$/,
    component: () => <PrivacyPolicyPage />,
  },
  {
    path: /^\/copyright$/,
    component: () => <CopyrightPage />,
  },
  // 具体游戏路由（必须在通配符之前）
  {
    path: /^\/brainrot-clicker$/,
    component: () => <BrainrotClickerPage />,
  },
  {
    path: /^\/brainrot-hook-swing$/,
    component: () => <BrainrotHookSwingPage />,
  },
  {
    path: /^\/italian-brainrot-baby-clicker$/,
    component: () => <ItalianBrainrotBabyClickerPage />,
  },
  {
    path: /^\/steal-the-italian-brainrot$/,
    component: () => <StealTheItalianBrainrotPage />,
  },
  {
    path: /^\/obby-my-singing-brainrot$/,
    component: () => <ObbyMySingingBrainrotPage />,
  },
  {
    path: /^\/steal-brainrot-online$/,
    component: () => <StealBrainrotOnlinePage />,
  },
  {
    path: /^\/steal-brainrot-new-animals$/,
    component: () => <StealBrainrotNewAnimalsPage />,
  },
  {
    path: /^\/fix-da-brainrot$/,
    component: () => <FixDaBrainrotPage />,
  },
  {
    path: /^\/memory-brainrot$/,
    component: () => <MemoryBrainrotPage />,
  },
  {
    path: /^\/italian-brainrot-clicker-2$/,
    component: () => <ItalianBrainrotClicker2Page />,
  },
  {
    path: /^\/plants-vs-brainrots$/,
    component: () => <PlantsVsBrainrotsPage />,
  },
  {
    path: /^\/crazy-cattle-3d$/,
    component: () => <CrazyCattle3DPage />,
  },
  // 通用游戏详情页路由（必须放在最后）
  {
    path: /^\/([a-z0-9-]+)$/,
    component: (params) => <GameDetailPage slug={params[1]} />,
  },
];

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  for (const route of routes) {
    const match = currentPath.match(route.path);
    if (match) {
      return route.component(match);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Page not found</p>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
