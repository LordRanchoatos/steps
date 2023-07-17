import { useState } from 'react';
import './index.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function stepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>step {step}</h3>
      {children}
    </div>
  );
}


function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="close">
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <stepMessage step={step}>{messages[step - 1]}</stepMessage>

          <stepMessage>{messages[step - 1]}</stepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              <span>👈</span> Previous
            </Button>
            {/* <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              <span>👈</span> Previous
            </Button> */}
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

//$2a$10$IFUHoSHqGYKcwJhzkBk1Wewbo9ZLCtnhUkGUqPkM54NzLR2DDYUcG