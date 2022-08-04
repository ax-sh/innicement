import clsx from "clsx";
import { List, LogoWithText, navItems } from "..";

const services = [
	"Compare Services",
	"Investment Products",
	"Account & Plans",
	"Rollovers",
	"Transfers",
];

const extra = ["Why Innicement", "Fees & commissions", "Benefits", "Account conveniences"];

function FooterLinks() {
	return (
		<div className={clsx("flex flex-grow", "gap-2", "justify-between")}>
			<List className="flex flex-col gap-5">
				{navItems.map((i) => (
					<a>{i}</a>
				))}
			</List>
			<List className="flex flex-col gap-5">
				{services.map((i) => (
					<a>{i}</a>
				))}
			</List>
			<List className="flex flex-col gap-5">
				{extra.map((i) => (
					<a>{i}</a>
				))}
			</List>
			<div></div>
		</div>
	);
}

function Social() {
	return (
		<List className="flex gap-3 pt-10">
			<div className="border-2 rounded-full h-15 w-15" />
			<div className="border-2 rounded-full h-15 w-15" />
			<div className="border-2 rounded-full h-15 w-15" />
			<div className="border-2 rounded-full h-15 w-15" />
			<div className="border-2 rounded-full h-15 w-15" />
			<div className="border-2 rounded-full h-15 w-15" />
		</List>
	);
}

export default function Footer() {
	return (
		<footer>
			<div
				className={clsx("container", "flex flex-col md:flex-row", "items-start", "py-10", "gap-5")}
			>
				<LogoWithText />
				<div className="flex flex-col flex-grow">
					<FooterLinks />
					<Social />
				</div>
			</div>
			<h2 className="text-center p-10">© ANP 2022. All rights reserved.</h2>
		</footer>
	);
}
