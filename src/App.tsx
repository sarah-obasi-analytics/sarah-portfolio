import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
