import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import QuickExit from './components/QuickExit';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import DonatePage from './pages/DonatePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ResourcesPage from './pages/ResourcesPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AccessibilityPage from './pages/AccessibilityPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminContent from './pages/admin/AdminContent';
import AdminDonations from './pages/admin/AdminDonations';
import AdminEvents from './pages/admin/AdminEvents';
import AdminStories from './pages/admin/AdminStories';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';

// Donor Portal
import DonorLogin from './pages/donor/DonorLogin';
import DonorDashboard from './pages/donor/DonorDashboard';
import DonorHistory from './pages/donor/DonorHistory';
import DonorReceipts from './pages/donor/DonorReceipts';
import DonorProfile from './pages/donor/DonorProfile';

// Volunteer Portal
import VolunteerLogin from './pages/volunteer/VolunteerLogin';
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard';
import VolunteerShifts from './pages/volunteer/VolunteerShifts';
import VolunteerProfile from './pages/volunteer/VolunteerProfile';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

gsap.registerPlugin(ScrollTrigger);

// Layout wrapper for public pages
function PublicLayout() {
  return (
    <>
      <Navigation />
      <QuickExit />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.8
    });

    ScrollTrigger.refresh();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-cream">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/content" element={<ProtectedRoute><AdminContent /></ProtectedRoute>} />
          <Route path="/admin/donations" element={<ProtectedRoute><AdminDonations /></ProtectedRoute>} />
          <Route path="/admin/events" element={<ProtectedRoute><AdminEvents /></ProtectedRoute>} />
          <Route path="/admin/stories" element={<ProtectedRoute><AdminStories /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
          <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />

          {/* Donor Portal Routes */}
          <Route path="/donor/login" element={<DonorLogin />} />
          <Route path="/donor/dashboard" element={<ProtectedRoute><DonorDashboard /></ProtectedRoute>} />
          <Route path="/donor/history" element={<ProtectedRoute><DonorHistory /></ProtectedRoute>} />
          <Route path="/donor/receipts" element={<ProtectedRoute><DonorReceipts /></ProtectedRoute>} />
          <Route path="/donor/profile" element={<ProtectedRoute><DonorProfile /></ProtectedRoute>} />

          {/* Volunteer Portal Routes */}
          <Route path="/volunteer/login" element={<VolunteerLogin />} />
          <Route path="/volunteer/dashboard" element={<ProtectedRoute><VolunteerDashboard /></ProtectedRoute>} />
          <Route path="/volunteer/shifts" element={<ProtectedRoute><VolunteerShifts /></ProtectedRoute>} />
          <Route path="/volunteer/profile" element={<ProtectedRoute><VolunteerProfile /></ProtectedRoute>} />

          {/* Public Routes with Layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:slug" element={<StoryDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
