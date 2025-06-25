import React from "react";
import { Fade } from "react-awesome-reveal";
const QnaSection = () => {
  const qna = [
    {
      id: 1,
      question: "1. What defines Indian cuisine?",
      answer: "Indian cuisine is known for its rich spices and bold flavors.",
    },
    {
      id: 2,
      question: "2. What makes Italian food unique?",
      answer:
        "Italian food emphasizes fresh ingredients, herbs, and olive oil.",
    },
    {
      id: 3,
      question: "3. Why is Mexican cuisine popular?",
      answer:
        "Mexican cuisine is famous for its use of chili, beans, and corn.",
    },
    {
      id: 4,
      question: "4. What is special about Chinese cuisine?",
      answer:
        "Chinese cuisine offers balanced flavors with stir-fried techniques.",
    },
    {
      id: 5,
      question: "5. What characterizes American food?",
      answer:
        "American food includes burgers, fries, and diverse fusion dishes.",
    },
    {
      id: 6,
      question: "6. Which cuisine uses the most spices?",
      answer:
        "Indian cuisine uses the widest variety of spices and seasonings.",
    },
  ];

  return (
    <div>
      <Fade duration={1000} delay={100} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          QnA section
        </h1>
      </Fade>

      {qna.map((singleQna) => (
        <div key={singleQna.id} className="mb-5">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              {singleQna.question}
            </div>
            <div className="collapse-content text-sm">{singleQna.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QnaSection;
