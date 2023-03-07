import { FormDataType } from "../App";
import Button from "./Button";

type Props = {
  decrementStep: () => void;
  incrementStep: () => void;
  stepData: FormDataType;
};

const Step4: React.FC<Props> = ({ decrementStep, incrementStep, stepData }) => {
  const { addon, period, plan } = stepData;

  let array = addon.map(({ price }) => price);
  array.push(plan.price);

  let sum =
    addon.length !== 0
      ? array.reduce(function (a, b) {
          return a + b;
        })
      : plan.price;

  return (
    <div className="step-container">
      <p className="step-title">Finishing up</p>
      <p className="step-subtitle">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary-container">
        <div className="plan-verify">
          <span className="plan-verify--type">{`${plan.type}(${period})`}</span>
          <Button className="plan-verify--change" title="Change" />
          <span className="plan-verify--price">
            {period === "Monthly" ? `$${plan.price}/mo` : `$${plan.price}/yr`}
          </span>
        </div>
        {addon.length !== 0 && (
          <span
            style={{ border: "1px solid hsl(229, 24%, 87%)", opacity: 0.4 }}
          />
        )}
        {addon.map(({ type, price }, index) => {
          return (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              key={index}
            >
              <span className="plan-verify-addon--type">{type}</span>
              <span className="plan-verify-addon--price">
                {period === "Monthly" ? `+$${price}/mo` : `+$${price}/yr`}
              </span>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.4rem",
        }}
      >
        <span className="plan-verify-total">{`Total (per ${
          period === "Monthly" ? "month" : "year"
        })`}</span>
        <span className="plan-verify-total--price">
          {period === "Monthly" ? `$${sum}/mo` : `$${sum}/yr`}
        </span>
      </div>

      <div className="button-container">
        <Button
          className="button-back"
          title="Go Back"
          onPress={decrementStep}
        />
        <Button
          disabled={false}
          className="button-next"
          title="Confirm"
          onPress={incrementStep}
        />
      </div>
    </div>
  );
};

export default Step4;
