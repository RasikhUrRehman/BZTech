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

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/samples/:category" element={<SampleCategory />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
}

export default App;