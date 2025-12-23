import { useState } from 'react';
import { Plus, Sparkles, TrendingUp } from 'lucide-react';
import { WorkGrid } from './WorkGrid';
import { AddWorkModal } from './AddWorkModal';
import type { WorkItem } from '../App';

interface ProofOfWorkProps {
  works: WorkItem[];
  onAddWork: (work: Omit<WorkItem, 'id'>) => void;
  onDeleteWork: (id: string) => void;
}

export function ProofOfWork({ works, onAddWork, onDeleteWork }: ProofOfWorkProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'general' | 'website' | 'moderator' | 'raider'>('all');

  const filteredWorks = works.filter(work => {
    if (filter === 'all') return true;
    return work.category === filter;
  });

  const generalCount = works.filter(w => w.category === 'general').length;
  const websiteCount = works.filter(w => w.category === 'website').length;
  const moderatorCount = works.filter(w => w.category === 'moderator').length;
  const raiderCount = works.filter(w => w.category === 'raider').length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-in-up">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-4">
          Proof of Work
        </h1>
        <p className="text-gray-700 text-xl">Showcasing excellence through results</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Total Projects</p>
              <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
            </div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {works.length}
            </h2>
          </div>
        </div>

        <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">General Work</p>
              <TrendingUp className="w-6 h-6 text-blue-500 animate-pulse" />
            </div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {generalCount}
            </h2>
          </div>
        </div>

        <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Websites Built</p>
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
            </div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              {websiteCount}
            </h2>
          </div>
        </div>

        <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Moderator Work</p>
              <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600">
              {moderatorCount}
            </h2>
          </div>
        </div>

        <div className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Raider/Shiller Work</p>
              <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
              {raiderCount}
            </h2>
          </div>
        </div>
      </div>

      {/* Filter and Add Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/60 text-gray-700 hover:bg-white/80'
            }`}
          >
            All Work
            {filter === 'all' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-50 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={() => setFilter('general')}
            className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              filter === 'general'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white/60 text-gray-700 hover:bg-white/80'
            }`}
          >
            General
            {filter === 'general' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-50 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={() => setFilter('website')}
            className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              filter === 'website'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/50'
                : 'bg-white/60 text-gray-700 hover:bg-white/80'
            }`}
          >
            Websites
            {filter === 'website' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 blur opacity-50 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={() => setFilter('moderator')}
            className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              filter === 'moderator'
                ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-lg shadow-rose-500/50'
                : 'bg-white/60 text-gray-700 hover:bg-white/80'
            }`}
          >
            Moderator
            {filter === 'moderator' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 blur opacity-50 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={() => setFilter('raider')}
            className={`relative px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              filter === 'raider'
                ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg shadow-red-500/50'
                : 'bg-white/60 text-gray-700 hover:bg-white/80'
            }`}
          >
            Raider/Shiller
            {filter === 'raider' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 blur opacity-50 -z-10"></div>
            )}
          </button>
        </div>
      </div>

      {/* Work Grid */}
      <WorkGrid works={filteredWorks} onDelete={onDeleteWork} />

      {/* Add Work Modal */}
      {isAddModalOpen && (
        <AddWorkModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={onAddWork}
        />
      )}
    </div>
  );
}