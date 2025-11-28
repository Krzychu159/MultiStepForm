type Props = {
  name: string;
  email: string;
  phone: string;

  handleNameChange: (value: string) => void;
  handleEmailChange: (value: string) => void;
  handlePhoneChange: (value: string) => void;

  errors: { name: string; email: string; phone: string };
};

export const Step1 = ({
  name,
  email,
  phone,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  errors,
}: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <p className="text-gray-400 mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <form className="space-y-4">
        <div>
          <div className="flex justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <span className="text-xs text-red-500">{errors.name}</span>
          </div>

          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={`w-full border rounded-md p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <span className="text-xs text-red-500">{errors.email}</span>
          </div>

          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className={`w-full border rounded-md p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <span className="text-xs text-red-500">{errors.phone}</span>
          </div>

          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className={`w-full border rounded-md p-2 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
