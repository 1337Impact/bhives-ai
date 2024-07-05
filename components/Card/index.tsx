import { IconType } from "react-icons";

export default function Card({
  icon,
  title,
  description,
  grow,
  detail,
}: {
  icon: any;
  title: string;
  description: string;
  grow: string;
  detail: string;
}) {
  return (
    <div className="relative bg-white shadow-lg shadow-orange-200 rounded-3xl px-5 py-7 h-[420px] w-[300px] hover:scale-[103%] transition-all ease-in-out duration-300">
      <div className="text-5xl text-orange-500 mt-5 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="mt-3 text-xl text-center text-gray-700 font-semibold">
        {title}
      </h4>
      <p className="text-center text-gray-600 flex-1 mt-8">{description}</p>
      <div className="absolute bottom-4 bg-orange-500 text-center text-white w-[263px] mx-auto py-3 rounded-lg font-semibold">
        <h1 className="text-3xl">{grow}</h1>
        <p className="text-orange-50 mt-2">{detail}</p>
      </div>
    </div>
  );
}
