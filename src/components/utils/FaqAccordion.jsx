import { motion } from "framer-motion";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

function FaqAccordion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="mx-3 xxxxs:mx-6 xxs:mx-8 rounded-lg shadow-primary-shadow"
    >
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-4 xxs:mt-6 h-12 flex items-center"
      >
        <li className="px-3 text-sm xxs:text-base">{question}</li>
      </div>
      {showAnswer && (
        <Fade
          className="p-3 rounded-lg bg-nova"
        >
          <p className="text-sm xxs:text-base">{answer}</p>
        </Fade>
      )}
    </div>
  );
}

export default FaqAccordion;
