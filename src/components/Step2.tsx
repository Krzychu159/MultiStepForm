export const Step2 = () => {
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
          <div className="flex flex-col justify-between border border-primary-600 rounded-xl h-40 w-[30%] p-4 cursor-pointer hover:border-[hsl(213,96%,18%)]">
            <div>
              <img src="/assets/images/icon-arcade.svg" alt="Arcade icon" />
            </div>
            <div>
              <div className="text-s font-medium text-primary-600 mb-1">
                Arcade
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                $9/mo
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-primary-600 rounded-xl h-40  w-[30%] p-4 cursor-pointer hover:border-[hsl(213,96%,18%)]">
            <div>
              <img src="/assets/images/icon-advanced.svg" alt="Advanced icon" />
            </div>
            <div>
              <div className="text-s font-medium text-primary-600 mb-1">
                Advanced
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                $12/mo
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-primary-600 rounded-xl h-40  w-[30%] p-4 cursor-pointer hover:border-[hsl(213,96%,18%)]">
            <div>
              <img src="/assets/images/icon-pro.svg" alt="Pro icon" />
            </div>
            <div>
              <div className="text-s font-medium text-primary-600 mb-1">
                Pro
              </div>
              <div className="text-neutral-600 text-[0.8em] font-medium">
                $15/mo
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center gap-5 h-12 bg-neutral-500 rounded-xl mt-6">
          <div>Monthly</div>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <div>Yearly</div>
        </div>
      </main>
    </div>
  );
};
export default Step2;
