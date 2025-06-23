import Link from "next/link";
import { Copy, Edit3, Calendar, ShieldCheck } from "lucide-react";

import { Card } from "@/components/ui/card";

import LeadDetails from '@/components/leadDetails';

const feature = [
	{
		title: "Repurpose all content types",
		description:
			"Turn blogs, YouTube videos, and Facebook Lives into ready-to-post content for multiple platforms.",
		icon: <Copy className="size-6" />,
	},
	{
		title: "Platform-aware writing",
		description:
			"Fiuzar adapts your content to suit LinkedIn, Instagram, YouTube Shorts, and more.",
		icon: <Edit3 className="size-6" />,
	},
	{
		title: "Schedule content automatically",
		description:
			"Plan and publish content consistently without manual uploads.",
		icon: <Calendar className="size-6" />,
	},
	{
		title: "Your content, your control",
		description:
			"You are always in control of tone, structure and final edits. No over AI generated stuffs, Fiuzar is designed to be a smart helper to you",
		icon: <ShieldCheck className="size-6" />,
	},
];

export default function Home() {
	return (

		<div className="container mx-auto md:grid grid-cols-2 gap-4 py-10">

			<div className="md:flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center px-6 pt-8 hidden">
				<h2 className="text-3xl font-medium md:text-5xl">
					Smarter content repurposing for creators.
				</h2>

				<div className="mx-auto mt-4 grid max-w-5xl gap-6 lg:grid-cols-2">
					{feature.map((feature, idx) => (
						<div
							className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
							key={idx}
						>
							<span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
								{feature.icon}
							</span>
							<div>
								<h3 className="text-lg font-medium md:text-2xl">
									{feature.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<Card className="px-3 mx-auto max-w-96">

					<h2 className="text-3xl font-bold mb-2 text-green-900">Join our journey and get early access</h2>
					<p className="text-gray-600">Be one of the first to try Fiuzar and receive our free repurposing checklist instantly.</p>

					<div className="flex -space-x-3 mb-4">
						{[75, 76, 77, 78, 79].map((id) => (
							// eslint-disable-next-line @next/next/no-img-element
							<img key={id}
								src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'women' : 'men'}/${id}.jpg`}
								alt={`User ${id}`}
								className="rounded-full border-2 border-white object-cover w-10"
							/>
						))}
					</div>

					<LeadDetails />

					<p className="text-xs text-center mt-2">
						By clicking “Join”, you agree to our <Link href="#" className="underline">Privacy Policy</Link> and <Link href="#" className="underline">Terms of Use</Link>.
					</p>
				</Card>
			</div>


			<div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center px-6 pt-8 md:hidden">
				<h2 className="text-3xl font-medium md:text-5xl">
					Smarter content repurposing for creators.
				</h2>

				<div className="mx-auto mt-4 grid max-w-5xl gap-6 lg:grid-cols-2">
					{feature.map((feature, idx) => (
						<div
							className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
							key={idx}
						>
							<span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
								{feature.icon}
							</span>
							<div>
								<h3 className="text-lg font-medium md:text-2xl">
									{feature.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>

	);
}
