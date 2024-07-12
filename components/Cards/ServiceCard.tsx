import Link from "next/link";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
}: {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="card relative bg-white shadow-xl shadow-gray-400 rounded-3xl px-5 py-7 h-[520px] w-[300px] hover:scale-[103%] transition-gpu ease-in-out duration-500">
      <div className="flex flex-col items-center">
        <div className="text-5xl text-orange-500 mt-5">{icon}</div>
        <h1 className="mt-3 text-xl text-center text-gray-700 font-semibold">
          {title}
        </h1>
        <p className="text-center text-gray-600 flex-1 mt-4">{description}</p>
      </div>
      <ul className="mt-5 flex flex-col justify-between text-gray-600">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2 mt-1">
            <div className=" text-green-600 mt-2">
              <FaCheck />
            </div>
            <p className="text-gray-800">{benefit}</p>
          </li>
        ))}
      </ul>
      <Link href="#contact">
        <button className="absolute border-2 border-orange-500 bottom-4 w-[calc(100%-36px)] bg-orange-500 text-white px-6 py-2 rounded-md font-semibold mt-4 hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300">
          Learn More
        </button>
      </Link>
    </div>
  );
}
