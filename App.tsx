import { useState } from 'react';
import { Home } from './components/Home';
import { ProofOfWork } from './components/ProofOfWork';
import { Briefcase, FolderOpen, Sparkles } from 'lucide-react';

// ===========================================
// 🖼️ LOCAL IMAGES - Just add to /public/images/ folder
// ===========================================
// Put your images in the /public/images/ folder with these exact names:

const profileImg = '/images/profile.jpg';
const chuckyImg = '/images/chucky.jpg';
const truthStreamImg = '/images/truthstream.jpg';
const chubbyChickensImg = '/images/chubbychickens.jpg';
const teftLegionImg = '/images/teftlegion.jpg';
const solweenImg = '/images/solween.jpg';
const okenImg = '/images/oken.jpg';
const arbitrageInceptionImg = '/images/arbitrageinception.jpg';
const countPepeImg = '/images/countpepe.jpg';
const truthStreamRaiderImg = '/images/truthstreamraider.jpg';
const goldClickerImg = '/images/goldclicker.jpg';
const intrusiveImg = '/images/intrusive.jpg';
const benikoGoImg = '/images/benikogo.jpg';
const dogaiRaiderImg = '/images/dogairaider.jpg';
const bitMartImg = '/images/bitmart.jpg';
const blackDuckImg = '/images/blackduck.jpg';
const dorProgramImg = '/images/dorprogram.jpg';
const staxicoImg = '/images/staxico.jpg';
const holdczImg = '/images/holdcz.jpg';
const solspliffImg = '/images/solspliff.jpg';
const weedcoinImg = '/images/weedcoin.jpg';
const caderaImg = '/images/cadera.jpg';
const flyaiImg = '/images/flyai.jpg';

export interface WorkItem {
  id: string;
  title: string;
  category: 'general' | 'website' | 'moderator' | 'raider';
  description: string;
  image: string;
  link?: string;
  date: string;
}

