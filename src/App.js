import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import FullScreenLoader from './components/FullScreenLoader';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import './styles.scss';

// Lazy load pages to optimize initial load performance.
// This ensures that these components are only loaded when they are needed,
// reducing the size of the initial JavaScript bundle.
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Store = lazy(() => import('./pages/Store'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const AppContent = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <main className="min-h-[95vh] pt-[70px]">
        <Suspense fallback={<FullScreenLoader />}>
          <Routes>
            {/* Routes are lazy loaded to minimize initial bundle size.
          This helps improve the initial load time of the application by loading only the
          necessary code for the current route, and loading other routes on-demand. */}
            <Route index path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/store/:category?" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <LoginModal />
      <SignUpModal />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
