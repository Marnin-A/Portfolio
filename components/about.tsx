"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3 text-lg leading-10">
				While developing a strong foundation in{" "}
				<span className="font-semibold">Computer Science</span>, I decided to
				try to solve problems around me by building scalable web applications
				targeting those problems. <span>My primary stack includes</span>{" "}
				<span className="font-semibold">
					Next.js, TypeScript, Tailwind CSS, and PostgreSQL{" "}
				</span>
				I'm continuously improving my expertise in these areas and expanding to
				other more{" "}
				<span className="font-semibold">
					System Oriented areas of Software Development and Task Automation.{" "}
				</span>
				My favorite part of programming is finding efficient solutions to
				complex challenges, particularly in{" "}
				<span className="font-semibold">
					Web Development and System Optimization.
				</span>{" "}
				I'm always enthusiastic about exploring new technologies and best
				practices to stay up-to-date in this fast-evolving field.
			</p>
		</motion.section>
	);
}
