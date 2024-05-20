import { motion } from "framer-motion";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

function FaqAccordion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="mx-3 rounded-lg shadow-primary-shadow"
    >
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-4 h-12 flex items-center"
      >
        <li className="px-3">{question}</li>
      </div>
      {showAnswer && (
        <Fade
          className="p-3 rounded-lg bg-nova"
        >
          <p>{answer}</p>
        </Fade>
      )}
    </div>
  );
}

export default FaqAccordion;
