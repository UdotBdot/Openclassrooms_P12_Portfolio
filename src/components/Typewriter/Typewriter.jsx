import { useState, useEffect } from 'react';

const Typewriter = ({ words, delay, infinite }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < words[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + words[currentWordIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else {
      if (infinite || currentWordIndex < words.length - 1) {
        setTimeout(() => {
          setCurrentIndex(0);
          setCurrentText('');
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentWordIndex, delay, infinite, words]);

  return <span>{currentText}</span>;
};

export default Typewriter;
