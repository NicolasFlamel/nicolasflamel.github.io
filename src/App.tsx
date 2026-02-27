import './App.css';
import { Footer } from '@/components/footer';
import {
  AboutSection,
  ProjectsSection,
  ContactSection,
  ResumeSection,
} from './components/sections';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from './components/context/theme-provider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className={'max-w-5xl flex flex-col items-center m-auto'}>
        <Navigation />
        <main className={'flex flex-col gap-8 m-auto p-4 bg-card rounded-xl'}>
          <AboutSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </section>
    </ThemeProvider>
  );
};

export default App;
