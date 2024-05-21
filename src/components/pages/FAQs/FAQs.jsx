import React, { useState } from "react";
import Header from "../../utils/Header.jsx";
import FaqCard from "../../utils/FaqAccordion.jsx";
import FaqAccordion from "../../utils/FaqAccordion.jsx";
import { Fade } from "react-awesome-reveal";
import QueryForm from "../../utils/QueryForm.jsx";
import { motion } from "framer-motion";

const FAQsArr = [
  {
    id: 1,
    question: "What is Juus?",
    answer:
      "Juus is the first of its kind available in Pakistan. A Liquid Enhancer available in multiple flavours, with Zero Sugar & Zero Calories. JUUS gives you the power to turn your drink into something more exciting.",
  },
  {
    id: 2,
    question: "If Juus is sugar-free, then how do you sweeten it?",
    answer:
      "Juus is sweetened with completely safe, calorie-free, artificial sweeteners that are 600 times sweeter than sugar – Stevia and Sucralose. They are recognized by PFA and FDA as safe for consumption by the general populace.",
  },
  {
    id: 3,
    question: "How to store Juus correctly?",
    answer:
      "Juus bottles are fine to be kept in a cool and dry location at room temperature. They do not need to be refrigerated, even after opening.",
  },
  {
    id: 4,
    question: "What ingredients are used in Juus?",
    answer:
      "Water, Malic Acid (E296), Citric Acid (E330), Natural And Artificial Flavours, Artificial Sweeteners (E955,  E960), Potassium Citrate (E332) ,Sodium Benzoate (E211), Potassium Sorbate (E202), Food Colouring (E170).",
  },
  {
    id: 5,
    question: "Is it okay to drink JUUS straight from the bottle?",
    answer:
      "No, Juus is a highly concentrated liquid and must be diluted in any liquid before consumption.",
  },
  {
    id: 6,
    question: "Is it okay to leave Juus in the car?",
    answer:
      "No, we don’t recommend leaving Juus in the car. Extreme conditions, such as extremely high temperatures, could affect the quality of the container and the finished product.",
  },
  {
    id: 7,
    question: "Can I Mix flavors of Juus?",
    answer:
      "Absolutely! You can customise Juus anyway you like. Let us know your best combinations!",
  },
  {
    id: 8,
    question: "Is it okay to carry Juus in pockets or purse?",
    answer:
      "Fear not! If the lid is properly closed you are good to carry Juus anywhere.",
  },
  {
    id: 9,
    question: "How Do You Make Juus?",
    answer:
      "Open the lid & squeeze Juus directly into your drink. We recommend ½ tsp per glass (approx. 200ml), though it can depend on your personal preference. Each squeeze gives your water flavor, whatever way you fancy.",
  },
  {
    id: 10,
    question: "Do you use artificial sweeteners?",
    answer:
      "Yes, we use Stevia and Sucralose, as artificial sweeteners are non-nutritive – so they provide sweetness without adding calories. It’s just sweet taste and no junk! And don’t worry, they are PFA and FDA approved as safe for consumption by the general populace. ",
  },
  {
    id: 11,
    question: "Is Juus safe for diabetic patients?",
    answer:
      "Diabetics should always consult their physicians to evaluate how certain foods fit in their meal plans. That being said, Juus can be excellent beverage option for people with diabetes, since it’s sugar free.",
  },
  {
    id: 12,
    question: "Is Juus safe for children?",
    answer:
      "Juus is safe for consumption by the general population and yes, that includes children. However, if you’re concerned, then we always advise that it’s best to check with your children’s pediatrician for medical advice.",
  },
  {
    id: 13,
    question: "Which cities can I buy Juus?",
    answer:
      "Juus is available for delivery all across Pakistan – just order it via our online store! Currently, Juus is only being retailed in-store in Lahore.",
  },
  {
    id: 14,
    question: "Is Juus safe for pregnant and nursing women?",
    answer:
      "Juus is safe for consumption by the general population and yes, that includes pregnant and nursing women. However, if you’re concerned, then we always advise that it’s best to check with your midwife or gynocologist for medical advice.",
  },
  {
    id: 15,
    question: "Is Juus Halal?",
    answer: "Yes, Juus is certified Halal.",
  },
];

function FAQs() {
  return (
    <motion.div
      className="bg-cover bg-fixed 2xl:bg-scroll bg-no-repeat bg-center overflow-x-hidden"
      style={{
        backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/FAQs%20Page/background.png"})`,
      }}
    >
      <div>
        <Header />
      </div>
        <section className="pt-24">
          <img
          className=""
            rel="preload"
            src="https://juusstorage.blob.core.windows.net/creatives/FAQs%20Page/faq%20bg.png"
            alt=""
          />
          <img
            rel="preload"
            className="scale-75 2xl:scale-50 absolute top-0 left-0 translate-y-24 lg:translate-y-1/3 2xl:translate-y-[15%]"
            src="https://juusstorage.blob.core.windows.net/creatives/FAQs%20Page/faq%20vector.png"
            alt=""
          />
        </section>
      <main className="flex lg:grid lg:grid-rows-1 lg:grid-cols-7 2xl:grid-cols-9 flex-col lg:flex-row items-center lg:items-start lg:mb-8 lg:gap-5 5xl:gap-20">
        <div className="lg:col-span-4 2xl:col-span-6">
        <Fade className="self-stretch" triggerOnce={true} direction="up" cascade damping={0.1}>
          <div className="flex justify-center items-center h-12 mt-5 mx-3 xxxxs:mx-6 xxs:mx-8 bg-aqua border border-[#268c98] rounded-lg"><span className="text-white font-bold text-sm xxxs:text-base xl:text-xl 3xl:text-2xl 5xl:text-3xl 6xl:text-4xl">MOST FREQUENTLY ASKED QUESTIONS</span></div>
          {FAQsArr.map((faq) => (
            <FaqAccordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Fade>
        </div>
        <div className="lg:col-span-3">
          <QueryForm />
        </div>
      </main>
    </motion.div>
  );
}

export default FAQs;
