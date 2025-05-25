import React from "react";

const Posts = (props) => {
  return (
    <div className="flex-1 rounded-3xl border bg-white dark:bg-black dark:border-gray-700 dark:text-white">
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={props.friend}
              alt=""
              className="w-16 cursor-pointer
                    rounded-full border-2 outline-none ring-transparent transition-all
                    duration-200 hover:ring-2 hover:ring-blue-500"
            />
            <div className="flex flex-col">
              <h3>
                <span className="font-semibold">{props.name}</span>{" "}
                shared a photo.
              </h3>
              <span className="text-gray-500">2 hours ago.</span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 cursor-pointer rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eum
          vero commodi explicabo ipsa illum veritatis reprehenderit voluptas,
          autem nemo eaque totam deserunt id ipsum cumque labore hic repellat
          quidem!
        </p>
        <img src={props.image} alt="" className="rounded-3xl" />
        <div className="flex items-center justify-center gap-3 rounded-2xl bg-gray-100 p-2 dark:bg-gray-700 dark:text-white">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            108
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            50
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
              />
            </svg>
            12
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
