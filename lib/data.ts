import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuCode, LuGraduationCap, LuNetwork } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "BSc. Computer Science",
		location: "Air Force Institute of Technology, Nigeria",
		description:
			"Pursuing a Bachelor of Science in Computer Science at the Air Force Institute of Technology, I developed a strong foundation in software engineering, system design, and programming, fueling my passion for building innovative solutions.",
		icon: React.createElement(LuGraduationCap),
		date: "Apr 2021 - Oct 2024",
	},
	{
		title: "Front-End Developer",
		location: "Enover Lab, Remote",
		description:
			"At Enover Labs, I collaborated with cross-functional teams to develop MVPs, including a restaurant reservation platform and a job portal, focusing on creating intuitive and user-friendly frontend solutions.",
		icon: React.createElement(LuCode),
		date: "Mar 2023 - Sept 2023",
	},
	{
		title: "Fullstack Developer Intern",
		location: "Ihifix Technologies, Kaduna, Nigeria",
		description:
			"At Ihifix Technologies, I worked as a Full-Stack Software Engineer, delivering 100% of assigned projects by building responsive frontends with React and secure, performant backends using Node.js and PostgreSQL.",
		icon: React.createElement(LuCode),
		date: "Jul 2023 - Jan 2024",
	},
	{
		title: "Automation Assistant",
		location: "Kibo Inc., Remote",
		description:
			"At Kibo Inc., I developed automated systems using tools like Airtable, Zapier, and Typeform to streamline data collection, visualization, and accessibility for stakeholders.",
		icon: React.createElement(LuNetwork),
		date: "May 2024 - Jul 2024",
	},
] as const;

export const projectsData = [
	{
		title: "Skysec Global Services",
		description:
			"This showcase the companies security products and solutions while enhancing its online presence.",
		tags: ["Next.js", "MongoDB", "Tailwind", "Airtable"],
		url: "https://skysecglobal.com/",
		imageUrl: "/skysecglobal.png",
	},
	{
		title: "Squazzle",
		description:
			"Simplifies real estate discovery, helping users find properties that match their unique preferences efficiently and intuitively.",
		tags: ["TypeScript", "Next.js", "Tailwind", "Redux"],
		url: "https://squazzle.vercel.app/",
		imageUrl: "/squazzle.png",
	},
	{
		title: "Savanna Showcase",
		description:
			"Savanna Showcase is a platform to enable Nigerian artists showcase their work to a larger audience. While ensuring the buyer receives the best quality.",
		tags: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
		url: "https://savanna-showcase.com.ng/",
		imageUrl: "/savanna-showcase.png",
	},
	{
		title: "TableScribe",
		description:
			"A platform that streamlines restaurant reservations, offering users a seamless way to discover dining options and book effortlessly.",
		tags: ["React", "Tailwind", "TypeScript"],
		url: "https://tablescribe.vercel.app/",
		imageUrl: "/tablescribe.png",
	},
	{
		title: "Freshire",
		description:
			"Job board targeted at reducing the problem of unemployment in Nigeria.",
		tags: ["React", "Tailwind", "TypeScript"],
		url: "https://freshire.vercel.app/",
		imageUrl: "/freshire.png",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Drizzle ORM",
	"PostgreSQL",
	"Redux",
	"REST APIs",
	"Postman",
	"Express",
] as const;
