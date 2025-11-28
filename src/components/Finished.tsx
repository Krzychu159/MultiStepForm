export const Finished = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6 p-6 w-full">
      <img src="/assets/images/icon-thank-you.svg" alt="Thank you icon" />
      <h2 className="text-2xl font-bold">Thank you!</h2>
      <p className="text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support @loremgaming.com.
      </p>
    </div>
  );
};
export default Finished;
