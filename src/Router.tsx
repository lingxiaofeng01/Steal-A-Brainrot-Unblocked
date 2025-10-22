import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
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
import ActionTagPage from './pages/ActionTagPage';
import MultiplayerTagPage from './pages/MultiplayerTagPage';
import BattleTagPage from './pages/BattleTagPage';
import RacingTagPage from './pages/RacingTagPage';
import IOTagPage from './pages/IOTagPage';
import ShooterTagPage from './pages/ShooterTagPage';
import BuildingTagPage from './pages/BuildingTagPage';
import ThreeDTagPage from './pages/ThreeDTagPage';
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
    path: /^\/tag\/action$/,
    component: () => <ActionTagPage />,
  },
  {
    path: /^\/tag\/multiplayer$/,
    component: () => <MultiplayerTagPage />,
  },
  {
    path: /^\/tag\/battle$/,
    component: () => <BattleTagPage />,
  },
  {
    path: /^\/tag\/racing$/,
    component: () => <RacingTagPage />,
  },
  {
    path: /^\/tag\/io$/,
    component: () => <IOTagPage />,
  },
  {
    path: /^\/tag\/shooter$/,
    component: () => <ShooterTagPage />,
  },
  {
    path: /^\/tag\/building$/,
    component: () => <BuildingTagPage />,
  },
  {
    path: /^\/tag\/3d$/,
    component: () => <ThreeDTagPage />,
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
