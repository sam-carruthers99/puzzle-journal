// src/App.js
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import PuzzlePage from './components/PuzzlePage';
import HintsPage from './components/HintsPage';

const RouteValidator = () => {
  const { id } = useParams();
  
  // Special case: allow /clues to pass through
  if (id === 'hints') {
    return <Navigate to="/hints" replace />;
  }

  const puzzleId = parseInt(id, 10);
  
  // Redirect invalid puzzle numbers
  if (isNaN(puzzleId) || puzzleId < 1 || puzzleId > 40) {
    return <Navigate to="/1" replace />;
  }

  return <PuzzlePage />;
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/:id" element={<RouteValidator />} />
        <Route path="/" element={<Navigate to="/1" replace />} /> 
        <Route path="/hints/:id" element={<HintsPage />} />
        <Route path="/hints" element={<Navigate to="/hints/1" replace />} />
      </Routes>
    </div>
  );
}

export default App;
