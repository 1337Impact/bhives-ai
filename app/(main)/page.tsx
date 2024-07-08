"use client";
import Link from "next/link";
import Card from "@/components/Cards";
import ServiceCard from "@/components/Cards/ServiceCard";
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
import ProcessCard from "@/components/Cards/ProcessCard";
import { FaSearch, FaLightbulb } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import TeamCard from "@/components/Cards/TeamCard";
import TechStack from "@/components/TeckStack";
import FAQComponent from "@/components/FAQComponent";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Loading from "../loading";

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

const faqData = [
  {
    question: "How quickly can I see results with Bhives.ai?",
    answer:
      "Many clients see significant improvements within weeks. The sooner you start, the faster you'll outpace your competition. Our rapid implementation process ensures you don't miss out on AI-driven growth opportunities.",
  },
  {
    question: "Is my business too small for AI?",
    answer:
      "Absolutely not. Our solutions scale to businesses of all sizes. In fact, AI can be the key to leveling the playing field against larger competitors. We've helped startups disrupt industries and small businesses outperform larger rivals.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer:
      "No worries! We handle all the technical complexities. You focus on your business goals, we'll make the AI magic happen. Our team translates complex AI concepts into clear, actionable insights for your business.",
  },
  {
    question: "How do I know if AI is right for my industry?",
    answer:
      "If your industry involves data, decisions, or customer interactions (hint: they all do), then AI can give you a competitive edge. Let's discuss your specific needs. We've successfully implemented AI solutions across diverse sectors, from healthcare to retail to manufacturing.",
  },
  {
    question: "What makes Bhives.ai different from other AI consultancies?",
    answer:
      "Unlike larger firms, we offer personalized attention and cutting-edge solutions tailored to your unique needs. Our team of AI visionaries comes from top tech companies and leading research institutions. We're not just consultants; we're your AI partners in growth, committed to your long-term success.",
  },
  {
    question: "How much does it cost to implement AI solutions?",
    answer:
      "Our pricing is as flexible as our solutions. We work with you to create a package that fits your budget and maximizes ROI. Remember, the question isn't whether you can afford AI, but whether you can afford to be left behind without it. Let's discuss your budget and find a solution that works for you.",
  },
  {
    question: "Is my data safe with AI implementation?",
    answer:
      "Absolutely. We prioritize data security and privacy in all our AI implementations. Our solutions comply with industry standards and regulations like GDPR and CCPA. Your data's security is as important to us as the powerful insights we derive from it.",
  },
  {
    question: "How will AI impact my current workforce?",
    answer:
      "AI is not about replacing humans, but empowering them. Our solutions are designed to augment your team's capabilities, allowing them to focus on higher-value tasks. Many of our clients find that AI implementation leads to increased job satisfaction and opens up new growth opportunities for their employees.",
  },
  {
    question: "What if I'm not satisfied with the AI solution?",
    answer:
      "Your satisfaction is our top priority. We offer a satisfaction guarantee and will work tirelessly to ensure the AI solution meets your needs. Our iterative approach allows for continuous refinement based on your feedback. We're not satisfied until you're seeing real, measurable results.",
  },
  {
    question: "How long does the implementation process take?",
    answer:
      "The timeline varies depending on the complexity of your needs and the scale of implementation. Some solutions can be up and running in a matter of weeks, while more comprehensive transformations might take a few months. We work efficiently to ensure you start seeing benefits as quickly as possible.",
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer:
      "Yes, we provide comprehensive ongoing support and maintenance for all our AI solutions. Our team is always available to answer questions, provide updates, and ensure your AI systems continue to perform optimally as your business evolves.",
  },
  {
    question: "How do I get started with Bhives.ai?",
    answer:
      "It's easy! Simply schedule your free AI strategy session using the form on our website. In this no-obligation consultation, we'll discuss your business goals, explore AI opportunities, and provide initial insights. It's the first step towards transforming your business with AI. Don't wait – your competitors certainly aren't!",
  },
];

