import { useState, useEffect, useRef } from "react";

const Typewriter = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1200,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0); // which text from array
  const [fade, setFade] = useState(true);

  const charIndex = useRef(0);

  useEffect(() => {
    const currentText = texts[index];

    let timer;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex.current < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex.current + 1));
          charIndex.current++;
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      } else {
        // Deleting backward
        if (charIndex.current > 0) {
          setDisplayText(currentText.slice(0, charIndex.current - 1));
          charIndex.current--;
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Move to next text
          setIsDeleting(false);
          setFade(false); // fade-out animation

          setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
            setFade(true); // fade-in animation
          }, 300);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span
      className={`inline-block transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayText}
      <span className="ml-1 border-r-2 border-cyan-400 animate-blink"></span>

      {/* Cursor animation */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-blink {
            animation: blink 0.9s infinite;
          }
        `}
      </style>
    </span>
  );
};

export default Typewriter;
