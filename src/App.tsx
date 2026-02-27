import './App.css';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from './components/context/theme-provider';
import { AboutSection } from './components/sections/about-section';
import { ProjectsSection } from './components/sections/projects-section';
import { ResumeSection } from './components/sections/resume-section';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className={'max-w-5xl flex flex-col items-center m-auto'}>
        <Navigation />
        <main className={'flex flex-col gap-8 m-auto p-4 bg-card rounded-xl'}>
          <AboutSection />
          <ProjectsSection />
          <ResumeSection />
        </main>
        <Footer />
      </section>
    </ThemeProvider>
  );
};

export default App;
