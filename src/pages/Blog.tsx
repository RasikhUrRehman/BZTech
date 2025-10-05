import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, Loader2, BookOpen, Sparkles, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getAllBlogs, BlogPost } from '../utils/blogService';

const Blog: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogs = await getAllBlogs();
        setBlogPosts(blogs);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const displayPosts = blogPosts;

  const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
      
      <div className="relative overflow-hidden">
        <img 
          src={post.images && post.images.length > 0 ? post.images[0] : "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} 
          alt={post.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Tag className="h-3 w-3 mr-1" />
            {post.categories && post.categories.length > 0 ? post.categories[0] : 'Blog'}
          </span>
        </div>
      </div>
      
      <div className="relative p-8">
        <div className={`flex items-center text-gray-500 text-sm mb-4 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
          <div className="flex items-center gap-1 bg-purple-50 px-3 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-[#5c5c9c]" />
            <span className="font-medium text-[#5c5c9c]">{post.read_time || '5 min read'}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#5c5c9c] transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
        
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center bg-gray-50 px-3 py-2 rounded-lg ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#5c5c9c] to-[#6787f2] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {(post.author?.name || 'A')[0].toUpperCase()}
            </div>
            <span className="text-sm font-medium text-gray-700">{post.author?.name || 'Anonymous'}</span>
          </div>
          
          <Link 
            to={`/blog/${post.id}`}
            className={`group/link inline-flex items-center text-[#5c5c9c] hover:text-[#6787f2] font-semibold transition-all duration-300 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
          >
            <span>Read More</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <BookOpen className="h-4 w-4 text-[#f5a63a] mr-2" />
              <span className="text-sm font-medium">Insights & Updates</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Blog Posts Grid - Enhanced */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-32">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5c5c9c] to-[#6787f2] rounded-2xl flex items-center justify-center mb-6 animate-pulse shadow-2xl">
                  <Loader2 className="w-10 h-10 animate-spin text-white" />
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-700">Loading blog posts...</span>
            </div>
          ) : error ? (
            <div className="text-center py-32">
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <p className="text-red-600 mb-6 text-lg font-semibold">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#6787f2] hover:to-[#5c5c9c] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : displayPosts.length === 0 ? (
            <div className="text-center py-32">
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5c5c9c] to-[#6787f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <p className="text-gray-900 mb-3 text-xl font-bold">No Blog Posts Yet</p>
                <p className="text-gray-600 mb-6">Please add some blog posts to your Firebase Firestore database.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <Sparkles className="h-4 w-4 text-[#4c2868] mr-2" />
                  <span className="text-[#4c2868] font-semibold text-sm">Latest Articles</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Explore Our Blog Posts
                </h2>
                <p className="text-xl text-gray-600">
                  Stay updated with the latest insights and tips
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;