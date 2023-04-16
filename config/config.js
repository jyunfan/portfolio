
import profile from './profile.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Hashir",
	links: [
		{
			title: "About",
			link: "#about",
		},
		/*
		{
			title: "Projects",
			link: "#projects",
		},
		*/
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Jyun-Fan",
	description: "Founder of Dorgie, application of AI and automation",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm a recognized data scientist with 15 years of experience in data collection, big data analysis, quantitative trading, and machine learning. My focus is on automation and AI, and I'm passionate about leveraging these technologies to improve business outcomes and solve complex problems. I stay up-to-date with the latest trends and innovations in data science and strive to deliver high-quality work to my clients.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "AI App Development",
			description: "Dorgie Co. Ltd.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		/*
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		}
		*/
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at jftsai@protonmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:jftsai@protonmail.com",
			isPrimary: true,
		},
		{
			title: "Company",
			link: "https://dorgie.com",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Jyun-Fan Tsai | AI | Computer Engineer | Data Scientist",
	description: "",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@jyunfantsai",
	description: "AI | Automation | Data Science",
	cards: [
		{
			title: "My website",
			link: "https://jyunfantsai.com/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/jyunfan/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/jyun-fan-tsai/",
		},
	]
}