// src/App.js
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import PuzzlePage from './components/PuzzlePage';

const RouteValidator = () => {
  const { id } = useParams();
  const puzzleId = parseInt(id, 10);
  
  // Redirect to page 1 if invalid, or to page 40 if you prefer
  if (isNaN(puzzleId) || puzzleId < 1 || puzzleId > 40) {
    return <Navigate to="/1" replace />;
    // OR to redirect to last page: <Navigate to="/40" replace />
  }

  return <PuzzlePage />;
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/:id" element={<RouteValidator />} />
        <Route path="/" element={<Navigate to="/1" replace />} />
      </Routes>
    </div>
  );
}

export default App;
