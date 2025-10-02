import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User, Share2, Bookmark } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchBlogBySlug, BlogPostDetail, renderRichText } from '../utils/strapiApi';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isRTL } = useLanguage();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const fetchedPost = await fetchBlogBySlug(slug);
        setPost(fetchedPost);
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-gray-50 pt-20 flex items-center justify-center ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  // Post is now fetched from Strapi

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </div>

          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center text-blue-100 text-sm space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <p className="text-xl text-blue-100 max-w-3xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {renderRichText(post.content)}
              {/* Insert additional images */}
              {post.images.slice(1).map((image, index) => (
                <div key={index} className="my-8">
                  <img
                    src={image}
                    alt={`Blog illustration ${index + 2}`}
                    className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{post.category}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
                    <Bookmark className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts or Newsletter could go here */}
      </article>
    </div>
  );
};

export default BlogPost;