import clsx from "clsx";
import { List, LogoWithText, navItems } from "..";

const services = [
	"Compare Services",
	"Investment Products",
	"Account & Plans",
	"Rollovers",
	"Transfers",
];

export default function Footer() {
	return (
		<footer className={clsx("container")}>
			<div className={clsx("flex", "gap-2", "justify-between", "py-10")}>
				<LogoWithText />
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
				<div></div>
			</div>
			<h2 className="text-center p-10">© ANP 2022. All rights reserved.</h2>
		</footer>
	);
}
