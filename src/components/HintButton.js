import { useParams } from 'react-router-dom';

const HintButton = () => {
  const { id } = useParams(); // Gets current puzzle page number
  
  const openHints = () => {
    window.open(`/hints/${id}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button onClick={openHints} className="hint-button">
      Hints
    </button>
  );
};

export default HintButton;