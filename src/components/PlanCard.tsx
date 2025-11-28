type Props = {
  active: boolean;
  onClick: () => void;
  icon: string;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  duration: "monthly" | "yearly";
};

export const PlanCard = ({
  active,
  onClick,
  icon,
  title,
  priceMonthly,
  priceYearly,
  duration,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-between rounded-xl h-40 w-[30%] p-4 cursor-pointer
        ${
          active
            ? "border border-[hsl(213,96%,18%)]"
            : "border border-gray-300 hover:border-[hsl(213,96%,18%)]"
        }
      `}
    >
      <img src={icon} alt={`${title} icon`} className="w-10 h-10 mb-6" />

      <div>
        <div className="text-s font-medium text-primary-600 mb-1">{title}</div>
        <div className="text-neutral-600 text-[0.8em] font-medium">
          {duration === "monthly"
            ? `$${priceMonthly}/mo`
            : `$${priceYearly}/yr`}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
