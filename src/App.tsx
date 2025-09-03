import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Testimonial from './pages/Testimonial';
import ErrorPage from './pages/ErrorPage';
import ImageTest from './pages/ImageTest';

// Dashboard Pages
import MainTreasury from './pages/dashboard/MainTreasury';

// Main styles are imported in public/index.html

function App() {
  return (
    <Router>
      <div className="App">

        
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details/:id" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-details/:id" element={<TeamDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop-details/:id" element={<ShopDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/image-test" element={<ImageTest />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard/main-treasury" element={<MainTreasury />} />
            
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;