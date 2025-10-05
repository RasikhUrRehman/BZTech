import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Offers from './pages/Offers';
import Samples from './pages/Samples';
import SampleCategory from './pages/SampleCategory';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import BlogManagement from './components/BlogManagement';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AdminAuthProvider>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sample" element={<Samples />} />
          <Route path="/sample/:category" element={<SampleCategory />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog-management" element={
            <ProtectedRoute>
              <BlogManagement />
            </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </AdminAuthProvider>
  );
}

export default App;