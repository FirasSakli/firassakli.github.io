"use client";
import React, { useEffect } from "react";
import HeroSection from "../Components/Portfolio/HeroSection.jsx";
import AboutSection from "../Components/Portfolio/AboutSection.jsx";
import SkillsSection from "../Components/Portfolio/SkillsSection.jsx";
import ProjectsSection from "../Components/Portfolio/ProjectsSection.jsx";
import ContactSection from "../Components/Portfolio/ContactSection.jsx";

export default function Portfolio() {
	useEffect(() => {
		// Smooth scrolling for the entire page
		document.documentElement.style.scrollBehavior = "smooth";

		return () => {
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, []);

	return (
		<div className="min-h-screen">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />

			{/* Footer */}
			<footer className="bg-slate-800 py-8">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<p className="text-slate-400 text-sm">
						© 2025 Firas Sakli. Built with passion for data and innovation.
					</p>
				</div>
			</footer>
		</div>
	);
}
