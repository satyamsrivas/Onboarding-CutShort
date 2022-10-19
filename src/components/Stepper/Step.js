import React from "react";

export const Step = ({ precedeTail, succedeTail, activeIndex, stepIndex }) => {
  return (
    <div className="step-container">
      {precedeTail && (
        <span
          className={`step-tail ${
            stepIndex <= activeIndex ? "step-active-tail" : ""
          }`}
        >
          &nbsp;
        </span>
      )}
      <div
        className={`step-circle ${
          stepIndex <= activeIndex ? "step-active" : ""
        }`}
      >
        {stepIndex + 1}
      </div>

      {succedeTail && (
        <span
          className={`step-tail ${
            stepIndex <= activeIndex ? "step-active-tail" : ""
          }`}
        >
          &nbsp;
        </span>
      )}
    </div>
  );
};
