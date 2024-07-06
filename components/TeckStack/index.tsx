"use client";
import React, { useState } from 'react';

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

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = selectedCategory === 'all'
    ? techStackData
    : techStackData.filter(tech => tech.category === selectedCategory);

  return (
    <section id="tech-stack" className="tech-stack-section py-12">
      <div className="mx-10 max-w-[1260px] lg:mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Cutting-Edge Tech Stack</h2>
        <p className="text-center mb-8 text-gray-700">We leverage industry-leading platforms and technologies to deliver unparalleled AI automation solutions.</p>

        <div className="flex justify-center mb-8 gap-2">
          {['all', 'cloud', 'ai', 'automation'].map(category => (
            <div
              key={category}
              className={`category px-4 py-2 cursor-pointer rounded-md hover:bg-gray-300 ${selectedCategory === category ? 'bg-orange-400 hover:bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((tech, index) => (
            <div key={index} className="tech-card bg-white shadow-md rounded-lg p-6 text-center">
              <img src={tech.imgSrc} alt={tech.altText} className="mx-auto mb-4 h-24" />
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-700">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
