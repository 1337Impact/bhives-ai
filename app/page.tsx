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
      {/* <section id="team" className="team-section py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our AI Visionaries</h2>
        <div className="bg-white p-10 rounded-lg shadow-md mb-10">
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700 mb-6">
            At Bhives.ai, we're driven by a singular vision: to democratize AI and empower businesses of all sizes with cutting-edge automation solutions. Our team of experts is committed to pushing the boundaries of AI technology while making it accessible and practical for real-world applications.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <i className="fas fa-lightbulb text-2xl text-yellow-500"></i>
                <h4 className="text-xl font-semibold ml-2">Innovation</h4>
              </div>
              <p className="text-gray-700">Constantly exploring new frontiers in AI to bring you the latest advancements.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <i className="fas fa-users text-2xl text-yellow-500"></i>
                <h4 className="text-xl font-semibold ml-2">Collaboration</h4>
              </div>
              <p className="text-gray-700">Working closely with clients to develop tailored AI solutions that drive success.</p>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="flex items-center mb-4">
                <i className="fas fa-rocket text-2xl text-yellow-500"></i>
                <h4 className="text-xl font-semibold ml-2">Impact</h4>
              </div>
              <p className="text-gray-700">Committed to delivering measurable results and transformative growth for your business.</p>
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-center mb-10">Meet the Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="member-card relative group">
                <div className="member-front">
                  <img className="w-full h-64 object-cover" src={member.image} alt={member.name} />
                  <div className="member-overlay absolute inset-0 bg-yellow-500 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white text-2xl mb-2">{member.name}</h4>
                    <p className="text-white text-lg">{member.title}</p>
                  </div>
                </div>
                <div className="member-back p-6 flex flex-col items-center transform rotateY-180 group-hover:rotateY-0 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-lg text-yellow-500 mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="linkedin-link bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin mr-2"></i>Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet the Team
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[400px] md:max-w-[700px] mx-auto p-2 items-center rounded-lg shadow md:flex-row bg-gray-800 border-gray-700 lg:p-0"
              >
                  <img
                    className="w-[220px] h-[220px] rounded-full mx-auto object-cover md:rounded-none md:rounded-l-lg"
                    src={member.imgSrc}
                    alt="Avatar"
                  />
                <div className="text-center p-3 md:p-5 md:text-start">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{member.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {member.title}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {member.bio}
                  </p>
                  <Link href={member.linkedIn}>
                  <button className="flex items-center gap-1 bg-blue-400 text-white px-5 py-2 rounded-md font-semibold">
                  <FaLinkedin />
                    Connect on LinkedIn
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
