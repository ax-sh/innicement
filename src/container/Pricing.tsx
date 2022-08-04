import clsx from "clsx";
import { SubHeading } from "../components";
import { NavButton } from "../components/Nav";

function PricingItem({
	title,
	children,
	premium,
}: React.ComponentPropsWithoutRef<"div"> & { premium?: boolean }) {
	return (
		<div className={clsx(premium && "i-bg-gray premium-price")}>
			<h4 className="price-label text-3xl border-3 border-black px-8 py-2">
				<div>Innicement -</div>
				{title}
			</h4>
			<div className="px-4 py-8">
				<p>
					Personalized investing with insights, guidance and tools to confidently put your investing
					ideas into action
				</p>
				<div className="my-8">
					<h3 className="price text-6xl">$350</h3>
					<span>/ Minimum Investment</span>
				</div>
				<NavButton>Try It For Free</NavButton>
			</div>
		</div>
	);
}

function PricingWrapper() {
	return (
		<div className="flex flex-col md:flex-row gap-8">
			<PricingItem title="Self‑Directed" />
			<PricingItem title="Guided Investing" premium />
			<PricingItem title="Guided Investing" />
		</div>
	);
}

export default function Pricing() {
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
