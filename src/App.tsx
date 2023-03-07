import "./App.css";
import { useState } from "react";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export type PlanObjectType = {
  type: string;
  price: number;
};

export type AddonObjectType = {
  type: string;
  price: number;
};

export type FormDataType = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  plan: PlanObjectType;
  period: string;
  addon: AddonObjectType[];
};

const INITIAL_STATE: FormDataType = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  plan: {
    type: "",
    price: 0,
  },
  period: "Monthly",
  addon: [],
};

function App() {
  const [step, setStep] = useState(1);
  const [stepData, setStepData] = useState(INITIAL_STATE);

  const incrementStep = () => {
    return setStep(step + 1);
  };
  const decrementStep = () => {
    return setStep(step - 1);
  };

  console.log("big daddy", stepData);

  const me = () => {
    switch (step) {
      case 2:
        return (
          <Step2
            decrementStep={decrementStep}
            incrementStep={incrementStep}
            stepData={stepData}
            setStepData={setStepData}
          />
        );
      case 3:
        return (
          <Step3
            decrementStep={decrementStep}
            incrementStep={incrementStep}
            stepData={stepData}
            setStepData={setStepData}
          />
        );
      case 4:
        return (
          <Step4
            stepData={stepData}
            decrementStep={decrementStep}
            incrementStep={incrementStep}
          />
        );
      case 5:
        return <Step5 stepData={stepData} />;
      default:
        return (
          <Step1
            incrementStep={incrementStep}
            stepData={stepData}
            setStepData={setStepData}
          />
        );
    }
  };

  return (
    <div className="App">
      <Layout>
        <Sidebar stepData={stepData} activeStep={step} setStep={setStep} />
        {me()}
      </Layout>
    </div>
  );
}

export default App;
