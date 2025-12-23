import { Trash2, ExternalLink, Calendar, Tag, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ImageModal } from './ImageModal';
import type { WorkItem } from '../App';

interface WorkGridProps {
  works: WorkItem[];
  onDelete: (id: string) => void;
}

export function WorkGrid({ works, onDelete }: WorkGridProps) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  if (works.length === 0) {
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 text-center border border-white/60 shadow-xl">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-gray-800 mb-2">No Projects Yet</h3>
        <p className="text-gray-600">Start showcasing your amazing work by adding your first project!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {works.map((work, index) => (
        <div
          key={work.id}
          className="group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Image */}
          <div className="relative h-[28rem] overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ url: work.image, alt: work.title })}>
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm shadow-lg transition-all duration-300 transform group-hover:scale-110 ${
                work.category === 'website'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                  : work.category === 'moderator'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : work.category === 'raider'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              }`}>
                <Tag className="w-4 h-4" />
                {work.category === 'website' ? 'Website' : work.category === 'moderator' ? 'Moderator' : work.category === 'raider' ? 'Raider/Shiller' : 'General'}
              </span>
            </div>

            {/* Delete Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(work.id);
              }}
              className="absolute top-4 right-4 p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl z-10"
            >
              <Trash2 className="w-5 h-5" />
            </button>

            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-gray-800 flex-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {work.title}
              </h3>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
              {work.description}
            </p>

            <div className="flex items-center gap-2 text-gray-500">
              <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                <Calendar className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-sm">
                {new Date(work.date).getFullYear()}
              </span>
            </div>
          </div>

          {/* Bottom Gradient Bar */}
          <div className={`h-1 bg-gradient-to-r ${
            work.category === 'website'
              ? 'from-pink-500 to-rose-500'
              : work.category === 'moderator'
              ? 'from-green-500 to-emerald-500'
              : work.category === 'raider'
              ? 'from-red-500 to-orange-500'
              : 'from-blue-500 to-purple-500'
          }`}></div>
        </div>
      ))}
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.url}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}