const contactData = [
  {
    icon: FaRobot,
    title: "Custom AI Solutions",
    description: "Tailored strategies to boost efficiency",
  },
  {
    icon: FaChartLine,
    title: "Data-Driven Insights",
    description: "Harness your data for smart decisions",
  },
  {
    icon: FaCogs,
    title: "Seamless Integration",
    description: "Effortlessly incorporate AI into your workflow",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="relative">
      <section
        id="hero-section"
        className="relative flex items-center flex-col min-h-[calc(100vh-80px)] pt-6 md:pt-10"
      >
        <h1 className="text-gray-900 font-semibold text-5xl md:text-6xl mt-28">
          AI-Powered
        </h1>
        <div
          className={`${styles.text} font-semibold text-4xl md:text-5xl text-orange-600 mt-2`}
        ></div>
        <p className="text-center font-semibold text-lg lg:text-xl text-gray-600 mx-4 mt-5 max-w-[600px] px-4">
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
            <button className="border-2 border-orange-500 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-400 transition-all ease-in-out duration-200">
              Start Your AI Journey
            </button>
          </Link>
          <Link href="#services">
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-100 transition-all ease-in-out duration-200">
              Explore Solutions
            </button>
          </Link>
        </div>
        <div className="waves layer1 absolute -bottom-1 -z-10" />
      </section>
      <section
        id="why-choose"
        className="scroll-mt-20 relative bg-orange-400 min-h-screen flex items-center flex-col pt-14 pb-40 px-4"
      >
        <h1 className="text-4xl font-bold text-white text-center mt-4 max-w-[600px]">
          Why Forward-Thinking Businesses Choose Bhives.ai?
        </h1>
        <p className="text-gray-50 font-semibold text-lg lg:text-xl max-w-[500px] text-center mt-6">
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
          <button className="bg-white border-2 border-white text-orange-500 font-bold px-6 py-3 rounded-lg mt-16 lg:mb-40 xl:mb-80 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
            Start Your AI Transformation Today
          </button>
        </Link>
        <div className="waves layer2 absolute -bottom-[40px]" />
      </section>
      <section
        id="services"
        className="scroll-mt-20 relative min-h-screen flex items-center flex-col mt-20 md:mt-0"
      >
        <h1 className="text-4xl font-bold text-black text-center mt-4 max-w-[600px]">
          Our AI Automation Services
        </h1>
        <p className="text-gray-600 text-xl font-semibold max-w-[700px] text-center mt-6 px-4">
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
      <section id="process" className="scroll-mt-20 relative bg-gray-900 text-white py-16">
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
          <h1 className="text-3xl lg:text-4xl font-bold text-white text-center max-w-[600px] px-4">
            Ready to start your AI automation journey?
          </h1>
          <Link href="#contact">
            <button className="bg-white border-2 border-white text-orange-400 font-semibold px-6 py-3 rounded-lg mt-4 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
              Schedule Your Free Consultation
            </button>
          </Link>
        </div>
      </section>
      <section id="team" className="scroll-mt-20 team-section py-10 lg:py-20 bg-gray-900">
        <div className="max-w-[1260px] md:mx-4 lg:mx-auto px-4">
          <h2 className="text-4xl text-white font-bold text-center mb-10 underline underline-offset-8">
            Our AI Visionaries
          </h2>
          <div className="bg-white p-10 rounded-lg shadow-md mb-10 text-center">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              At Bhives.ai, we&apos;re driven by a singular vision: to democratize AI
              and empower businesses of all sizes with cutting-edge automation
              solutions. Our team of experts is committed to pushing the
              boundaries of AI technology while making it accessible and
              practical for real-world applications.
            </p>
            <ul className="flex flex-col gap-6 items-center justify-center md:flex-row">
              {vesionData.map((item) => (
                <li
                  key={item.title}
                  className="card flex flex-col items-center justify-center rounded-lg p-4 bg-gray-100 shadow-lg hover:scale-[103%] transition-gpu ease-in-out duration-500"
                >
                  <item.icon className="text-[2.5rem] text-orange-500 mt-4" />
                  <h4 className="text-xl font-semibold ml-2">{item.title}</h4>
                  <p className="text-gray-700 mt-2">{item.description}</p>
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
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      <TechStack />
      <section id="faq" className="scroll-mt-20 relative bg-white text-gray-800 py-20 ">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mb-8 lg:mb-16 max-w-[1260px] lg:mx-auto px-4">
          <FAQComponent data={faqData} />
        </div>
      </section>
      <section id="contact" className="-scroll-mt-10 relative bg-orange-400 py-16 bg-cover">
        <div className="waves layer1 absolute -top-[60px] md:-top-[100px] lg:-top-[200px]" />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-white font-bold text-center mt-20 xl:mt-40">
            Unleash AI for Your Business
          </h2>
          <p className="text-lg text-gray-100 text-center mt-2">
            Book your free 30-minute AI strategy session
          </p>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <div className="bg-white text-gray-800 p-8 flex flex-wrap justify-between">
              <ul className="flex flex-col gap-4 items-center justify-center md:flex-row mx-auto">
                {contactData.map((item) => (
                  <li
                    key={item.title}
                    className="card flex flex-col items-center justify-center rounded-lg text-center p-4 py-6 bg-gray-100 shadow-lg hover:scale-[103%] transition-gpu ease-in-out duration-500"
                  >
                    <item.icon className="text-[2.5rem] text-orange-500 mt-4" />
                    <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
