import type { FeatureCard } from "@/constants/types";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  borderColor,
  bgColor,
  textColor,
}: FeatureCard) {
  return (
    <li
      className={`flex flex-col gap-2 justify-center items-center w-62 px-5 py-3 rounded-2xl border-2 bg-white ${borderColor} hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex justify-start w-full">
        <Icon className={`size-9 ${bgColor} ${textColor} p-1 rounded-xl`} />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center text-center">
        <h3 className="text-lg font-semibold font-outfit">{title}</h3>
        <p className="text-sm text-gray-600 font-light max-w-40">
          {description}
        </p>
      </div>
    </li>
  );
}
