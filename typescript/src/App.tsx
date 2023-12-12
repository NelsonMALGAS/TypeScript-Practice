import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import { Address } from "./Address";
import "./App.css";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./userForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  const updateInputsHandler = (updatedData: Partial<FormData>): void => {
    setData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateInputs={updateInputsHandler} />,
    <Address {...data} updateInputs={updateInputsHandler} />,
    <AccountForm {...data} updateInputs={updateInputsHandler} />,
  ]);

  const submitData = async () => {
    try {
      const response = await fetch("https://potfolio-980dc-default-rtdb.firebaseio.com/multi-select-form.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data successfully submitted!");
      } else {
        console.error("Failed to submit data:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during the data submission:", error);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isLastStep) {
      submitData();
    } else {
      next();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" title="back" onClick={back}>
              Back
            </button>
          )}
          <button type="submit" title="next">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
