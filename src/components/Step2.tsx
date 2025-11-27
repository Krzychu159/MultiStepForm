type Props = {
  duration: "monthly" | "yearly";
  setDuration: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
  plan: "arcade" | "advanced" | "pro";
  setPlan: React.Dispatch<React.SetStateAction<"arcade" | "advanced" | "pro">>;
};

export const Step2 = ({ duration, setDuration, plan, setPlan }: Props) => {
  return (
    <div>
      <header>
        <h2 className="text-2xl font-bold mb-4 ">Select your plan</h2>
        <p className="text-gray-400 mb-6">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <main>
        <section className="flex justify-between">
          <div
            className={`flex flex-col justify-between rounded-xl h-40  w-[30%] p-4 cursor-pointer  ${
              plan === "arcade"
                ? "border border-[hsl(213,96%,18%)]"
                : "border border-gray-300 hover:border-[hsl(213,96%,18%)]"
            }`}
            onClick={() => setPlan("arcade")}
          >
            <div>
              <img src="/assets/images/icon-arcade.svg" alt="Arcade icon" />
            </div>
            <div>
              <div className="text-s font-medium text-primary-600 mb-1">
                Arcade
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                {duration === "monthly" ? "$9/mo" : "$90/yr"}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between rounded-xl h-40  w-[30%] p-4 cursor-pointer  ${
              plan === "advanced"
                ? "border border-[hsl(213,96%,18%)]"
                : "border border-gray-300 hover:border-[hsl(213,96%,18%)]"
            }`}
            onClick={() => setPlan("advanced")}
          >
            <div>
              <img src="/assets/images/icon-advanced.svg" alt="Advanced icon" />
            </div>
            <div>
              <div className="text-s font-medium text-primary-600 mb-1">
                Advanced
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                {duration === "monthly" ? "$12/mo" : "$120/yr"}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between rounded-xl h-40  w-[30%] p-4 cursor-pointer  ${
              plan === "pro"
                ? "border border-[hsl(213,96%,18%)]"
                : "border border-gray-300 hover:border-[hsl(213,96%,18%)]"
            }`}
            onClick={() => setPlan("pro")}
          >
            <div>
              <img src="/assets/images/icon-pro.svg" alt="Pro icon" />
            </div>
            <div>
              <div className="text-s font-medium text-primary-600 mb-1">
                Pro
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                {duration === "monthly" ? "$15/mo" : "$150/yr"}
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center gap-5 h-12 bg-neutral-500 rounded-xl mt-6">
          <div>Monthly</div>

          <label className="switch">
            <input
              type="checkbox"
              checked={duration === "yearly"}
              onChange={() =>
                setDuration(duration === "monthly" ? "yearly" : "monthly")
              }
            />
            <span className="slider"></span>
          </label>
          <div>Yearly</div>
        </div>
      </main>
    </div>
  );
};
export default Step2;
