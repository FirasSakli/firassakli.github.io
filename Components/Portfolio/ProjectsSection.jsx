import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Projects } from "@/entities/Project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectsSection() {
	const [projects, setProjects] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		loadProjects();
	}, []);

	const loadProjects = async () => {
		setProjects(Projects);
	};

	const categories = [
		{ id: "all", name: "All Projects" },
		{ id: "machine_learning", name: "Machine Learning" },
		{ id: "data_analysis", name: "Data Analysis" },
		{ id: "deep_learning", name: "Deep Learning" },
		{ id: "nlp", name: "NLP" },
		{ id: "computer_vision", name: "Computer Vision" },
		{ id: "data_visualization", name: "Data Visualization" },
	];

	const filteredProjects =
		selectedCategory === "all"
			? projects
			: projects.filter((project) => project.category === selectedCategory);

	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section id="projects" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-slate-900 mb-4">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						A showcase of impactful data science projects that solve real-world
						problems
					</p>
				</motion.div>

				{/* Featured Projects */}
				{featuredProjects.length > 0 && (
					<div className="mb-16">
						<h3 className="text-2xl font-bold text-slate-900 mb-8">
							Spotlight Projects
						</h3>
						<div className="grid lg:grid-cols-2 gap-8">
							{featuredProjects.map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									viewport={{ once: true }}
									className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer"
									onClick={() => setSelectedProject(project)}
								>
									<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
									<div className="relative p-8">
										<div className="flex items-start justify-between mb-6">
											<Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
												Featured
											</Badge>
											<div className="flex gap-2">
												{project.github_url && (
													<Button
														size="sm"
														variant="ghost"
														className="text-slate-300 hover:text-slate-300 hover:bg-transparent"
													>
														<Github className="w-4 h-4" />
													</Button>
												)}
												{project.demo_url && (
													<Button
														size="sm"
														variant="ghost"
														className="text-slate-300 hover:text-slate-300 hover:bg-transparent"
													>
														<ExternalLink className="w-4 h-4" />
													</Button>
												)}
											</div>
										</div>

										<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
											{project.title}
										</h3>

										<p className="text-slate-300 mb-6 leading-relaxed">
											{project.description}
										</p>

										{project.impact && (
											<div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
												<p className="text-green-300 text-sm font-medium">
													Impact
												</p>
												<p className="text-green-200">{project.impact}</p>
											</div>
										)}

										<div className="flex flex-wrap gap-2">
											{project.technologies
												?.slice(0, 4)
												.map((tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="outline"
														className="text-slate-300 border-slate-600"
													>
														{tech}
													</Badge>
												))}
											{project.technologies?.length > 4 && (
												<Badge
													variant="outline"
													className="text-slate-400 border-slate-600"
												>
													+{project.technologies.length - 4} more
												</Badge>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				)}

				{/* Category Filter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="flex flex-wrap justify-center gap-4 mb-12"
				>
					{categories.map((category) => (
						<motion.button
							key={category.id}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-6 py-3 rounded-full font-medium transition-all ${
								selectedCategory === category.id
									? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
									: "bg-slate-100 text-slate-600 hover:bg-slate-200"
							}`}
						>
							{category.name}
						</motion.button>
					))}
				</motion.div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
								onClick={() => setSelectedProject(project)}
							>
								<div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
									{project.image_url ? (
										<img
											src={project.image_url}
											alt={project.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
										/>
									) : (
										<div className="w-full h-full flex items-center justify-center">
											<div className="text-4xl text-slate-400">📊</div>
										</div>
									)}
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
										{project.title}
									</h3>

									<p className="text-slate-600 mb-4 line-clamp-2">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies
											?.slice(0, 3)
											.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant="secondary"
													className="text-xs"
												>
													{tech}
												</Badge>
											))}
									</div>

									<div className="flex items-center justify-between">
										<Badge className="capitalize bg-slate-100 text-slate-600">
											{project.category?.replace("_", " ")}
										</Badge>
										<div className="flex gap-2">
											{project.github_url && (
												<Button
													size="sm"
													variant="ghost"
													onClick={(e) => e.stopPropagation()}
												>
													<Github className="w-4 h-4" />
												</Button>
											)}
											{project.demo_url && (
												<Button
													size="sm"
													variant="ghost"
													onClick={(e) => e.stopPropagation()}
												>
													<ExternalLink className="w-4 h-4" />
												</Button>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				{filteredProjects.length === 0 && (
					<div className="text-center py-12">
						<p className="text-slate-500">
							No projects found in this category.
						</p>
					</div>
				)}

				{/* Project Detail Modal */}
				<Dialog
					open={!!selectedProject}
					onOpenChange={() => setSelectedProject(null)}
				>
					<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
						{selectedProject && (
							<>
								<DialogHeader>
									<DialogTitle className="text-2xl font-bold text-slate-900">
										{selectedProject.title}
									</DialogTitle>
								</DialogHeader>

								<div className="space-y-6">
									{selectedProject.image_url && (
										<img
											src={selectedProject.image_url}
											alt={selectedProject.title}
											className="w-full h-64 object-cover rounded-lg"
										/>
									)}

									<div>
										<h3 className="text-lg font-semibold mb-2">Overview</h3>
										<p className="text-slate-600 leading-relaxed">
											{selectedProject.detailed_description ||
												selectedProject.description}
										</p>
									</div>

									{selectedProject.impact && (
										<div className="bg-green-50 border border-green-200 rounded-lg p-4">
											<h3 className="text-lg font-semibold text-green-800 mb-2">
												Impact & Results
											</h3>
											<p className="text-green-700">{selectedProject.impact}</p>
										</div>
									)}

									<div>
										<h3 className="text-lg font-semibold mb-3">
											Technologies Used
										</h3>
										<div className="flex flex-wrap gap-2">
											{selectedProject.technologies?.map((tech, index) => (
												<Badge key={index} variant="secondary">
													{tech}
												</Badge>
											))}
										</div>
									</div>

									<div className="flex gap-4 pt-4">
										{selectedProject.github_url && (
											<Button asChild>
												<a
													href={selectedProject.github_url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="w-4 h-4 mr-2" />
													View Code
												</a>
											</Button>
										)}
										{selectedProject.demo_url && (
											<Button variant="outline" asChild>
												<a
													href={selectedProject.demo_url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="w-4 h-4 mr-2" />
													Live Demo
												</a>
											</Button>
										)}
									</div>
								</div>
							</>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}
