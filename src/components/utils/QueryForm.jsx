import React, { useState } from "react";

function QueryForm() {
  const [titleInputFocused, setTitleInputFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);
  const [emailInputFocused, setEmailInputFocused] = useState(false);

  const handleTextareaFocus = () => {
    setTextareaFocused(true);
  };
  const handleTextareaBlur = () => {
    setTextareaFocused(false);
  };

  const handleTitleInputFocus = () => {
    setTitleInputFocused(true);
  };
  const handleTitleInputBlur = () => {
    setTitleInputFocused(false);
  };

  const handleEmailInputFocus = () => {
    setEmailInputFocused(true);
  };
  const handleEmailInputBlur = () => {
    setEmailInputFocused(false);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-faq-orange p-5 shadow-primary-shadow rounded-2xl my-10 mx-3 flex flex-col justify-center items-center"
    >
      <div className="my-3 h-9 relative w-11/12">
        <input
          onClick={handleTitleInputFocus}
          onBlur={handleTitleInputBlur}
          className="rounded-3xl border-white border h-9 w-full outline-none px-4"
          name="query-subject"
          id="query-subject"
          type="text"
        />
        {!titleInputFocused && (
          <label
            className="absolute top-0 left-0 translate-y-1/4 translate-x-1/4 text-faq-orange"
            htmlFor="query-subject"
          >
            Ask Away
          </label>
        )}
      </div>
      <div className="my-3 w-11/12 flex flex-col items-center relative">
        <textarea
          onClick={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          onResize={"none"}
          className="bg-faq-orange rounded-2xl w-full border-white border outline-none p-4 h-64"
          name="query-description"
          id=""
          cols=""
          rows="7"
        ></textarea>
        {!textareaFocused && (
          <>
            <div className="w-10/12 border-b border-spring-green h-px absolute top-0 translate-y-12"></div>
            <div className="w-10/12 border-b border-spring-green h-px absolute top-0 translate-y-24"></div>
            <div className="w-10/12 border-b border-spring-green h-px absolute top-0 translate-y-36"></div>
            <div className="w-10/12 border-b border-spring-green h-px absolute top-0 translate-y-48"></div>
            <div className="w-10/12 border-b border-spring-green h-px absolute top-0 translate-y-60"></div>
          </>
        )}
      </div>
      <div className="my-3 relative h-11 w-11/12">
        <input
          onClick={handleEmailInputFocus}
          onBlur={handleEmailInputBlur}
          className="bg-faq-orange rounded-2xl h-full border-white border w-full outline-none p-4"
          type="email"
          name="sender-email"
          id="sender-email"
        />
        {!emailInputFocused && (
          <label
            className="text-white absolute top-0 left-0 translate-y-[40%] translate-x-4"
            htmlFor="sender-email"
          >
            EMAIL ADDRESS
          </label>
        )}
      </div>
      <div className="mt-4 bg-spring-green rounded-2xl w-32 h-12 flex justify-center items-center">
        <button className="text-white text-3xl">SEND</button>
      </div>
    </form>
  );
}

export default QueryForm;
