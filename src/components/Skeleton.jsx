import React from "react";

const Skeleton = ({ loading, lines, width, height, className }) => {
  if (!loading) {
    return null;
  }

  if (lines) {
    return (
      <div className="">
        <p className="skeleton animate-pulse h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-2/5"></p>
        {lines > 1 && (
          <ul className="mt-3 space-y-3">
            {Array.from({ length: lines - 1 }).map((_, index) => (
              <li
                key={index}
                className="skeleton animate-pulse w-full h-4 bg-gray-300 rounded-full dark:bg-gray-700"
              ></li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={`${className} skeleton animate-pulse bg-gray-300 dark:bg-gray-700`}
    />
  );
};

export default Skeleton;
