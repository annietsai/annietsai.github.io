import { Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import About from './About.tsx';
import Music from './Music.tsx';
import EPK from './EPK.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/music" element={<Music />} />
      <Route path="/epk" element={<EPK />} />
    </Routes>
  );
};

export default App;
