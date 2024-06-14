"use client"
import { useState } from 'react';
import { CoolMode } from './magicui/cool-mode';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
    },
    {
      question: "How do I install Tailwind CSS in a Next.js project?",
      answer: "You can follow the official Tailwind CSS setup guide for Next.js."
    },
    {
      question: "What is Next.js?",
      answer: "Next.js is a React framework that enables server-side rendering and generating static websites."
    },
    {
      question: "How do I deploy a Next.js application?",
      answer: "Next.js applications can be deployed on Vercel, Netlify, or any other platform that supports Node.js."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <CoolMode>
          <button
            onClick={() => toggleOpen(index)}
            className="w-full text-left py-4 px-6 bg-white border border-gray-400 rounded-lg focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              <span className="text-xl font-bold text-gray-900">{open === index ? '-' : '+'}</span>
            </div>
          </button>
          </CoolMode>
          
          {open === index && (
            <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-800">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
