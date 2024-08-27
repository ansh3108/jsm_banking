import React from "react";

const Headerbox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  // Add this console.log to debug the props
  console.log({ type, title, subtext, user });

  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default Headerbox;
