import clsx from "clsx";
import React from "react";
import "./App.scss";
import { SubHeading, Summary } from "./components";
import Layout from "./components/Layout";
import { GetStartedButton, NavButton } from "./components/Nav";
import Hero from "./container/Hero";
import Pricing from "./container/Pricing";

function Info() {
	return (
		<section id="info" className="min-h-screen grid grid-cols-12 gap-8">
			<div className="col-span-3">
				<img src="http://source.unsplash.com/random" />
			</div>
			<div className="col-span-6">
				<SubHeading>Everything you need to invest the way you want</SubHeading>
				<Summary title="Investing ideas">
					<p>
						Innicement has the guidance and tools to confidently pursue your investing goals and
						build your portfolio.
					</p>
				</Summary>
				<Summary title="$0 trades">lorem</Summary>
				<Summary title="More rewards">lorem</Summary>
				<Summary title="Investing & connected">lorem</Summary>
			</div>
			<div className="col-span-3"></div>
		</section>
	);
}

function ComparisonProgress({
	label,
	width,
	cost,
}: {
	width: string;
	label: string;
	cost: string;
}) {
	return (
		<div className="border-3 text-white w-full">
			<div
				className={clsx(
					width,
					"flex justify-between items-center bg-black gap-8 p-2 overflow-hidden"
				)}
			>
				<span className="text-3xl">{label}</span>
				<img className="flex-grow h-10 object-stretch" src="/compare_progress_arrow.svg" />
				<span className="text-green text-3xl">{cost}</span>
			</div>
		</div>
	);
}

function Comparison() {
	return (
		<section className="min-h-screen flex flex-col gap-10">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<SubHeading>Lower costs can add up to big savings</SubHeading>
				<img src="/lower_cost.svg" />
			</div>
			<div className="flex flex-col gap-5 overflow-hidden">
				<ComparisonProgress label={"Innicement"} width={"w-8/12"} cost={"$87,980"} />
				<ComparisonProgress width={"w-7/12"} label={"Average InvestmentFirm"} cost={"$77,980"} />
			</div>
		</section>
	);
}

function Circle({
	children,
	className,
	rotate,
	...props
}: React.ComponentPropsWithoutRef<"div"> & { rotate?: number }) {
	return (
		<div
			className={clsx(className, "solar rounded-full border-2 border-black h-full w-full p-9")}
			style={{ transform: `rotateX(${rotate}deg)` }}
			{...props}
		>
			{children}
		</div>
	);
}

function Circles() {
	return (
		<div className="w-[60vh] h-[60vh] flex justify-center m-auto" style={{ perspective: "500px" }}>
			<Circle className={"rotateX-90"} rotate={70}>
				<Circle>
					<Circle rotate={0}></Circle>
				</Circle>
			</Circle>
		</div>
	);
}

function App() {
	return (
		<Layout className="container flex flex-col gap-10">
			<Hero />
			<Info />
			<Pricing />
			<Comparison />

			<section className="min-h-screen grid grid-cols-2 gap-4">
				<div className="grid grid-cols-2 gap-4">
					<img src="http://source.unsplash.com/random" />
					<img src="http://source.unsplash.com/random" />
				</div>
				<div className="flex flex-col gap-8">
					<SubHeading>Innicement Digital Advisor</SubHeading>
					<p>
						For those who prefer the convenience of a robo-advisor, Innicement Digital Advisor will
						build a customized portfolio and continue to optimize your investments over time. You
						get the benefit of Innicement time-tested philosophy delivered on a modern, all-digital
						platform that can evolve with your needs.
					</p>
					<NavButton>Learn More</NavButton>
				</div>
			</section>
			<section className="min-h-screen">
				<div className="w-1/2 flex flex-col gap-5">
					<SubHeading>Preferred Rewards</SubHeading>
					<p>
						Investment balances can help you earn Preferred Rewards benefits and pricing discounts.
						Members enjoy program benefits including credit card rewards bonuses, discounts on home
						and auto loans, monthly account maintenance fee waivers, and more.
					</p>
					<NavButton>Learn More</NavButton>
				</div>
				<Circles />
			</section>
			<section className="get-started min-h-screen">
				<SubHeading>Get up to when you invest in Innicement</SubHeading>
			</section>
		</Layout>
	);
}

export default App;
