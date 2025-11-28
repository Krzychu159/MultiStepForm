type Props = {
  checked: boolean;
  onToggle: () => void;
  title: string;
  subtitle: string;
  priceMonthly: number;
  priceYearly: number;
  duration: "monthly" | "yearly";
};

export const AddOnCard = ({
  checked,
  onToggle,
  title,
  subtitle,
  priceMonthly,
  priceYearly,
  duration,
}: Props) => {
  return (
    <div
      onClick={onToggle}
      className={`flex items-center rounded-xl p-4 cursor-pointer border 
        ${checked ? "border-primary-600 bg-neutral-500" : "border-primary-600"} 
        hover:border-[hsl(213,96%,18%)]`}
    >
      <input
        type="checkbox"
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        onChange={onToggle}
        className={`
          mr-4 size-4 rounded border 
          ${
            checked
              ? "border-[hsl(213,96%,18%)] accent-[hsl(213,96%,18%)]"
              : "border-primary-600 accent-primary-600"
          }
        `}
      />

      <div className="flex flex-col">
        <div className="text-s font-medium text-primary-600 mb-1">{title}</div>
        <div className="text-neutral-600 text-[0.8em] font-medium">
          {subtitle}
        </div>
      </div>

      <div className="ml-auto text-primary-600 font-medium">
        {duration === "monthly" ? `+$${priceMonthly}/m` : `+$${priceYearly}/yr`}
      </div>
    </div>
  );
};

export default AddOnCard;
