type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const NavBarDesktop = ({ step, setStep }: Props) => {
  const steps = [
    { id: 1, title: "Your info" },
    { id: 2, title: "Select plan" },
    { id: 3, title: "Add-ons" },
    { id: 4, title: "Summary" },
  ];

  return (
    <div className="h-full">
      {/* --- MOBILE --- */}

      <div className="flex justify-center gap-5  md:hidden bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover w-full h-64   p-6">
        {steps.map((s) => (
          <div
            key={s.id}
            onClick={() => setStep(s.id)}
            className="flex items-center gap-4 mb-8 cursor-pointer"
          >
            <div
              className={`
              w-10 h-10 rounded-full border flex items-center justify-center font-medium
              ${
                step === s.id
                  ? "bg-[hsl(206,94%,87%)] text-black border-[hsl(206,94%,87%)]"
                  : "text-white border-white"
              }
            `}
            >
              {s.id}
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP --- */}
      <div className="   hidden md:block  bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover w-64 h-full  rounded-xl p-6">
        {steps.map((s) => (
          <div
            key={s.id}
            onClick={() => setStep(s.id)}
            className="flex items-center gap-4 mb-8 cursor-pointer"
          >
            <div
              className={`
              w-10 h-10 rounded-full border flex items-center justify-center font-medium
              ${
                step === s.id
                  ? "bg-[hsl(206,94%,87%)] text-black border-[hsl(206,94%,87%)]"
                  : "text-white border-white"
              }
            `}
            >
              {s.id}
            </div>

            <div>
              <div className="text-xs uppercase text-neutral-400">
                Step {s.id}
              </div>
              <div className="text-s uppercase text-white font-bold">
                {s.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBarDesktop;
