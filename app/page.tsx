import Link from "next/link";
import Card from "@/components/Card";
import ServiceCard from "@/components/Card/ServiceCard";
import styles from "./styles.module.scss";

// Icons
import { FaRocket } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import ProcessCard from "@/components/Card/ProcessCard";
import { FaSearch, FaLightbulb } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import TeamCard from "@/components/Card/TeamCard";

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

const servicesData = [
  {
    icon: FaRobot,
    title: "Agentic Systems",
    description:
      "Implement autonomous AI agents to handle complex tasks and decision-making processes.",
    benefits: [
      "Task delegation and management",
      "Automated research and data analysis",
      "Intelligent process optimization",
    ],
  },
  {
    icon: FaComments,
    title: "Intelligent Chatbots",
    description:
      "Enhance customer support and boost engagement with AI-powered chatbots available 24/7.",
    benefits: [
      "Natural language processing for human-like interactions",
      "Multi-platform integration (website, social media, messaging apps)",
      "Continuous learning and improvement",
    ],
  },
  {
    icon: FaShareAlt,
    title: "Social Media Automation",
    description:
      "Supercharge your social media presence with AI-driven content creation and engagement.",
    benefits: [
      "AI-generated posts and captions",
      "Automated hashtag research and implementation",
      "Intelligent audience targeting and engagement",
    ],
  },
  {
    icon: FaBullhorn,
    title: "Marketing & Sales Automation",
    description:
      "Elevate your marketing and sales efforts with AI-powered personalization and automation.",
    benefits: [
      "Automated lead scoring and nurturing",
      "AI-driven email marketing campaigns",
      "Personalized product recommendations",
    ],
  },
];

const processSteps = [
  {
    side: "left",
    icon: <FaSearch />,
    title: "1. Discovery",
    description:
      "We dive deep into your business processes to uncover prime opportunities for AI automation.",
    benefits: [
      "Comprehensive business analysis",
      "Identification of AI-ready processes",
      "Stakeholder interviews and alignment",
    ],
  },
  {
    side: "right",
    icon: <FaLightbulb />,
    title: "2. Solution Design",
    description:
      "Our experts craft a tailored AI automation strategy aligned with your specific needs and goals.",
    benefits: [
      "Custom AI solution architecture",
      "ROI projections and business case development",
      "Detailed implementation roadmap",
    ],
  },
  {
    side: "left",
    icon: <FaCogs />,
    title: "3. Implementation",
    description:
      "We seamlessly integrate AI automations into your existing workflows and systems.",
    benefits: [
      "Agile development and rapid prototyping",
      "Continuous testing and quality assurance",
      "Comprehensive staff training and onboarding",
    ],
  },
  {
    side: "right",
    icon: <FaChartLine />,
    title: "4. Optimization",
    description:
      "We ensure your AI automations evolve with your business through continuous monitoring and refinement.",
    benefits: [
      "Real-time performance monitoring",
      "Data-driven optimizations and enhancements",
      "Scalability planning for future growth",
    ],
  },
];

const teamMembers = [
  {
    name: "Amine",
    title: "Co-founder",
    imgSrc: "/images/amine.jpeg",
    bio: `Leader in AI automation with expertise in DevOps and distributed systems, driving innovative business transformations.`,
    linkedIn: "https://www.linkedin.com/in/medamineferhi/",
  },
  {
    name: "Nader",
    title: "Co-founder",
    imgSrc: "/images/nader.jpeg",
    bio: `Pioneer in AI technologies, integrating cutting-edge solutions with practical applications for impactful results.`,
    linkedIn: "https://www.linkedin.com/in/naderghazala/",
  },
  {
    name: "Iheb",
    title: "Developer / Automation Specialist",
    imgSrc: "/images/iheb.jpeg",
    bio: `Skilled developer focused on efficient AI-driven automation solutions and technical implementation.`,
    linkedIn: "https://www.linkedin.com/in/iheb-bhives",
  },
  {
    name: "Mohamed Salah",
    title: "Developer / Automation Specialist",
    imgSrc: "/images/medsalah.jpeg",
    bio: `Experienced developer specializing in creating seamless automation workflows to optimize business processes.`,
    linkedIn: "https://www.linkedin.com/in/mohamed-salah-bhives",
  },
];

const vesionData = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Constantly exploring new frontiers in AI to bring you the latest advancements.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description:
      "Working closely with clients to develop tailored AI solutions that drive success.",
  },
  {
    icon: FaRocket,
    title: "Impact",
    description:
      "Committed to delivering measurable results and transformative growth for your business.",
  },
];

