import { FormDataType } from "../App";
import IconThankYou from "../assets/images/icon-thank-you.svg";

type Props = {
  stepData: FormDataType;
};

const Step5: React.FC<Props> = ({ stepData }) => {
  return (
    <div className="step-container thank-you">
      <img className="thank-you--icon" src={IconThankYou} alt="IconThankYou" />
      <p className="step-title">Thank you!</p>
      <p className="step-subtitle">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
