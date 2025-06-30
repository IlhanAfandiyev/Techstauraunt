import React, { useState } from 'react'

const faqs = [
  {
    question: "What is Techstaurant?",
    answer:
      "Techstaurant is a modern digital platform for discovering and ordering from top restaurants around you.",
  },
  {
    question: "How can I create an account?",
    answer:
      "Click on the Register button in the navbar and follow the steps to create a secure user account.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. We use modern encryption and authentication methods to protect your personal information.",
  },
  {
    question: "Can I order without logging in?",
    answer:
      "For tracking and security reasons, you need to be logged in to place an order.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white/30 rounded-lg transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 text-lg sm:text-xl focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                +
              </span>
            </button>
            <div
              className={`px-5 pt-0 pb-4 text-white text-sm sm:text-base overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
