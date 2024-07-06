import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function TeamCard({imgSrc, name, title, bio, linkedIn}: {imgSrc: string, name: string, title: string, bio: string, linkedIn: string}) {
    return (<div
        className="card flex flex-col max-w-[400px] md:max-w-[700px] mx-auto p-2 items-center rounded-lg shadow md:flex-row bg-gray-800 border-gray-700 lg:p-0 hover:scale-[102%] transition-gpu ease-in-out duration-500"
      >
        <img
          className="w-[220px] h-[220px] rounded-full mx-auto object-cover md:rounded-none md:rounded-l-lg"
          src={imgSrc}
          alt="Avatar"
        />
        <div className="text-center p-3 md:p-5 md:text-start">
          <h3 className="text-xl font-bold tracking-tight text-white">
            <a href="#">{name}</a>
          </h3>
          <span className="text-gray-300">
            {title}
          </span>
          <p className="mt-2 mb-4 text-sm lg:text-[.95rem] font-light text-gray-400">
            {bio}
          </p>
          <Link href={linkedIn}>
            <button className="mx-auto flex items-center gap-1 bg-blue-400 text-white px-5 py-2 rounded-md font-semibold">
              <FaLinkedin />
              Connect on LinkedIn
            </button>
          </Link>
        </div>
      </div>);
}