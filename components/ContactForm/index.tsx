"use client";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';

export default function ContactForm() {
    const submitForm = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
        e.target.reset();
        Swal.fire({
            title: "Thank you for your interest!",
            text: "We will contact you shortly to confirm your AI strategy session.",
            icon: "success",
            confirmButtonText: "Close",
            confirmButtonColor: "#F97316",
        });
    };

  return (
    <form onSubmit={submitForm} className="p-8 font-[450]">
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Full Name"
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your Email Address"
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="company"
          name="company"
          required
          placeholder="Company Name"
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <select
          id="industry"
          name="industry"
          required
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        >
          <option value="" disabled selected>
            Select Your Industry
          </option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          placeholder="How can AI benefit your business?"
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="text-lg mb-2">Preferred Consultation Date:</label>
        <input
          type="date"
          id="preferred-date"
          name="preferred-date"
          required
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="text-lg mb-2">Preferred Time Slot:</label>
        <select
          id="preferred-time"
          name="preferred-time"
          required
          className="w-full p-3 border-2 border-gray-500 rounded-lg text-lg transition-colors duration-300 focus:border-orange-500 focus:outline-none"
        >
          <option value="" disabled selected>
            Select a time slot
          </option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
          <option value="evening">Evening (6 PM - 8 PM)</option>
        </select>
      </div>
      <button className="w-full bg-orange-500 text-white p-3 rounded-lg text-lg transition-colors duration-300 hover:bg-orange-400">
        Book Your Free AI Strategy Session
      </button>
    </form>
  );
}
