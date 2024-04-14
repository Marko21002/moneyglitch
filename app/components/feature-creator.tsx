"use client";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";

const creatorFeatures = [
    {
        name: 'Make money: ',
        description: 'Monetize your trading knowledge in few clicks. Our platform is tailored for this, no need for makeshift solutions.',
        icon: "💵",
    },
    {
        name: 'SEO optimized pages: ',
        description: 'Our pages are top-level SEO optimized to help you grow your audience effortlessly by launching targeted ads.',
        icon: "🎯",
    },
];

const consumerFeatures = [
    {
        name: 'Affordable knowledge: ',
        description: 'Our service is subscription based. No need to pay a huge fee just to get started.',
        icon: "💰",
      },
      {
        name: 'Trading experts: ',
        description: 'We feature vetted trading experts on our platfrom. Reach out to us if you want your favorite trader on our platform.',
        icon: "👨🏻‍💼",
      },
];

export default function Feature() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          {/* For Content Creators */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg ">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For Content Creators</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We create the most user-friendly and monetizable platform for creators:
                </p>
                <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {creatorFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold ">
                        <div className='absolute left-0 top-0 text-[25px]'>{feature.icon}</div>
                        {feature.name}
                      </dt>
                      <dd className="inline ">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <img src="/coins.png" alt="Features for creators" className="max-w-full h-auto"/>
            </div>
          </div>

          {/* For Consumers */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start mt-20">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For Consumers</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Explore unique, high-quality content curated just for you:
                </p>
                <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {consumerFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold">
                        <div className='absolute left-0 top-0 text-[25px]'>{feature.icon}</div>
                        {feature.name}
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <img src="/study.png" alt="Features for consumers" className="max-w-full h-auto"/>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
