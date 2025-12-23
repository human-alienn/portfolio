import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ imageUrl, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-slide-in-up"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-10"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-contain rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}
