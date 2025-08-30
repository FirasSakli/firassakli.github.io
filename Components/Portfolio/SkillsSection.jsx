import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skills from "@/entities/Skill";

export default function SkillsSection() {
	const [skills, setSkills] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");

	useEffect(() => {
		loadSkills();
	}, []);

	const loadSkills = async () => {
		setSkills(Skills);
	};

	const categories = [
		{ id: "all", name: "All Skills" },
		{ id: "programming", name: "Programming" },
		{ id: "machine_learning", name: "Machine Learning" },
		{ id: "data_tools", name: "Data Tools" },
		{ id: "cloud", name: "Cloud" },
		{ id: "databases", name: "Databases" },
		{ id: "visualization", name: "Visualization" },
	];

	const filteredSkills =
		selectedCategory === "all"
			? skills
			: skills.filter((skill) => skill.category === selectedCategory);

	const getProficiencyWidth = (proficiency) => {
		return (proficiency / 5) * 100;
	};

	const getProficiencyColor = (proficiency) => {
		if (proficiency >= 4.5) return "from-green-500 to-emerald-500";
		if (proficiency >= 3.5) return "from-blue-500 to-cyan-500";
		if (proficiency >= 2.5) return "from-yellow-500 to-orange-500";
		return "from-red-500 to-pink-500";
	};

	return (
		<section id="skills" className="py-20 bg-slate-50">
			<div className="max-w-6xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-slate-900 mb-4">
						Technical Skills
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						A comprehensive toolkit built through years of hands-on experience
						and continuous learning
					</p>
				</motion.div>

				{/* Category Filter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="flex flex-wrap justify-center gap-4 mb-12"
				>
					{categories.map((category, index) => (
						<motion.button
							key={category.id}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-6 py-3 rounded-full font-medium transition-all ${
								selectedCategory === category.id
									? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
									: "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
							}`}
						>
							{category.name}
						</motion.button>
					))}
				</motion.div>

				{/* Skills Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, index) => (
						<motion.div
							key={skill.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-semibold text-slate-900">{skill.name}</h3>
								<div className="text-sm text-slate-500">
									{skill.years_experience && `${skill.years_experience}y`}
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex justify-between text-sm text-slate-600">
									<span>Proficiency</span>
									<span>{skill.proficiency}/5</span>
								</div>
								<div className="w-full bg-slate-200 rounded-full h-2">
									<motion.div
										initial={{ width: 0 }}
										whileInView={{
											width: `${getProficiencyWidth(skill.proficiency)}%`,
										}}
										transition={{ duration: 1, delay: index * 0.1 }}
										viewport={{ once: true }}
										className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(
											skill.proficiency
										)}`}
									/>
								</div>
							</div>

							<div className="mt-3">
								<span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
									{skill.category.replace("_", " ")}
								</span>
							</div>
						</motion.div>
					))}
				</div>

				{filteredSkills.length === 0 && (
					<div className="text-center py-12">
						<p className="text-slate-500">No skills found in this category.</p>
					</div>
				)}
			</div>
		</section>
	);
}
