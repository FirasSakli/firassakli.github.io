"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
	motion,
	useMotionValue,
	useSpring,
	useMotionTemplate,
	useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	ChevronDown,
	Download,
	Github,
	Linkedin,
	Mail,
	MapPin,
} from "lucide-react";
import Image from "next/image";
import me from "@/images/me.jpg";

export default function HeroSection() {
	// ---------- Smooth cursor tracking (stable on SSR) ----------
	const mouseX = useMotionValue(50);
	const mouseY = useMotionValue(50);
	const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
	const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			mouseX.set((e.clientX / window.innerWidth) * 100);
			mouseY.set((e.clientY / window.innerHeight) * 100);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);

	const bgGradient = useMotionTemplate`
    radial-gradient(
      circle at ${smoothX}% ${smoothY}%,
      rgba(139, 92, 246, 0.25) 0%,
      transparent 55%
    )
  `;

	const parallaxX = useTransform(smoothX, (v) => (v - 50) * 0.8);
	const parallaxY = useTransform(smoothY, (v) => (v - 50) * 0.6);

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	// ---------- Hydration-safe particle generation ----------
	const [mounted, setMounted] = useState(false);
	const [particles, setParticles] = useState([]);

	useEffect(() => {
		// Mark as mounted so client can render random-dependent UI
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		// Generate particles ONLY on the client (after mount) to avoid SSR mismatch
		const generated = Array.from({ length: 50 }).map((_, i) => {
			const range = 8 + Math.random() * 10; // 8–18px gentle float
			const duration = 6 + Math.random() * 6; // 6–12s slow drift
			const delay = Math.random() * 4; // staggered start
			return {
				id: i,
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				range,
				duration,
				delay,
				opacityKeyframes: [0.25, 0.7, 0.25],
			};
		});
		setParticles(generated);
	}, [mounted]);

	return (
		<section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			{/* Smoothed background glow */}
			<motion.div
				className="absolute inset-0 opacity-30"
				style={{ background: bgGradient }}
			/>

			{/* Particles: render ONLY after mount to avoid SSR ↔ client random mismatches */}
			{mounted && (
				<motion.div
					className="absolute inset-0 will-change-transform"
					style={{ x: parallaxX, y: parallaxY }}
					suppressHydrationWarning
				>
					{particles.map((p) => (
						<motion.div
							key={p.id}
							className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
							style={{ left: p.left, top: p.top }}
							animate={{ y: [-p.range, p.range], opacity: p.opacityKeyframes }}
							transition={{
								duration: p.duration,
								repeat: Infinity,
								ease: "easeInOut",
								delay: p.delay,
							}}
						/>
					))}
				</motion.div>
			)}

			<div className="relative z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="text-center lg:text-left"
					>
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 }}
							className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6"
						>
							<span className="text-purple-300 text-sm font-medium">
								Available for new opportunities
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.25 }}
							className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
						>
							Hi, I'm{" "}
							<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								Firas Sakli
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.35 }}
							className="text-xl text-slate-300 mb-8 leading-relaxed"
						>
							Master’s student in Web and Data Science with experience in
							Python, SQL, and modern data tools. Skilled in ETL, visualization,
							and applying machine learning for insights.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.45 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
						>
							<Button
								size="lg"
								className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
								onClick={() => scrollToSection("projects")}
							>
								View My Work
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8"
								onClick={() => window.open("/Firas_Sakli_CV.pdf", "_blank")}
							>
								<Download className="w-4 h-4 mr-2" />
								Download Resume
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.55 }}
							className="flex gap-6 justify-center lg:justify-start"
						>
							<a
								href="https://github.com/SaklyFiras"
								className="text-slate-400 hover:text-purple-400 transition-colors"
								aria-label="GitHub"
							>
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://www.linkedin.com/in/firas-sakly-872658183/"
								className="text-slate-400 hover:text-purple-400 transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="#"
								className="text-slate-400 hover:text-purple-400 transition-colors"
								aria-label="Email"
								onClick={(e) => {
									e.preventDefault();
									window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
								}}
							>
								<Mail className="w-6 h-6" />
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.65 }}
							className="flex items-center gap-2 text-slate-400 text-sm mt-6 justify-center lg:justify-start"
						>
							<MapPin className="w-4 h-4" />
							Koblenz, DE
						</motion.div>
					</motion.div>

					{/* Profile Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="relative"
					>
						<div className="relative w-80 h-80 mx-auto">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse" />
							<div className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
								<div className="w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-6xl font-bold text-white">
									<Image
										className="w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center"
										src={me}
										alt="me"
									></Image>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
				onClick={() => scrollToSection("about")}
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="text-purple-300"
				>
					<ChevronDown className="w-6 h-6" />
				</motion.div>
			</motion.div>
		</section>
	);
}
