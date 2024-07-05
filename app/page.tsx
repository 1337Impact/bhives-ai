import Link from "next/link";
import styles from "./styles.module.scss";
import { FaRocket } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import Card from "@/components/Card";
import { FaRobot } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

const itemsData = [
  {
    icon: FaRocket,
    title: "Accelerate Growth",
  },
  {
    icon: FaCogs,
    title: "Automate Processes",
  },
  {
    icon: FaChartLine,
    title: "Optimize Performance",
  },
];

const cardsData = [
  {
    icon: FaRobot,
    title: "AI-Powered Automation",
    description:
      "Harness the power of AI to automate complex tasks, freeing your team to focus on high-value activities.",
    grow: "300%",
    detail: "Increase in Productivity",
  },
  {
    icon: FaCode,
    title: "No-Code Solutions",
    description:
      "Implement sophisticated AI automations without coding expertise, accelerating your digital transformation.",
    grow: "10x",
    detail: "Faster Implementation",
  },
  {
    icon: FaCloud,
    title: "Seamless Cloud Integration",
    description:
      "Integrate with leading cloud providers to ensure scalable, reliable, and secure automations.",
    grow: "99.9%",
    detail: "Uptime Guaranteed",
  },
  {
    icon: FaBrain,
    title: "Cutting-Edge AI Models",
    description:
      "Leverage the latest LLMs and AI technologies to bring human-like intelligence to your processes.",
    grow: "95%",
    detail: "Accuracy in Decision-Making",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <section className="relative flex items-center flex-col h-[calc(100vh-50px)]">
        <h1 className="text-gray-900 font-semibold text-6xl mt-28">
          AI-Powered
        </h1>
        <div
          className={`${styles.text} font-semibold text-5xl text-orange-600 mt-2`}
        ></div>
        <p className="text-center text-xl text-gray-600 mx-4 mt-5 max-w-[600px]">
          Unlock the full potential of your business with cutting-edge AI
          solutions tailored for industry leaders.
        </p>
        <ul className="flex gap-6 mt-6">
          {itemsData.map((item) => (
            <li className="flex flex-col items-center justify-center">
              <item.icon className="text-5xl text-orange-500 mt-5" />
              <h4 className="mt-2 text-center text-gray-700 font-[500]">
                {item.title}
              </h4>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col justify-center items-center gap-4 md:flex-row">
          <Link href="#contact">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
              Start Your AI Journey
            </button>
          </Link>
          <Link href="#services">
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md font-semibold">
              Explore Solutions
            </button>
          </Link>
        </div>
        <div className="waves layer1 absolute -bottom-1 -z-10" />
      </section>
      <section
        id="#why-choose"
        className="relative bg-orange-400 min-h-screen flex items-center flex-col pb-20"
      >
        <h1 className="text-4xl font-bold text-white text-center mt-4 max-w-[600px]">
          Why Forward-Thinking Businesses Choose Bhives.ai?
        </h1>
        <p className="text-gray-50 text-xl font-semibold max-w-[500px] text-center mt-6">
          Join the elite group of businesses revolutionizing their industries
          with our AI solutions.
        </p>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardsData.map((card) => (
            <Card
              key={card.title}
              icon={<card.icon />}
              title={card.title}
              description={card.description}
              grow={card.grow}
              detail={card.detail}
            />
          ))}
        </ul>
        <Link href="#contact">
          <button className="bg-white border-2 border-white text-orange-500 font-bold px-6 py-3 rounded-lg mt-16 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
            Start Your AI Transformation Today
          </button>
        </Link>``
      </section>
      <section
        id="#services"
        className="relative min-h-screen flex items-center flex-col"
      >
        <div className="waves layer2 absolute -top-1 z-10" />
        <h1 className="text-4xl font-bold text-black text-center mt-4 max-w-[600px]">
          Our AI Automation Services
        </h1>
        <p className="text-gray-600 text-xl font-semibold max-w-[500px] text-center mt-6">
          Revolutionize your business operations with our cutting-edge AI
          solutions. Experience the power of intelligent automation across every
          aspect of your organization.
        </p>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardsData.map((card) => (
            <Card
              key={card.title}
              icon={<card.icon />}
              title={card.title}
              description={card.description}
              grow={card.grow}
              detail={card.detail}
            />
          ))}
        </ul>
        <Link href="#contact">
          <button className="bg-white border-2 border-white text-orange-500 font-bold px-6 py-3 rounded-lg mt-16 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
            Start Your AI Transformation Today
          </button>
        </Link>
      </section>
      <section
        id="#contact"
        className="relative flex items-center flex-col min-h-screen"
      ></section>
    </main>
  );
}
