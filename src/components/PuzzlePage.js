// src/components/PuzzlePage.js
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import answers from '../answers';
import Navigation from './Navigation';
import '../App.css'

const incorrectMessages = [
  "Incorrect",
  "Wrong",
  "Try again",
  "Not quite",
  "Keep trying",
  "Nope",
  "That's not it"
];

const PuzzlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const puzzleId = parseInt(id);
  const totalPuzzles = 40;

  const getRandomMessageIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * incorrectMessages.length);
    } while (newIndex === messageIndex && incorrectMessages.length > 1);
    return newIndex;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = answers[puzzleId];
    
    if (!userAnswer.trim()) {
      setResult('empty');
      return;
    }

    if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setResult('correct');
      setUserAnswer('');
    } else {
      setMessageIndex(getRandomMessageIndex());
      setResult('incorrect');
    }

    // Clear the input field after checking
    setUserAnswer('');

  };

  const handleNext = () => {
    if (puzzleId < totalPuzzles) {
      navigate(`/${puzzleId + 1}`);
      setUserAnswer('');
      setResult(null);
    }
  };

  const handlePrevious = () => {
    if (puzzleId > 1) {
      navigate(`/${puzzleId - 1}`);
      setUserAnswer('');
      setResult(null);
    }
  };

  return (
    <div className="puzzle-page">
      <h1>Page {puzzleId}</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter your answer"
        />
        <button type="submit">Check Answer</button>
      </form>

    {result && (
        <div className={`result ${result}`}>
            {result === 'correct' ? 'Correct!' : 
            result === 'empty' ? 'Please enter an answer' : 
            incorrectMessages[messageIndex]}
        </div>
    )}

      <Navigation 
        currentPage={puzzleId}
        totalPages={totalPuzzles}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default PuzzlePage;