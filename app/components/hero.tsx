"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";

export default function Hero() {
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
                className="">
                <div className="h-auto lg:h-screen min-h-screen w-screen">
                    <header className="px-6 py-4 sm:px-20 md:px-36 lg:px-28">
                        <img src="/logo.svg" alt="logo" className="h-20 w-20" />
                    </header>
                    <section className="relative flex flex-col items-center gap-10 px-6 pb-20 pt-10 sm:px-20 md:px-36 lg:flex-row lg:items-start lg:gap-10 lg:px-28">
                        <div className="flex h-full flex-col items-center gap-10 lg:w-1/2 lg:max-w-md lg:items-start lg:justify-start">
                            <div className="rounded-full border border-primary-500 bg-primary-800/40 px-3 py-1 text-sm tracking-tight">
                                Currently in private beta
                            </div>
                            <h1 className="text-center text-5xl tracking-tight lg:text-start">
                                MoneyGlitch is the Content Platform for traders
                            </h1>
                            <h2 className="text-center text-lg font-light tracking-tight text-neutral-600 lg:text-start">
                                Create trading content and make money. Stop wasting time trying
                                monetize your knowledge, get started in just few clicks.
                            </h2>
                            <form className="w-full" action="https://submit-form.com/Njk5BcybI">
                                <div className="flex h-10 w-full items-center">
                                    <div className="relative grow">
                                    <input
                                        type="hidden"
                                        name="_redirect"
                                        value="https://www.moneyglitch.dev"
                                    />
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            autoComplete="off"
                                            placeholder="Enter your email"
                                            className="z-10 w-full rounded-l-xl border border-neutral-600 py-2.5 pl-12 pr-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-600"
                                        />
                                    </div>
                                    <button type="submit" className="rounded-r-xl border text-white border-neutral-600 bg-neutral-950 p-2.5 font-medium tracking-tight hover:bg-neutral-800">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex grow items-center justify-center">
                            <img
                                src="/sphere.png"
                                alt="Coins"
                                className="ml-auto  sm:w-[250px] xl:[650px] md:w-[300px] lg:w-[550px]  pb-9"
                            />
                        </div>
                    </section>
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
