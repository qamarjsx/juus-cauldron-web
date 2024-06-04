import React, { useState } from "react";

function ContactForm() {
  const [isNameInputFocused, setIsNameInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPhoneNumberInputFocused, setIsPhoneNumberInputFocused] =
    useState(false);
  const [isCommentInputFocused, setIsCommentInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="mt-16 lg:mx-24 3xl:mx-64 4xl:mx-80 5xl:mx-96 6xl:mx-[540px]">
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isNameInputFocused ? "-translate-y-3.5 text-[10px]" : ""
          } transition-transform absolute left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="name"
        >
          Name
        </label>
        <input
          onFocus={() => setIsNameInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsNameInputFocused(false);
          }}
          className={`border outline-none appearance-none ${
            isNameInputFocused ? "outline-black" : "border-zinc-600"
          } h-12 w-11/12 px-3.5 text-[15px]`}
          name="name"
          id="name"
          type="text"
        />
      </div>
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isEmailInputFocused ? "-translate-y-3.5 text-[10px]" : ""
          } transition-transform absolute left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          onFocus={() => setIsEmailInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsEmailInputFocused(false);
          }}
          className={`border outline-none appearance-none ${
            isEmailInputFocused ? "outline-black" : "border-zinc-600"
          } h-12 w-11/12 px-3.5 text-[15px]`}
          name="email"
          id="email"
          type="text"
        />
      </div>
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isPhoneNumberInputFocused ? "-translate-y-3.5 text-[10px]" : ""
          } transition-transform absolute left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="phone"
        >
          Phone No.
        </label>
        <input
          onFocus={() => setIsPhoneNumberInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsPhoneNumberInputFocused(false);
          }}
          className={`border outline-none appearance-none ${
            isPhoneNumberInputFocused ? "outline-black" : "border-zinc-600"
          } h-12 w-11/12 px-3.5 text-[15px]`}
          name="phone"
          id="phone"
          type="text"
        />
      </div>
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isCommentInputFocused ? "-translate-y-3.5 text-[10px]" : ""
          } transition-transform absolute top-3 left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="comment"
        >
          Comment
        </label>
        <textarea
          onFocus={() => setIsCommentInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsCommentInputFocused(false);
          }}
          onResize={"none"}
          cols=""
          rows="7"
          className={`border outline-none appearance-none ${
            isCommentInputFocused ? "outline-black" : "border-zinc-600"
          } h-32 min-h-32 max-h-44 w-11/12 px-3.5 py-2.5 text-[15px]`}
          name="comment"
          id="comment"
          type="text"
        ></textarea>
      </div>
      <div className="flex justify-center w-28 h-11 shadow-primary-shadow rounded-lg mx-3 lg:mx-5 xl:mx-7 3xl:mx-9 4xl:mx-8 5xl:mx-7 6xl:mx-8 mt-7 3xl:mt-10 mb-10 3xl:mb-14 bg-black ">
        <button className="text-snow text-sm h-full w-full">Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
