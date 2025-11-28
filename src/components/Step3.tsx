import AddOnCard from "./AddOnCard";

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
        <h2 className="text-2xl font-bold mb-4">Pick add-ons</h2>
        <p className="text-gray-400 mb-6">
          Add-ons help enhance your gaming experience.
        </p>
      </header>

      <main>
        <section className="flex flex-col gap-4">
          <AddOnCard
            checked={services}
            onToggle={() => setServices(!services)}
            title="Online service"
            subtitle="Access to multiplayer games"
            priceMonthly={1}
            priceYearly={10}
            duration={duration}
          />

          <AddOnCard
            checked={storage}
            onToggle={() => setStorage(!storage)}
            title="Larger storage"
            subtitle="Extra 1TB of cloud save"
            priceMonthly={2}
            priceYearly={20}
            duration={duration}
          />

          <AddOnCard
            checked={profile}
            onToggle={() => setProfile(!profile)}
            title="Customizable profile"
            subtitle="Custom theme on your profile"
            priceMonthly={2}
            priceYearly={20}
            duration={duration}
          />
        </section>
      </main>
    </>
  );
};

export default Step3;