const initialWorks: WorkItem[] = [
  {
    id: '1',
    title: 'Staxico - Affiliate Platform',
    category: 'website',
    description: 'Complete affiliate marketing platform with modern UI',
    image: staxicoImg,
    link: 'https://human-alienn.github.io/staxico/',
    date: '2025-01',
  },
  {
    id: '2',
    title: 'HoldCZ - Crypto Project',
    category: 'website',
    description: 'Professional crypto landing page with engaging design',
    image: holdczImg,
    link: 'http://holdcz.com',
    date: '2024-10',
  },
  {
    id: '4',
    title: 'SolSpliff - Web3 Platform',
    category: 'website',
    description: 'Modern Web3 platform with smooth animations',
    image: solspliffImg,
    link: 'https://solspliff.vercel.app/',
    date: '2024-08',
  },
  {
    id: '5',
    title: 'WeedCoin - PFP Maker',
    category: 'website',
    description: 'Interactive profile picture generator',
    image: weedcoinImg,
    link: 'https://weedcoinnn.vercel.app',
    date: '2024-07',
  },
  {
    id: '6',
    title: 'Celdata - AI Platform (Launching Soon)',
    category: 'website',
    description: 'Cutting-edge AI platform with innovative features',
    image: caderaImg,
    link: 'https://caderaaa.netlify.app',
    date: '2025-01',
  },
  {
    id: '7',
    title: 'FlyAI - AI Platform (Launching Soon)',
    category: 'website',
    description: 'Revolutionary AI technology platform',
    image: flyaiImg,
    link: 'https://flyaiiii.netlify.app/',
    date: '2025-01',
  },
  {
    id: '8',
    title: 'CreatorAI - AI Platform (Launching Soon)',
    category: 'website',
    description: 'Next-generation AI platform for creators',
    image: 'https://images.unsplash.com/photo-1542222503545-8ed6e9ac17fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGxhbmRpbmd8ZW58MXx8fHwxNzY2NDc4NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'https://creatoraiii.netlify.app/',
    date: '2025-01',
  },
  {
    id: '9',
    title: 'Phoenix Ecosystem Growth',
    category: 'general',
    description: 'Built and manage 20,000+ engaged followers on X',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    date: '2024-06',
  },
  {
    id: '29',
    title: 'Black Duck RWA/BDTR - Ambassador',
    category: 'general',
    description: 'Ambassador for Black Duck with 2,059+ members',
    image: blackDuckImg,
    date: '2025-02',
  },
  {
    id: '30',
    title: 'DOR Program - Ambassador',
    category: 'general',
    description: 'Ambassador for DOR Program with 734+ members',
    image: dorProgramImg,
    date: '2025-01',
  },
  {
    id: '10',
    title: 'CHUCKY - Telegram Moderation',
    category: 'moderator',
    description: 'Admin and moderator for CHUCKY community',
    image: chuckyImg,
    date: '2025-06',
  },
  {
    id: '11',
    title: 'Truth.Stream.Coin - Community Management',
    category: 'moderator',
    description: 'Moderator for Truth.Stream.Coin with 74+ members',
    image: truthStreamImg,
    date: '2025-05',
  },
  {
    id: '12',
    title: '$CHBY (Chubby Chickens) - Community Admin',
    category: 'moderator',
    description: 'Admin of $CHBY community with 1,506+ members',
    image: chubbyChickensImg,
    date: '2025-04',
  },
  {
    id: '13',
    title: 'Teft Legion - Community Management',
    category: 'moderator',
    description: 'Moderator for Teft Legion with 214+ members',
    image: teftLegionImg,
    date: '2025-03',
  },
  {
    id: '14',
    title: 'Solween - Community Admin',
    category: 'moderator',
    description: 'Admin of Solween community with 102+ members',
    image: solweenImg,
    date: '2025-02',
  },
  {
    id: '15',
    title: 'Panda Official Community - Moderator',
    category: 'moderator',
    description: 'Moderator for Panda group with 80+ members',
    image: okenImg,
    date: '2025-01',
  },
  {
    id: '16',
    title: 'Arbitrage Inception - Raider Shiller',
    category: 'raider',
    description: 'Raider shiller with 1,430+ members driving engagement',
    image: arbitrageInceptionImg,
    date: '2025-06',
  },
  {
    id: '17',
    title: 'COUNT PEPE LIVE - Count Raider',
    category: 'raider',
    description: 'Count raider with 300+ members leading raid operations',
    image: countPepeImg,
    date: '2025-05',
  },
  {
    id: '18',
    title: 'Truth.Stream.Coin - Raider',
    category: 'raider',
    description: 'Raider with 74+ members executing targeted raids',
    image: truthStreamRaiderImg,
    date: '2025-04',
  },
  {
    id: '19',
    title: '$INTRUSIVE - Community Shiller',
    category: 'raider',
    description: 'Shiller with 902+ members promoting project awareness',
    image: intrusiveImg,
    date: '2025-03',
  },
  {
    id: '23',
    title: 'Beniko Go - Community Raider',
    category: 'raider',
    description: 'Raider for Beniko Go with 87+ members',
    image: benikoGoImg,
    date: '2025-02',
  },
  {
    id: '24',
    title: '$DOGAI_GG - Community Raider',
    category: 'raider',
    description: 'Raider for $DOGAI_GG with 1,501+ members',
    image: dogaiRaiderImg,
    date: '2025-01',
  },
  {
    id: '25',
    title: 'BITTO BitMart Mascot - CTO Raider',
    category: 'raider',
    description: 'Raider for BITTO BitMart Mascot with 392+ members',
    image: bitMartImg,
    date: '2025-01',
  },
  {
    id: '20',
    title: 'Gold Clicker - Web3 Game',
    category: 'raider',
    description: 'Interactive Web3 game with reward system',
    image: goldClickerImg,
    date: '2024-08',
  },
  {
    id: '22',
    title: 'Intrusive - Web3 Platform',
    category: 'raider',
    description: 'Web3 platform with unique features and modern design',
    image: intrusiveImg,
    date: '2024-09',
  },
  {
    id: '26',
    title: 'BenikoGo - Web3 Platform',
    category: 'raider',
    description: 'Web3 platform with unique features and modern design',
    image: benikoGoImg,
    date: '2024-09',
  },
  {
    id: '27',
    title: 'DogAI Raider - Web3 Platform',
    category: 'raider',
    description: 'Web3 platform with unique features and modern design',
    image: dogaiRaiderImg,
    date: '2024-09',
  },
  {
    id: '28',
    title: 'BitMart - Web3 Platform',
    category: 'raider',
    description: 'Web3 platform with unique features and modern design',
    image: bitMartImg,
    date: '2024-09',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'proof'>('home');
  const [works, setWorks] = useState<WorkItem[]>(initialWorks);

  const handleAddWork = (work: Omit<WorkItem, 'id'>) => {
    const newWork: WorkItem = {
      ...work,
      id: Date.now().toString(),
    };
    setWorks([newWork, ...works]);
  };

  const handleDeleteWork = (id: string) => {
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-xl bg-white/40 border-b border-white/60 shadow-lg sticky top-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <img src={profileImg} alt="Akande Ezekiel" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Akande Ezekiel
                </h2>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-pink-500 animate-pulse" />
                  <p className="text-gray-600">Portfolio</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentPage('home')}
                className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'home'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="hidden sm:inline">Home</span>
                </span>
                {currentPage === 'home' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-50 -z-10"></div>
                )}
              </button>
              
              <button
                onClick={() => setCurrentPage('proof')}
                className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  currentPage === 'proof'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5" />
                  <span className="hidden sm:inline">Proof of Work</span>
                </span>
                {currentPage === 'proof' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-50 -z-10"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="relative z-10">
        {currentPage === 'home' ? (
          <Home />
        ) : (
          <ProofOfWork
            works={works}
            onAddWork={handleAddWork}
            onDeleteWork={handleDeleteWork}
          />
        )}
      </div>
    </div>
  );
}