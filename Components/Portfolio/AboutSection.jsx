import React from "react";
import { motion } from "framer-motion";
import { BarChart, Brain, Database, TrendingUp } from "lucide-react";

export default function AboutSection() {
	const stats = [
		{ icon: BarChart, label: "Projects Completed", value: "25+" },
		{ icon: Brain, label: "ML Models Deployed", value: "15+" },
		{ icon: Database, label: "Datasets Analyzed", value: "100+" },
		{ icon: TrendingUp, label: "Years Experience", value: "4+" },
	];

	return (
		<section id="about" className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<p className="text-lg text-slate-600 leading-relaxed">
							I’m a motivated data professional pursuing a Master’s in Web and
							Data Science with a strong focus on data engineering and
							analytics. I enjoy working with Python, SQL, and modern data tools
							like Airflow, Spark, and Docker to build pipelines and transform
							raw data into insights.
						</p>

						<p className="text-lg text-slate-600 leading-relaxed">
							I designed dashboards in Power BI, built ETL workflows, and
							applied time-series and machine learning models for forecasting
							and analysis.
						</p>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-slate-900">
								What drives me:
							</h3>
							<ul className="space-y-2">
								{[
									"Turning complex data into clear, actionable insights",
									"Building reliable pipelines and visualizations that support decisions",
									"Exploring machine learning for real-world forecasting challenges",
									"Continuously learning and growing in data engineering and analytics",
								].map((item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center text-slate-600"
									>
										<div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
										{item}
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 text-center hover:shadow-lg transition-shadow"
								>
									<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<stat.icon className="w-6 h-6 text-white" />
									</div>
									<div className="text-2xl font-bold text-slate-900 mb-1">
										{stat.value}
									</div>
									<div className="text-sm text-slate-600">{stat.label}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
