import clsx from "clsx";
import React from "react";
import "./App.scss";
import { SubHeading } from "./components";
import Layout from "./components/Layout";
import { GetStartedButton, NavButton } from "./components/Nav";
import Hero from "./container/Hero";

function Summary({ title, children }: React.ComponentPropsWithoutRef<"details">) {
	return (
		<details className="">
			<summary className="cursor-pointer text-3xl">{title}</summary>
			<div className="flex justify-end text-right children:w-6/12">{children}</div>
		</details>
	);
}

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

function PricingItem({
	title,
	children,
	premium,
}: React.ComponentPropsWithoutRef<"div"> & { premium?: boolean }) {
	return (
		<div className={clsx(premium && "i-bg-gray premium-price")}>
			<h4 className="price-label text-2xl border-3 border-black px-1 py-2">{title}</h4>
			<div className="px-4 py-8">
				<p>
					Personalized investing with insights, guidance and tools to confidently put your investing
					ideas into action
				</p>
				<h3 className="price text-6xl bg-aaa my-8">$350</h3>
				<span className="bg-blue">/ Minimum Investment</span>
				<NavButton>Try It For Free</NavButton>
			</div>
		</div>
	);
}

function PricingWrapper() {
	return (
		<div className="flex gap-8">
			<PricingItem title="Innicement - Self‑Directed" />
			<PricingItem title="Innicement - Guided Investing" premium />
			<PricingItem title="Innicement - Guided Investing" />
		</div>
	);
}

function Pricing() {
	return (
		<section id="pricing" className="min-h-screen bg-light-600 p-8 flex flex-col gap-8">
			<div className="flex justify-between items-center gap-8">
				<SubHeading>Invest your way</SubHeading>
				<div className="h-1 flex-grow bg-black " />
				<NavButton>See Details</NavButton>
			</div>
			<PricingWrapper />
		</section>
	);
}

function App() {
	return (
		<Layout className="container flex flex-col gap-10">
			<Hero />
			<Info />
			<Pricing />
			<section className="min-h-screen bg-red">
				<SubHeading>Lower costs can add up to big savings</SubHeading>
			</section>
			<section className="min-h-screen">
				<div>
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
				<SubHeading>Preferred Rewards</SubHeading>
				<p>
					Investment balances can help you earn Preferred Rewards benefits and pricing discounts.
					Members enjoy program benefits including credit card rewards bonuses, discounts on home
					and auto loans, monthly account maintenance fee waivers, and more.
					<button>Learn More</button>
				</p>
			</section>
			<section className="get-started min-h-screen">
				<SubHeading>Get up to when you invest in Innicement</SubHeading>
			</section>
		</Layout>
	);
}

export default App;
