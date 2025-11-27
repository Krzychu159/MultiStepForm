export const Step1 = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <p className="text-gray-400 mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="e.g."
          ></input>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
};
export default Step1;
