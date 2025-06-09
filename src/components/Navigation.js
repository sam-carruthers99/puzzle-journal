// src/components/Navigation.js
const Navigation = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="navigation">
      {currentPage > 1 && (
        <button onClick={onPrevious}>
          Previous Page
        </button>
      )}
      {currentPage < totalPages && (
        <button onClick={onNext}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Navigation;