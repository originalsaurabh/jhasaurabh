import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles.css';

// Route components - import the default exports from route files
import Home from '@/routes/index';
import About from '@/routes/about';
import Resume from '@/routes/resume';
import Contact from '@/routes/contact';
import CaseStudiesIndex from '@/routes/case-studies.index';
import CaseStudiesAmazon from '@/routes/case-studies.amazon';
import CaseStudiesComdaily from '@/routes/case-studies.comdaily';
import CaseStudiesIBA from '@/routes/case-studies.iba-cosmetics';
import CaseStudiesSaathi from '@/routes/case-studies.saathi-pads';
import CaseStudiesSportz from '@/routes/case-studies.sportz-interactive';
import CaseStudiesTaskSync from '@/routes/case-studies.tasksync';

// 404 component
function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground font-body">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// Layout wrapper
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudiesIndex />} />
          <Route path="/case-studies/amazon" element={<CaseStudiesAmazon />} />
          <Route path="/case-studies/comdaily" element={<CaseStudiesComdaily />} />
          <Route path="/case-studies/iba-cosmetics" element={<CaseStudiesIBA />} />
          <Route path="/case-studies/saathi-pads" element={<CaseStudiesSaathi />} />
          <Route path="/case-studies/sportz-interactive" element={<CaseStudiesSportz />} />
          <Route path="/case-studies/tasksync" element={<CaseStudiesTaskSync />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
