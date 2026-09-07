import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function App() {
  useScrollToTop();

  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