const techStackData = [
  {
    category: 'cloud',
    imgSrc: 'https://logo.clearbit.com/azure.com',
    altText: 'Azure Logo',
    title: 'Azure',
    description: "Microsoft's cloud platform for building and deploying AI solutions."
  },
  {
    category: 'cloud',
    imgSrc: 'https://logo.clearbit.com/aws.amazon.com',
    altText: 'AWS Logo',
    title: 'AWS',
    description: "Amazon's comprehensive cloud computing services."
  },
  {
    category: 'ai',
    imgSrc: 'https://logo.clearbit.com/openai.com',
    altText: 'OpenAI Logo',
    title: 'OpenAI',
    description: 'Advanced language models and AI technologies.'
  },
  {
    category: 'automation',
    imgSrc: 'https://logo.clearbit.com/zapier.com',
    altText: 'Zapier Logo',
    title: 'Zapier',
    description: 'No-code automation for connecting apps and workflows.'
  },
  {
    category: 'automation',
    imgSrc: 'https://logo.clearbit.com/make.com',
    altText: 'Make Logo',
    title: 'Make',
    description: 'Powerful visual automation platform for complex workflows.'
  },
  {
    category: 'ai',
    imgSrc: 'https://logo.clearbit.com/huggingface.co',
    altText: 'Hugging Face Logo',
    title: 'Hugging Face',
    description: 'State-of-the-art natural language processing models.'
  }
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
            <li
              key={item.title}
              className="flex flex-col items-center justify-center"
            >
              <item.icon className="text-[2.5rem] text-orange-500 mt-5" />
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
        className="relative bg-orange-400 min-h-screen flex items-center flex-col pb-40"
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
        </Link>
        <div className="waves layer2 absolute -bottom-[120px] xl:-bottom-[240px] z-10" />
      </section>
      <section
        id="#services"
        className="relative min-h-screen flex items-center flex-col mt-40"
      >
        <h1 className="text-4xl font-bold text-black text-center mt-4 max-w-[600px]">
          Our AI Automation Services
        </h1>
        <p className="text-gray-600 text-xl font-semibold max-w-[700px] text-center mt-6">
          Revolutionize your business operations with our cutting-edge AI
          solutions. Experience the power of intelligent automation across every
          aspect of your organization.
        </p>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {servicesData.map((card) => (
            <ServiceCard
              key={card.title}
              icon={<card.icon />}
              title={card.title}
              description={card.description}
              benefits={card.benefits}
            />
          ))}
        </ul>
        <div className="mt-20 py-10 w-full flex flex-col justify-center items-center bg-orange-400">
          <h1 className="text-4xl font-bold text-white text-center max-w-[600px]">
            Ready to transform your business with AI?
          </h1>
          <Link href="#contact">
            <button className="bg-white border-2 border-white text-orange-400 font-bold px-6 py-3 rounded-lg mt-4 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
      <section id="process" className="relative bg-gray-900 text-white pt-16">
        <div className="mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Our AI Automation Integration Process
          </h2>
          <p className="text-lg mb-10 text-center max-w-[600px] mx-auto">
            We follow a streamlined, four-step approach to seamlessly integrate
            AI automation into your business, ensuring maximum efficiency and
            ROI.
          </p>

          <div className="relative max-w-4xl mx-auto mt-4">
            <div className="absolute h-full bg-orange-400 w-1 left-1/2 transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <ProcessCard
                  key={index}
                  index={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  benefits={step.benefits}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 py-10 w-full flex flex-col justify-center items-center bg-orange-400">
          <h1 className="text-4xl font-bold text-white text-center max-w-[600px]">
            Ready to start your AI automation journey?
          </h1>
          <Link href="#contact">
            <button className="bg-white border-2 border-white text-orange-400 font-bold px-6 py-3 rounded-lg mt-4 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
              Schedule Your Free Consultation
            </button>
          </Link>
        </div>
      </section>
      <section id="team" className="team-section py-20 bg-gray-900">
        <div className="mx-10 max-w-[1260px] lg:mx-auto px-4">
          <h2 className="text-4xl text-white font-bold text-center mb-10 underline underline-offset-8">
            Our AI Visionaries
          </h2>
          <div className="bg-white p-10 rounded-lg shadow-md mb-10 text-center">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              At Bhives.ai, we're driven by a singular vision: to democratize AI
              and empower businesses of all sizes with cutting-edge automation
              solutions. Our team of experts is committed to pushing the
              boundaries of AI technology while making it accessible and
              practical for real-world applications.
            </p>
            <ul className="flex flex-col gap-4 items-center justify-center md:flex-row">
              {vesionData.map((item) => (
                <li
                  key={item.title}
                  className="card flex flex-col items-center justify-center rounded-lg p-4 bg-gray-100 shadow-lg w-96 hover:scale-[103%] transition-gpu ease-in-out duration-500"
                >
                  <item.icon className="text-[2.5rem] text-orange-500 mt-4" />
                  <h4 className="text-xl font-semibold ml-2">Innovation</h4>
                  <p className="text-gray-700 mt-2">
                    Constantly exploring new frontiers in AI to bring you the
                    latest advancements.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white">
              Meet the Team
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
