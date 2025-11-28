type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const NavBar = ({ step, setStep }: Props) => {
  return (
    <div className="bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover w-64 min-h-full  rounded-xl p-6">
      <div
        onClick={() => setStep(1)}
        className="flex items-center gap-4 mb-8 cursor-pointer"
      >
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center font-medium ${
            step === 1
              ? "bg-[hsl(206,94%,87%)] text-black border-[hsl(206,94%,87%)]"
              : "text-white border-white"
          }`}
        >
          1
        </div>

        <div>
          <div className="text-xs uppercase text-neutral-400 ">Step 1</div>
          <div className="text-s uppercase text-white font-bold">Your info</div>
        </div>
      </div>

      <div
        onClick={() => setStep(2)}
        className="flex items-center gap-4 mb-8 cursor-pointer"
      >
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center font-medium ${
            step === 2
              ? "bg-[hsl(206,94%,87%)] text-black border-[hsl(206,94%,87%)]"
              : "text-white border-white"
          }`}
        >
          2
        </div>

        <div>
          <div className="text-xs uppercase text-neutral-400 ">Step 2</div>
          <div className="text-s uppercase text-white font-bold">
            select plan
          </div>
        </div>
      </div>

      <div
        onClick={() => setStep(3)}
        className="flex items-center gap-4 mb-8 cursor-pointer"
      >
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center font-medium ${
            step === 3
              ? "bg-[hsl(206,94%,87%)] text-black border-[hsl(206,94%,87%)]"
              : "text-white border-white"
          }`}
        >
          3
        </div>

        <div>
          <div className="text-xs uppercase text-neutral-400 ">Step 3</div>
          <div className="text-s uppercase text-white font-bold">Add-ons</div>
        </div>
      </div>
      <div
        onClick={() => setStep(4)}
        className="flex items-center gap-4 mb-8 cursor-pointer"
      >
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center font-medium ${
            step === 4
              ? "bg-[hsl(206,94%,87%)] text-black border-[hsl(206,94%,87%)]"
              : "text-white border-white"
          }`}
        >
          4
        </div>

        <div>
          <div className="text-xs uppercase text-neutral-400 ">Step 4</div>
          <div className="text-s uppercase text-white font-bold">Summary</div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
