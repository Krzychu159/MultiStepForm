import { useState } from "react";
import NavBar from "./components/NavBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Finished from "./components/Finished";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const [services, setServices] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);
  const [plan, setPlan] = useState<"arcade" | "advanced" | "pro">("arcade");

  const next = () => {
    if (step === 4) return;
    setStep(step + 1);
  };

  const back = () => {
    if (step === 1) return;
    setStep(step - 1);
  };
  return (
    <div className="bg-white rounded-2xl p-6 w-[900px] min-h-[550px] flex ">
      <NavBar step={step} setStep={setStep} />
      <div className="flex flex-col mt-8 px-16 min-w-[600px]">
        {!isFinished && step === 1 && <Step1 />}
        {!isFinished && step === 2 && (
          <Step2
            duration={duration}
            setDuration={setDuration}
            plan={plan}
            setPlan={setPlan}
          />
        )}
        {!isFinished && step === 3 && (
          <Step3
            duration={duration}
            services={services}
            setServices={setServices}
            storage={storage}
            setStorage={setStorage}
            profile={profile}
            setProfile={setProfile}
          />
        )}
        {!isFinished && step === 4 && (
          <Step4
            duration={duration}
            setDuration={setDuration}
            services={services}
            storage={storage}
            profile={profile}
            plan={plan}
          />
        )}

        {isFinished ? (
          <Finished />
        ) : (
          <div className="flex justify-between items-end mt-auto gap-4  ">
            {step > 1 ? (
              <div
                onClick={back}
                className="p-1 font-medium  cursor-pointer text-neutral-500 hover:text-neutral-800"
              >
                Go back
              </div>
            ) : (
              <div> </div>
            )}
            {step < 4 ? (
              <button onClick={next}>Next Step</button>
            ) : (
              <button onClick={() => setIsFinished(true)}>Confirm</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
