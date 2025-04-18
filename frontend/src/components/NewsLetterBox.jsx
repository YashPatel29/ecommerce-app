import React from "react";

function NewsLetterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium
        iusto enim, libero asperiores dicta unde velit aliquam error, pariatur
        blanditiis minus beatae magnam esse. Eveniet modi ratione velit at?
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto pl-3 border my-6"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button className="bg-black text-white text-xs px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
