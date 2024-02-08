import React, { useState } from "react";
import { MainLogo } from "./Icons/MainLogo";

export const Regist = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const nextStepBtn = () => !isLastStep && setActiveStep((line) => line + 1);
  const backStepBtn = () => !isFirstStep && setActiveStep((line) => line - 1);

  return (
    <div className="w-screen h-screen pt-10 flex justify-center">
      <div>
        <div>
          <div className="flex gap-2">
            <MainLogo width="28" hiegth="27" />
            <h2 className=" font-semibold text-xl ">Geld</h2>
          </div>

          <div
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <div onClick={() => setActiveStep(0)}>1</div>
            <div onClick={() => setActiveStep(1)}>2</div>
            <div onClick={() => setActiveStep(3)}>3</div>
          </div>
        </div>

        <div>
          <button onClick={backStepBtn} disabled={isFirstStep} className=" btn">
            back
          </button>

          <button onClick={nextStepBtn} disabled={isLastStep} className=" btn">
            next
          </button>
        </div>
      </div>
    </div>
  );
};
