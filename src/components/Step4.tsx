import { planPrices, addOnPrices } from "./pricing";

type Props = {
  duration: "monthly" | "yearly";
  setStep: React.Dispatch<React.SetStateAction<number>>;
  services: boolean;
  storage: boolean;
  profile: boolean;
  plan: "arcade" | "advanced" | "pro";
};

export const Step4 = ({
  duration,
  setStep,
  services,
  storage,
  profile,
  plan,
}: Props) => {
  const base = planPrices[plan][duration];
  const addons =
    (services ? addOnPrices.services[duration] : 0) +
    (storage ? addOnPrices.storage[duration] : 0) +
    (profile ? addOnPrices.profile[duration] : 0);

  const total = base + addons;

  return (
    <div>
      <header>
        <h2 className="text-2xl font-bold mb-4">Finishing up</h2>
        <p className="text-gray-400 mb-6">
          Double-check everything looks OK before confirming.
        </p>
      </header>

      <main>
        <div className="flex flex-col justify-center p-5 items-center gap-5 bg-neutral-500 rounded-xl mt-6">
          <div className="flex justify-between w-full border-b border-gray-300 pb-4">
            <div>
              <div className="font-medium">
                {plan} {duration === "monthly" ? "(Monthly)" : "(Yearly)"}
              </div>
              <div
                className="text-xs text-primary-600 hover:underline cursor-pointer"
                onClick={() => setStep(2)}
              >
                Change
              </div>
            </div>

            <div className="font-bold ml-auto">
              ${base}/{duration === "monthly" ? "mo" : "yr"}
            </div>
          </div>

          {services || storage || profile ? (
            <>
              {services && (
                <div className="flex justify-between w-full">
                  <div className="text-gray-400">Online service</div>
                  <div>
                    +${addOnPrices.services[duration]}/
                    {duration === "monthly" ? "m" : "yr"}
                  </div>
                </div>
              )}

              {storage && (
                <div className="flex justify-between w-full">
                  <div className="text-gray-400">Larger storage</div>
                  <div>
                    +${addOnPrices.storage[duration]}/
                    {duration === "monthly" ? "m" : "yr"}
                  </div>
                </div>
              )}

              {profile && (
                <div className="flex justify-between w-full">
                  <div className="text-gray-400">Customizable profile</div>
                  <div>
                    +${addOnPrices.profile[duration]}/
                    {duration === "monthly" ? "m" : "yr"}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              className="text-gray-400 cursor-pointer hover:underline"
              onClick={() => setStep(3)}
            >
              Click here to add addons!
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-5">
          <div className="text-gray-400 mb-1">
            Total {duration === "monthly" ? "(per month)" : "(per year)"}
          </div>

          <div className="text-primary-600 font-bold">
            ${total}/{duration === "monthly" ? "mo" : "yr"}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Step4;
