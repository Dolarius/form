import { Dispatch, SetStateAction } from "react";
import { FormDataType } from "../App";
import Shapes from "../assets/images/bg-sidebar-desktop.svg";
import Button from "./Button";
import "./styles.css";

type SidebarProps = {
  activeStep: number;
  stepData: FormDataType;
  setStep: Dispatch<SetStateAction<number>>;
};

const Sidebar = ({ activeStep, setStep, stepData }: SidebarProps) => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="sidebar">
      <div className="steps-wrapper">
        <div className="step-wrapper">
          <Button
            className={activeStep === steps[0] ? "index active" : "index"}
            onPress={() => setStep(steps[0])}
          >
            {steps[0]}
          </Button>
          <div className="step">STEP 1</div>
          <div className="info">YOUR INFO</div>
        </div>
        <div className="step-wrapper">
          <Button
            className={activeStep === steps[1] ? "index active" : "index"}
            onPress={() => setStep(steps[1])}
            disabled={activeStep !== steps[1] && stepData.plan.type === ""}
          >
            {steps[1]}
          </Button>
          <div className="step">STEP 2</div>
          <div className="info">SELECT PLAN</div>
        </div>
        <div className="step-wrapper">
          <Button
            className={activeStep === steps[2] ? "index active" : "index"}
            onPress={() => setStep(steps[2])}
            disabled={stepData.plan.type === ""}
          >
            {steps[2]}
          </Button>
          <div className="step">STEP 3</div>
          <div className="info">ADD-ONS</div>
        </div>
        <div className="step-wrapper">
          <Button
            className={
              activeStep === steps[3] || activeStep === steps[4]
                ? "index active"
                : "index"
            }
            onPress={() => setStep(steps[3])}
            disabled={stepData.plan.type === ""}
          >
            {steps[3]}
          </Button>
          <div className="step">STEP 4</div>
          <div className="info">SUMMARY</div>
        </div>
      </div>
      <img src={Shapes} alt="Shapes" />
    </div>
  );
};

export default Sidebar;
