// src/App.js
import { Routes, Route } from 'react-router-dom';
import PuzzlePage from './components/PuzzlePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/:id" element={<PuzzlePage />} />
        <Route path="/" element={<PuzzlePage />} />
      </Routes>
    </div>
  );
}

export default App;
