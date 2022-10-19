import { useState } from "react";
import logo from "./assets/Logo.PNG";
import { titles } from "./constants/config";
import FormHeading from "./components/FormHeading";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Stepper from "./components/Stepper";
import "./App.scss";

import { NUM_OF_FORMS } from "./constants";

const FORM_MAP = [Form1, Form2, Form3, Form4];

function App() {
  //hook
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  console.log("activeindex: ", activeFormIndex);

  const handleClick = () => {
    if (activeFormIndex === NUM_OF_FORMS - 1) return;
    setActiveFormIndex((prev) => prev + 1);
  };

  const FormComponent = FORM_MAP[activeFormIndex];
  return (
    <section className="onboarding-container">
      <div className="onboarding">
        <div className="heading logo-container">
          <img src={logo} alt="logo" />
          <span>Eden</span>
        </div>

        <div className="onboarding-stepper-container">
          <Stepper activeIndex={activeFormIndex} numOfSteps={NUM_OF_FORMS} />
        </div>

        <FormHeading
          title={titles[activeFormIndex]?.title}
          subtitle={titles[activeFormIndex]?.subtitle}
        />

        <FormComponent handleClick={handleClick} />
      </div>
    </section>
  );
}

export default App;
