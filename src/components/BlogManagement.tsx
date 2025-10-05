import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Eye, Plus, Search, Filter, Calendar, User, Clock, X } from 'lucide-react';
import { getAllBlogsForAdmin, deleteBlog, updateBlog, addBlog, BlogPost } from '../utils/blogService';
import { useAdminAuth } from '../contexts/AdminAuthContext';

interface EditBlogData {
  title: string;
  description: string;
  authorName: string;
  categories: string[];
  images: string[];
  readTime: string;
  featured: boolean;
}

const BlogManagement: React.FC = () => {
  const { logout } = useAdminAuth();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFeatured, setFilterFeatured] = useState<'all' | 'featured' | 'regular'>('all');
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editFormData, setEditFormData] = useState<EditBlogData>({
    title: '',
    description: '',
    authorName: '',
    categories: [],
    images: [],
    readTime: '',
    featured: false
  });
  const [createFormData, setCreateFormData] = useState<EditBlogData>({
    title: '',
    description: '',
    authorName: '',
    categories: [],
    images: [],
    readTime: '',
    featured: false
  });
  const [categoryInput, setCategoryInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [createCategoryInput, setCreateCategoryInput] = useState('');
  const [createImageInput, setCreateImageInput] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const blogData = await getAllBlogsForAdmin();
      setBlogs(blogData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setMessage('Error fetching blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        const success = await deleteBlog(id);
        if (success) {
          setBlogs(blogs.filter(blog => blog.id !== id));
          setMessage('Blog deleted successfully!');
          setTimeout(() => setMessage(''), 3000);
        } else {
          setMessage('Error deleting blog. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
        setMessage('Error deleting blog. Please try again.');
      }
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setEditFormData({
      title: blog.title,
      description: blog.description,
      authorName: blog.author.name,
      categories: blog.categories || [],
      images: blog.images || [],
      readTime: blog.read_time,
      featured: blog.featured || false
    });
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const addCategory = () => {
    if (categoryInput.trim() && !editFormData.categories.includes(categoryInput.trim())) {
      setEditFormData(prev => ({
        ...prev,
        categories: [...prev.categories, categoryInput.trim()]
      }));
      setCategoryInput('');
    }
  };

  const removeCategory = (categoryToRemove: string) => {
    setEditFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== categoryToRemove)
    }));
  };

  const addImage = () => {
    if (imageInput.trim() && !editFormData.images.includes(imageInput.trim())) {
      setEditFormData(prev => ({
        ...prev,
        images: [...prev.images, imageInput.trim()]
      }));
      setImageInput('');
    }
  };

  const removeImage = (imageToRemove: string) => {
    setEditFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img !== imageToRemove)
    }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;

    setIsUpdating(true);
    try {
      const updateData = {
        title: editFormData.title,
        description: editFormData.description,
        author: { name: editFormData.authorName },
        categories: editFormData.categories,
        images: editFormData.images,
        read_time: editFormData.readTime,
        featured: editFormData.featured
      };

      const success = await updateBlog(editingBlog.id, updateData);
      if (success) {
        setMessage('Blog updated successfully!');
        setEditingBlog(null);
        fetchBlogs(); // Refresh the list
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error updating blog. Please try again.');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      setMessage('Error updating blog. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Create blog handlers
  const handleCreateInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setCreateFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const addCreateCategory = () => {
    if (createCategoryInput.trim() && !createFormData.categories.includes(createCategoryInput.trim())) {
      setCreateFormData(prev => ({
        ...prev,
        categories: [...prev.categories, createCategoryInput.trim()]
      }));
      setCreateCategoryInput('');
    }
  };

  const removeCreateCategory = (categoryToRemove: string) => {
    setCreateFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== categoryToRemove)
    }));
  };

  const addCreateImage = () => {
    if (createImageInput.trim() && !createFormData.images.includes(createImageInput.trim())) {
      setCreateFormData(prev => ({
        ...prev,
        images: [...prev.images, createImageInput.trim()]
      }));
      setCreateImageInput('');
    }
  };

  const removeCreateImage = (imageToRemove: string) => {
    setCreateFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img !== imageToRemove)
    }));
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!createFormData.title.trim() || !createFormData.description.trim() || !createFormData.authorName.trim() || !createFormData.readTime.trim()) {
      setMessage('Please fill in all required fields.');
      return;
    }

    setIsCreating(true);
    try {
      const blogData = {
        title: createFormData.title,
        description: createFormData.description,
        author: { name: createFormData.authorName },
        categories: createFormData.categories,
        images: createFormData.images,
        read_time: createFormData.readTime,
        featured: createFormData.featured
      };

      const success = await addBlog(blogData);
      if (success) {
        setMessage('Blog created successfully!');
        setShowCreateModal(false);
        // Reset form
        setCreateFormData({
          title: '',
          description: '',
          authorName: '',
          categories: [],
          images: [],
          readTime: '',
          featured: false
        });
        setCreateCategoryInput('');
        setCreateImageInput('');
        fetchBlogs(); // Refresh the list
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error creating blog. Please try again.');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      setMessage('Error creating blog. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterFeatured === 'all' || 
                         (filterFeatured === 'featured' && blog.featured) ||
                         (filterFeatured === 'regular' && !blog.featured);
    
    return matchesSearch && matchesFilter;
  });

  const formatDate = (date: any) => {
    if (!date) return 'Unknown';
    try {
      const dateObj = date.toDate ? date.toDate() : new Date(date);
      return dateObj.toLocaleDateString();
    } catch {
      return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading blogs...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Admin Header */}
        <div className="bg-white shadow-sm rounded-lg px-6 py-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Blog Management</h2>
                <p className="text-sm text-gray-600 mt-1">Manage all your blog posts</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-md ${message.includes('successfully') || message.includes('Success') 
            ? 'bg-green-50 text-green-800' 
            : 'bg-red-50 text-red-800'
          }`}>
            {message}
          </div>
        )}

        {/* Controls */}
        <div className="bg-white shadow-sm rounded-lg px-6 py-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Filter */}
              <div className="relative min-w-[160px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={filterFeatured}
                  onChange={(e) => setFilterFeatured(e.target.value as 'all' | 'featured' | 'regular')}
                  className="pl-10 pr-8 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Posts</option>
                  <option value="featured">Featured Only</option>
                  <option value="regular">Regular Only</option>
                </select>
              </div>
            </div>

            {/* Add New Blog Button */}
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 whitespace-nowrap"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Blog
            </button>
          </div>
        </div>

        {/* Blog List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No blogs found matching your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blog Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-14 w-14">
                            <img
                              className="h-14 w-14 rounded-lg object-cover shadow-sm"
                              src={blog.images && blog.images.length > 0 ? blog.images[0] : "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"}
                              alt={blog.title}
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="text-sm font-medium text-gray-900 line-clamp-1 mb-1">
                              {blog.title}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-2 mb-2">
                              {blog.description.substring(0, 100)}...
                            </div>
                            <div className="flex items-center text-xs text-gray-400">
                              <Clock className="w-3 h-3 mr-1" />
                              {blog.read_time}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <User className="w-4 h-4 mr-2 text-gray-400" />
                          {blog.author.name}
                        </div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(blog.publishedAt)}
                        </div>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          blog.featured 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {blog.featured ? 'Featured' : 'Regular'}
                        </span>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => window.open(`/blog/${blog.id}`, '_blank')}
                            className="text-blue-600 hover:text-blue-900 p-2 rounded-md hover:bg-blue-50 transition-colors duration-150"
                            title="View Blog"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-green-600 hover:text-green-900 p-2 rounded-md hover:bg-green-50 transition-colors duration-150"
                            title="Edit Blog"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id, blog.title)}
                            className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors duration-150"
                            title="Delete Blog"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {editingBlog && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-6 border w-11/12 max-w-4xl shadow-lg rounded-lg bg-white my-10">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Edit Blog Post
                </h3>
                <p className="text-sm text-gray-600">{editingBlog.title}</p>
              </div>
                
                <form onSubmit={handleUpdate} className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Author Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author Name *
                      </label>
                      <input
                        type="text"
                        name="authorName"
                        value={editFormData.authorName}
                        onChange={handleEditInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Read Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Read Time *
                      </label>
                      <input
                        type="text"
                        name="readTime"
                        value={editFormData.readTime}
                        onChange={handleEditInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 5 min read"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Categories
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={categoryInput}
                        onChange={(e) => setCategoryInput(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter category"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCategory())}
                      />
                      <button
                        type="button"
                        onClick={addCategory}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {editFormData.categories.map((category, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {category}
                          <button
                            type="button"
                            onClick={() => removeCategory(category)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Images */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Images (URLs)
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="url"
                        value={imageInput}
                        onChange={(e) => setImageInput(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter image URL"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
                      />
                      <button
                        type="button"
                        onClick={addImage}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {editFormData.images.map((image, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm text-gray-600 truncate flex-1">{image}</span>
                          <button
                            type="button"
                            onClick={() => removeImage(image)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={editFormData.featured}
                      onChange={handleEditInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      Featured post
                    </label>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setEditingBlog(null)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isUpdating}
                      className={`px-4 py-2 rounded-md text-white ${
                        isUpdating
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isUpdating ? 'Updating...' : 'Update Blog'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
        )}

        {/* Create Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-6 border w-11/12 max-w-4xl shadow-lg rounded-lg bg-white my-10">
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Create New Blog Post
                  </h3>
                  <p className="text-sm text-gray-600">Fill in the details to create a new blog post</p>
                </div>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 rounded-md hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
                
                <form onSubmit={handleCreate} className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={createFormData.title}
                      onChange={handleCreateInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter blog title"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={createFormData.description}
                      onChange={handleCreateInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter blog description"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Author Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author Name *
                      </label>
                      <input
                        type="text"
                        name="authorName"
                        value={createFormData.authorName}
                        onChange={handleCreateInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter author name"
                      />
                    </div>

                    {/* Read Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Read Time *
                      </label>
                      <input
                        type="text"
                        name="readTime"
                        value={createFormData.readTime}
                        onChange={handleCreateInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 5 min read"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categories
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={createCategoryInput}
                        onChange={(e) => setCreateCategoryInput(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter category"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCreateCategory())}
                      />
                      <button
                        type="button"
                        onClick={addCreateCategory}
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {createFormData.categories.map((category, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {category}
                          <button
                            type="button"
                            onClick={() => removeCreateCategory(category)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Images */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Images (URLs)
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="url"
                        value={createImageInput}
                        onChange={(e) => setCreateImageInput(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter image URL"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCreateImage())}
                      />
                      <button
                        type="button"
                        onClick={addCreateImage}
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        Add
                      </button>
                    </div>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {createFormData.images.map((image, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <span className="text-sm text-gray-600 truncate flex-1">{image}</span>
                          <button
                            type="button"
                            onClick={() => removeCreateImage(image)}
                            className="ml-2 text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={createFormData.featured}
                      onChange={handleCreateInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      Featured post
                    </label>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isCreating}
                      className={`px-6 py-3 rounded-md text-white transition-colors duration-200 ${
                        isCreating
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isCreating ? 'Creating...' : 'Create Blog'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default BlogManagement;