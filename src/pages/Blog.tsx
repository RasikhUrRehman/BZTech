import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchBlogs, BlogPost } from '../utils/strapiApi';

const Blog: React.FC = () => {
  const { isRTL } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogPosts(blogs);
      setLoading(false);
    };
    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen bg-gray-50 pt-20 flex items-center justify-center ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  // Blog posts are now fetched from Strapi

  const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group-hover:translate-x-1"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and success stories from the world of academic writing and research
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter and never miss an update on academic writing tips, industry insights, and success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;