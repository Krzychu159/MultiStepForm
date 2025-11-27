type Props = {
  duration: "monthly" | "yearly";

  services: boolean;
  setServices: React.Dispatch<React.SetStateAction<boolean>>;

  storage: boolean;
  setStorage: React.Dispatch<React.SetStateAction<boolean>>;

  profile: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Step3 = ({
  duration,
  services,
  setServices,
  storage,
  setStorage,
  profile,
  setProfile,
}: Props) => {
  return (
    <>
      <header>
        <h2 className="text-2xl font-bold mb-4 ">Pick add-ons</h2>
        <p className="text-gray-400 mb-6">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <main>
        <section className="flex flex-col gap-4">
          <div className="flex items-center border border-primary-600 rounded-xl p-4 cursor-pointer hover:border-[hsl(213,96%,18%)]">
            <input
              type="checkbox"
              checked={services}
              onChange={() => setServices(!services)}
              className="mr-4 size-4 rounded border border-primary-600 accent-primary-600"
            />

            <div className="flex flex-col">
              <div className="text-s font-medium text-primary-600 mb-1">
                Online service
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                Access to multiplayer games
              </div>
            </div>
            <div className="ml-auto text-primary-600 font-medium">
              {duration === "monthly" ? "+$1/m" : "+$10/yr"}
            </div>
          </div>

          <div className="flex items-center border border-primary-600 rounded-xl p-4 cursor-pointer hover:border-[hsl(213,96%,18%)]">
            <input
              type="checkbox"
              className="mr-4 size-4"
              checked={storage}
              onChange={() => setStorage(!storage)}
            />
            <div className="flex flex-col">
              <div className="text-s font-medium text-primary-600 mb-1">
                Larger storage
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                Extra 1TB of cloud save
              </div>
            </div>
            <div className="ml-auto text-primary-600 font-medium">
              {" "}
              {duration === "monthly" ? "+$2/m" : "+$20/yr"}
            </div>
          </div>

          <div className="flex items-center border border-primary-600 rounded-xl p-4 cursor-pointer hover:border-[hsl(213,96%,18%)]">
            <input
              type="checkbox"
              className="mr-4 size-4"
              checked={profile}
              onChange={() => setProfile(!profile)}
            />
            <div className="flex flex-col">
              <div className="text-s font-medium text-primary-600 mb-1">
                Customizable profile
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                Custom theme on your profile
              </div>
            </div>
            <div className="ml-auto text-primary-600 font-medium">
              {duration === "monthly" ? "+$2/m" : "+$20/yr"}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Step3;
