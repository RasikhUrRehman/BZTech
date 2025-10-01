import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
}

const Blog: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Mastering Academic Writing: Essential Tips for Success",
      description: "Discover proven strategies to enhance your academic writing skills. Learn about structure, research methods, and citation techniques that will elevate your assignments and research papers.",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "BZTech Team",
      category: "Academic Writing"
    },
    {
      id: 2,
      title: "The Complete Guide to Thesis Writing and Research",
      description: "Navigate the complex world of thesis writing with our comprehensive guide. From topic selection to defense preparation, we cover everything you need to know for academic success.",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-10",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      category: "Research"
    },
    {
      id: 3,
      title: "Customer Success Story: From Struggling Student to Academic Excellence",
      description: "Read how Maria transformed her academic journey with our personalized writing assistance. Learn about the challenges she faced and how our expert guidance helped her achieve her goals.",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-08",
      readTime: "6 min read",
      author: "BZTech Team",
      category: "Success Stories"
    },
    {
      id: 4,
      title: "Latest Updates: New Services and Enhanced Features",
      description: "Explore our latest service offerings including AI-powered research assistance and enhanced plagiarism detection. Stay updated with the newest features designed to support your academic journey.",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-05",
      readTime: "4 min read",
      author: "Product Team",
      category: "Product Updates"
    },
    {
      id: 5,
      title: "Industry Insights: The Future of Academic Publishing",
      description: "Discover emerging trends in academic publishing and research dissemination. Learn how digital transformation is reshaping scholarly communication and what it means for researchers.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-03",
      readTime: "7 min read",
      author: "Research Team",
      category: "Industry Insights"
    },
    {
      id: 6,
      title: "Maximizing the Benefits of Professional Writing Services",
      description: "Learn how to get the most value from professional academic writing services. Understand the collaboration process, communication best practices, and how to leverage expert assistance effectively.",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-01",
      readTime: "5 min read",
      author: "BZTech Team",
      category: "Service Benefits"
    }
  ];

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
            to={`/blog/${post.id}`}
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