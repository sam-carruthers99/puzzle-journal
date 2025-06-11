import { useState } from 'react';
import { useParams} from 'react-router-dom';
import hintData from '../data/hintData';
import './Hints.css';

const HintsPage = () => {
  const { id } = useParams();
  const [expandedHints, setExpandedHints] = useState({});
  const pageNum = parseInt(id);
  const currentHints = hintData[pageNum] || { hints: [] };

  const toggleHint = (hintNum) => {
    setExpandedHints(prev => ({
      ...prev,
      [hintNum]: !prev[hintNum]
    }));
  };

  return (
    <div className="hints-app">
      <div className="hints-container">
        <h1 className="hints-title">Page {pageNum} Hints</h1>
        
        {currentHints.hints.map((hint, idx) => {
          const hintNum = idx + 1;
          return (
            <div key={hintNum} className="hint-item">
              <button 
                onClick={() => toggleHint(hintNum)}
                className="hint-toggle"
              >
                {expandedHints[hintNum] ? 
                  `Hide Hint ${hintNum}` : `Show Hint ${hintNum}`}
              </button>
              
              {expandedHints[hintNum] && (
                <div className="hint-content">
                  <p>{hint}</p>
                </div>
              )}
            </div>
          );
        })}
        
        <div className="solution-item">
          <button 
            onClick={() => toggleHint('solution')}
            className="solution-toggle"
          >
            {expandedHints['solution'] ? 
              'Hide Solution' : 'Show Solution'}
          </button>
          
          {expandedHints['solution'] && (
            <div className="solution-content">
              <p><strong>Solution:</strong> {currentHints.solution}</p>
              {currentHints.solutionExplanation && (
                <p><strong>Explanation: </strong>{currentHints.solutionExplanation}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HintsPage;