import PlanCard from "./PlanCard";

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
        <h2 className="text-2xl font-bold mb-4">Select your plan</h2>
        <p className="text-gray-400 mb-6">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <main>
        <section className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
          <PlanCard
            active={plan === "arcade"}
            duration={duration}
            onClick={() => setPlan("arcade")}
            title="Arcade"
            icon="/assets/images/icon-arcade.svg"
            priceMonthly={9}
            priceYearly={90}
          />

          <PlanCard
            active={plan === "advanced"}
            duration={duration}
            onClick={() => setPlan("advanced")}
            title="Advanced"
            icon="/assets/images/icon-advanced.svg"
            priceMonthly={12}
            priceYearly={120}
          />

          <PlanCard
            active={plan === "pro"}
            duration={duration}
            onClick={() => setPlan("pro")}
            title="Pro"
            icon="/assets/images/icon-pro.svg"
            priceMonthly={15}
            priceYearly={150}
          />
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
