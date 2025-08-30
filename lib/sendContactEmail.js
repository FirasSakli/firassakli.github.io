import emailjs from "@emailjs/browser";

let lastSent = 0; // store the last sent timestamp (ms)

/**
 * Sends a contact email using EmailJS (client-side).
 * Throttled: only 1 send every 10 seconds.
 */
export async function sendContactEmail(form, options = {}) {
	const now = Date.now();
	if (now - lastSent < 10000) {
		const remaining = Math.ceil((10000 - (now - lastSent)) / 1000);
		throw new Error(
			`Please wait ${remaining}s before sending another message.`
		);
	}

	const {
		serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
		publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
		toName = "Portfolio Owner",
		subject = `New Contact Form Submission from ${form.name || "Unknown"}`,
	} = options;

	if (!serviceId || !templateId || !publicKey) {
		throw new Error(
			"Missing EmailJS config. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
		);
	}

	const templateParams = {
		to_name: toName,
		from_name: form.name,
		reply_to: form.email,
		company: form.company || "-",
		type: form.type || "general",
		message: form.message,
		subject,
	};

	const res = await emailjs.send(serviceId, templateId, templateParams, {
		publicKey,
	});

	if (res?.status !== 200) {
		throw new Error(res?.text || "EmailJS failed to send.");
	}

	// ✅ record last sent
	lastSent = now;

	return res;
}
