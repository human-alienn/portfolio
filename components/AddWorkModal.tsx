import { X, Upload, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import type { WorkItem } from '../App';

interface AddWorkModalProps {
  onClose: () => void;
  onAdd: (work: Omit<WorkItem, 'id'>) => void;
}

export function AddWorkModal({ onClose, onAdd }: AddWorkModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'general' as 'general' | 'website' | 'moderator' | 'raider',
    description: '',
    image: '',
    link: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.image) {
      alert('Please fill in required fields (Title, Description, and Image URL)');
      return;
    }

    onAdd({
      title: formData.title,
      category: formData.category,
      description: formData.description,
      image: formData.image,
      link: formData.link || undefined,
      date: formData.date,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-slide-in-up">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl max-w-2xl w-full border border-white/60 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative flex items-center justify-between p-8 border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-xl z-10 rounded-t-3xl">
          <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              Add New Work
            </h2>
            <p className="text-gray-600 mt-1">Showcase your amazing project</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-90"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-gray-700 mb-3 flex items-center gap-2">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Amazing Community Campaign"
              className="w-full px-6 py-4 bg-white/80 text-gray-800 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-3">Category</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, category: 'general' })}
                className={`relative px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  formData.category === 'general'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-blue-500'
                }`}
              >
                General Work
                {formData.category === 'general' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-50 -z-10"></div>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setFormData({ ...formData, category: 'website' })}
                className={`relative px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  formData.category === 'website'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/50'
                    : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-pink-500'
                }`}
              >
                Website
                {formData.category === 'website' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 blur opacity-50 -z-10"></div>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setFormData({ ...formData, category: 'moderator' })}
                className={`relative px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  formData.category === 'moderator'
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg shadow-green-500/50'
                    : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-green-500'
                }`}
              >
                Moderator
                {formData.category === 'moderator' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 blur opacity-50 -z-10"></div>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setFormData({ ...formData, category: 'raider' })}
                className={`relative px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  formData.category === 'raider'
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/50'
                    : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-red-500'
                }`}
              >
                Raider
                {formData.category === 'raider' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 blur opacity-50 -z-10"></div>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-3">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell us about your amazing work, achievements, and the impact you made..."
              rows={4}
              className="w-full px-6 py-4 bg-white/80 text-gray-800 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-3 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-purple-600" />
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full px-6 py-4 bg-white/80 text-gray-800 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
            />
            <p className="text-gray-500 mt-2 text-sm">
              Paste a direct link to an image (Imgur, Google Drive, or your own hosting)
            </p>
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div>
              <label className="block text-gray-700 mb-3">Preview</label>
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 shadow-lg">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}

          {formData.category === 'website' && (
            <div>
              <label className="block text-gray-700 mb-3">Website Link</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://your-awesome-website.com"
                className="w-full px-6 py-4 bg-white/80 text-gray-800 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
              />
              <p className="text-gray-500 mt-2 text-sm">
                Add a link so visitors can check out your live website
              </p>
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-3">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-6 py-4 bg-white/80 text-gray-800 rounded-2xl border border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="relative flex-1 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-2xl shadow-xl shadow-purple-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Add Work
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur opacity-50 -z-10"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}