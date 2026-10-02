'use client';
import React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Real-Time Interaction',
		icon: Zap,
		description: 'Engage users with smooth, responsive 3D interactions that bring your product to life.',
	},
	{
		title: 'Premium Visuals',
		icon: Cpu,
		description: 'Show every detail with high-quality rendering designed for modern product presentation.',
	},
	{
		title: 'Optimized Performance',
		icon: Fingerprint,
		description: 'Fast, lightweight experience across all devices without sacrificing visual quality.',
	},
	{
		title: 'Fully Customizable',
		icon: Pencil,
		description: 'Easily adapt content, colors, and 3D elements to match your product and brand.',
	},
	{
		title: 'Complete Control',
		icon: Settings2,
		description: 'Fine-tune every interaction and animation for the perfect user experience.',
	},
	{
		title: 'Built for Modern Products',
		icon: Sparkles,
		description: 'Ideal for smart devices, wearables, and next-generation tech brands.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-16 md:py-32 w-full">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold text-white">
						Precision. Performance. <span className="text-amber-500">Innovation.</span>
					</h2>
					<p className="text-neutral-400 mt-4 text-sm tracking-wide text-balance md:text-base">
						A high-performance foundation designed to present your product with clarity, speed, and immersive interaction.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed divide-white/10 border border-dashed border-white/10 sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
