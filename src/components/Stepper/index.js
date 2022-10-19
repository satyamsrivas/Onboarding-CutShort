import { Step } from "./Step";
import "./index.scss";

import React from "react";

const index = ({ activeIndex, numOfSteps }) => {
  return (
    <div className="stepper-container">
      {[...Array(numOfSteps)].map((item, index) => {
        const showPrecedeTail = index === 0 ? false : true;
        const showSuccedeTail = index === numOfSteps - 1 ? false : true;

        return (
          <Step
            precedeTail={showPrecedeTail}
            succedeTail={showSuccedeTail}
            activeIndex={activeIndex}
            stepIndex={index}
          />
        );
      })}
    </div>
  );
};

export default index;
