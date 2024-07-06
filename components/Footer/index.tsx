import Link from "next/link";
import React from "react";
import {
  FaChevronUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-10">
      <div
        className="absolute inset-0 opacity-50 z-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('path-to-your-background-image')" }}
      ></div>
      <div className="relative z-10 flex flex-wrap justify-between mx-auto mb-8 lg:mb-16 max-w-[1260px] px-4">
        <div className="mb-8 min-w-[200px] pr-5 flex-1">
            <h1 className="text-3xl font-bold mb-4">Bhives.ai</h1>
          <p className="leading-6 mb-4 text-sm">
            Empowering businesses with AI-driven automation solutions.
          </p>
          <div className="social-icons flex gap-6 mt-2">
            <a
              href="https://www.linkedin.com/company/bhives-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-orange-400"
            >
                <FaLinkedin />
              {/* <i className="fab fa-linkedin"></i> */}
            </a>
            <a
              href="https://twitter.com/bhives_ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-orange-400"
            >
                <FaTwitter />
              {/* <i className="fab fa-twitter"></i> */}
            </a>
            <a
              href="https://www.facebook.com/bhivesai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-orange-400"
            >
                <FaFacebook/>
            {/* <i className="fab fa-facebook"></i> */}
            </a>
            <a
              href="https://www.instagram.com/bhives.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-orange-400"
            >
                <FaInstagram />
              {/* <i className="fab fa-instagram"></i> */}
            </a>
          </div>
        </div>
        <div className="footer-section mb-8 min-w-[200px] pr-5 flex-1">
          <ul className="list-none p-0">
            <li className="mb-2">
              <a
                href="#services"
                className="relative text-white transition-all duration-300 ease-in-out hover:text-orange-400 hover:pl-5"
              >
                Services
                <span className="absolute left-[-20px] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 hover:left-0">
                  →
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#about"
                className="relative text-white transition-all duration-300 ease-in-out hover:text-orange-400 hover:pl-5"
              >
                About Us
                <span className="absolute left-[-20px] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 hover:left-0">
                  →
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#case-studies"
                className="relative text-white transition-all duration-300 ease-in-out hover:text-orange-400 hover:pl-5"
              >
                Case Studies
                <span className="absolute left-[-20px] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 hover:left-0">
                  →
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#blog"
                className="relative text-white transition-all duration-300 ease-in-out hover:text-orange-400 hover:pl-5"
              >
                Insights
                <span className="absolute left-[-20px] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 hover:left-0">
                  →
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#careers"
                className="relative text-white transition-all duration-300 ease-in-out hover:text-orange-400 hover:pl-5"
              >
                Careers
                <span className="absolute left-[-20px] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 hover:left-0">
                  →
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section mb-8 min-w-[200px] pr-5 flex-1">
          <p className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-orange-400 mr-2" />
            123 AI Street, Tech City, 12345
          </p>
          <p className="flex items-center mb-4">
            <FaPhone className="text-orange-400 mr-2" />
            +1 (555) 123-4567
          </p>
          <p className="flex items-center mb-4">
            <FaEnvelope className="text-orange-400 mr-2" />
            info@bhives.ai
          </p>
          <button
            className="bg-orange-400 text-[#1a1a1a] border-none py-2 px-5 rounded-lg cursor-pointer transition-all ease-in-out font-bold mt-4 hover:bg-orange-500 hover:transform hover:-translate-y-1"
            id="openContactModal"
          >
            Get in Touch
          </button>
        </div>
        <div className="footer-section mb-8 min-w-[200px] pr-5 flex-1">
          <p className="leading-6 mb-4 text-sm">
            Subscribe to our newsletter for the latest AI insights and updates.
          </p>
          <form className="newsletter-form flex mt-4">
            <input
              type="email"
              className="flex-grow p-2 bg-[rgba(255,255,255,0.1)] text-white placeholder-[rgba(255,255,255,0.6)] border-none rounded-l"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              className="p-2 bg-orange-400 text-[#1a1a1a] font-bold rounded-r hover:bg-orange-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8 pt-5 border-t border-[rgba(255,255,255,0.1)] relative z-10">
        <p className="mb-2 text-sm">
          &copy; 2024 Bhives.ai. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a
            href="#privacy-policy"
            className="text-white transition-all duration-300 ease-in-out hover:text-orange-400"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            className="text-white transition-all duration-300 ease-in-out hover:text-orange-400 ml-4"
          >
            Terms of Service
          </a>
          <a
            href="#sitemap"
            className="text-white transition-all duration-300 ease-in-out hover:text-orange-400 ml-4"
          >
            Sitemap
          </a>
        </nav>
      </div>
      <Link href={"#"}>
        <button
          className="back-to-top absolute bottom-10 right-10 bg-orange-400 text-black p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 hover:transform hover:-translate-y-1"
          id="back-to-top"
          aria-label="Back to top"
        >
          <FaChevronUp />
        </button>
      </Link>
    </footer>
  );
}
