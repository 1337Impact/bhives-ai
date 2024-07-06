import { FaCheck } from "react-icons/fa";

export default function ProcessCard({
  index,
  icon,
  title,
  description,
  benefits,
}: {
  index: number;
  icon: any;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div
      className={`relative flex ${
        index % 2 ? "justify-start" : "justify-end"
      } items-center `}
    >
      <div className="relative flex flex-col items-center w-[400px] p-6 py-18 bg-white text-gray-900 rounded-lg shadow-lg">
        <div
          className={`absolute top-0  ${
            index % 2 ? "-right-[80px]" : "-left-[80px]"
          } w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-orange-500">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-2">
          {benefits.map((benefit, index) => (
            <li key={benefit} className="flex gap-2 mt-1">
              <div className=" text-green-600 mt-1">
                <FaCheck />
              </div>
              <p className="text-gray-800">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
