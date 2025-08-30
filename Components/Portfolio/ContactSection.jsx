"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { Toaster, toast as sonnerToast } from "sonner";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { Phone, MapPin, Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
		type: "general",
		website: "", // honeypot
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.website) return; // honeypot

		setIsSubmitting(true);
		try {
			await sendContactEmail(
				{
					name: formData.name,
					email: formData.email,
					company: formData.company,
					type: formData.type,
					message: formData.message,
				},
				{
					toName: "Firas Sakli",
					subject: `New Contact Form Submission from ${formData.name}`,
				}
			);

			sonnerToast("Message sent successfully! I’ll get back to you soon.");
			setFormData({
				name: "",
				email: "",
				company: "",
				message: "",
				type: "general",
				website: "",
			});
		} catch (err) {
			console.error(err);
			sonnerToast(
				"Error sending message. Please try again or email me directly."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20 bg-slate-900">
			<Toaster position="bottom-right" richColors />
			<div className="max-w-6xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">
						Let's Work Together
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
					<p className="text-lg text-slate-300 max-w-2xl mx-auto">
						Ready to turn your data into actionable insights? Let's discuss how
						I can help your organization succeed.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold text-white mb-6">
								Get in Touch
							</h3>
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
										<Mail className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-slate-300 text-sm">Email</p>
										<p className="text-white font-medium">
											firassk.dev@email.com
										</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
										<Phone className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-slate-300 text-sm">Phone</p>
										<p className="text-white font-medium">
											+49 (155) 10 416817
										</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
										<MapPin className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-slate-300 text-sm">Location</p>
										<p className="text-white font-medium">Koblenz, De</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-white mb-4">
								Connect with me
							</h4>
							<div className="flex gap-4">
								<a
									href="https://www.linkedin.com/in/firas-sakly-872658183/"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
								>
									<Linkedin className="w-5 h-5 text-white" />
								</a>
								<a
									href="https://github.com/SaklyFiras"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
								>
									<Github className="w-5 h-5 text-white" />
								</a>
							</div>
						</div>

						<div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-6">
							<h4 className="text-lg font-semibold text-white mb-2">
								Open to Opportunities
							</h4>
							<p className="text-slate-300 text-sm mb-4">
								I'm currently open to new full-time opportunities, consulting
								projects, and collaborations.
							</p>
							<div className="flex gap-2">
								<div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
									Available
								</div>
								<div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
									Remote OK
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-slate-800 rounded-2xl p-8"
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<label className="text-slate-300 text-sm font-medium">
										Name *
									</label>
									<Input
										value={formData.name}
										onChange={(e) => handleInputChange("name", e.target.value)}
										placeholder="Your name"
										required
										className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-slate-300 text-sm font-medium">
										Email *
									</label>
									<Input
										type="email"
										value={formData.email}
										onChange={(e) => handleInputChange("email", e.target.value)}
										placeholder="your@email.com"
										required
										className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<label className="text-slate-300 text-sm font-medium">
										Company
									</label>
									<Input
										value={formData.company}
										onChange={(e) =>
											handleInputChange("company", e.target.value)
										}
										placeholder="Your company"
										className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-slate-300 text-sm font-medium">
										Contact Type
									</label>
									<Select
										value={formData.type}
										onValueChange={(value) => handleInputChange("type", value)}
									>
										<SelectTrigger className="bg-slate-700 border-slate-600 text-white">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="recruiter">Job Opportunity</SelectItem>
											<SelectItem value="collaboration">
												Project Collaboration
											</SelectItem>
											<SelectItem value="general">General Inquiry</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="space-y-2">
								<label className="text-slate-300 text-sm font-medium">
									Message *
								</label>
								<Textarea
									value={formData.message}
									onChange={(e) => handleInputChange("message", e.target.value)}
									placeholder="Tell me about your project or opportunity..."
									rows={6}
									required
									className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 resize-none"
								/>
							</div>

							{/* Honeypot hidden */}
							<input
								type="text"
								name="website"
								value={formData.website}
								onChange={(e) => handleInputChange("website", e.target.value)}
								className="hidden"
								tabIndex={-1}
								autoComplete="off"
							/>

							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
							>
								{isSubmitting ? (
									<div className="flex items-center gap-2">
										<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
										Sending...
									</div>
								) : (
									<div className="flex items-center gap-2">
										<Send className="w-4 h-4" />
										Send Message
									</div>
								)}
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
