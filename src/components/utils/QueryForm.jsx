import React, { useEffect, useRef, useState } from "react";

function QueryForm() {
  const titleInputRef = useRef(null);
  const textareaRef = useRef(null);
  const emailInputRef = useRef(null);
  const [titleInputFocused, setTitleInputFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);
  const [emailInputFocused, setEmailInputFocused] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (titleInputRef.current.value !== "") setTitleInputFocused(true);
    if (textareaRef.current.value !== "") setTextareaFocused(true);
    if (emailInputRef.current.value !== "") setEmailInputFocused(true);
  }, [subject, description, email]);

  const handleTitleInputFocus = () => {
    setTitleInputFocused(true);
  };
  const handleTitleInputBlur = () => {
    if (titleInputRef.current.value === "") setTitleInputFocused(false);
  };
  const handleTextareaFocus = () => {
    setTextareaFocused(true);
  };
  const handleTextareaBlur = () => {
    if (textareaRef.current.value === "") setTextareaFocused(false);
  };
  const handleEmailInputFocus = () => {
    setEmailInputFocused(true);
  };
  const handleEmailInputBlur = () => {
    if (emailInputRef.current.value === "") setEmailInputFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (subject && email && description !== "") {
      const formData = {
        subject,
        description,
        email,
      };
    } else {
      alert("Please fill in all fields.");
      return;
    }

    // Send the form data to the backend
    fetch("http://localhost:5000/send-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Query sent successfully!");
          setSubject("");
          setEmail("");
          setDescription("");
        } else {
          alert("Failed to send query.1");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send query.2");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[480px] w-72 xxxxs:w-80 xxs:w-[360px] lg:w-72 xl:w-96 2xl:w-80 3xl:w-96 4xl:w-[420px] lg:relative lg:bottom-20 2xl:bottom-32 bg-faq-orange p-5 shadow-primary-shadow rounded-2xl my-10 mx-3 xxxxs:mx-6 xxs:mx-8 lg:mx-0 flex flex-col justify-center items-center"
    >
      <div className="my-3 h-9 relative w-11/12">
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          ref={titleInputRef}
          onClick={handleTitleInputFocus}
          onBlur={handleTitleInputBlur}
          className="text-rich-black rounded-3xl border-white border h-9 w-full outline-none px-4"
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ref={textareaRef}
          onClick={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          onResize={"none"}
          className="text-rich-black bg-faq-orange rounded-2xl w-full border-white border outline-none p-4 h-64"
          name="query-description"
          id="query-description"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
          onClick={handleEmailInputFocus}
          onBlur={handleEmailInputBlur}
          className="text-rich-black bg-faq-orange rounded-2xl h-full border-white border w-full outline-none p-4"
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
      <div className="shadow-primary-shadow relative top-7 mt-4 bg-spring-green rounded-xl w-32 h-12 flex justify-center items-center">
        <button className="text-white text-3xl bg-spring-green">SEND</button>
      </div>
    </form>
  );
}

export default QueryForm;
