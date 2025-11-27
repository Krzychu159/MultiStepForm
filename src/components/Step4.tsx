export const Step4 = () => {
  return (
    <div>
      <header>
        <h2 className="text-2xl font-bold mb-4 ">Finishing up</h2>
        <p className="text-gray-400 mb-6">
          Double-check everything looks OK before confirming.
        </p>
      </header>
      <main>
        <div className="flex flex-col justify-center p-5 items-center gap-5 bg-neutral-500 rounded-xl mt-6">
          <div className="flex justify-between  w-full border-b border-gray-300 pb-4">
            <div>
              <div className="font-medium">Arcade (Monthly)</div>{" "}
              <div className="text-xs text-primary-600 hover:underline cursor-pointer">
                Change
              </div>
            </div>
            <div className=" font-bold ml-auto">$9/mo</div>
          </div>

          <div className="flex justify-between w-full ">
            <div className="text-gray-400">Online service</div>
            <div>+$1/mo</div>
          </div>
        </div>
        <div className="flex items-center justify-between p-5">
          <div className="  text-gray-400  mb-1">Total (per month)</div>
          <div className="text-primary-600 font-bold">$12/mo</div>
        </div>
      </main>
    </div>
  );
};
export default Step4;
