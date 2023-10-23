"use client";

import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import { questions } from "@/utils/questions";

const FrequentAnswrsAndQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div className="w-full py-5">
      <div className="w-[89%] m-auto max-w-[14000px] shadow-md rounded-lg p-8 bg-background">
        <h2 className="text-2xl mb-6 font-semibold">
          Frequently asked questions
        </h2>

        {questions.map((question) => (
          <div key={question.id} className="mb-4 last:mb-0 ">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(
                  activeQuestion === question.id ? null : question.id
                )
              }
            >
              {question.question}
              {activeQuestion === question.id ? (
                <FaMinusCircle />
              ) : (
                <FaPlusCircle />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === question.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                   <p className="mt-3">
              {question.answer}

                   </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentAnswrsAndQuestions;
