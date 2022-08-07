import clsx from "clsx";
import { List, LogoWithText, navItems } from "..";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { ImReddit } from "react-icons/im";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import React from "react";

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
		<div className={clsx("grid flex-grow", "gap-6", "grid-cols-4")}>
			<List className="col-span-2  md:col-span-1 flex flex-col gap-5">
				{navItems.map((i) => (
					<a>{i}</a>
				))}
			</List>
			<List className="col-span-2  md:col-span-1 flex flex-col gap-5">
				{services.map((i) => (
					<a>{i}</a>
				))}
			</List>
			<List className="col-span-4 md:col-span-1 flex flex-col gap-5">
				{extra.map((i) => (
					<a>{i}</a>
				))}
			</List>
			{/* <div></div> */}
		</div>
	);
}

function IconWrapper({ children }: React.ComponentPropsWithoutRef<"div">) {
	return <div className="border-2 rounded-full p-3 grid place-content-center">{children}</div>;
}

function Social() {
	return (
		<List className="flex gap-3 pt-10">
			<IconWrapper>
				<RiFacebookFill size={30} />
			</IconWrapper>
			<IconWrapper>
				<BsInstagram size={30} />
			</IconWrapper>
			<IconWrapper>
				<BsLinkedin size={30} />
			</IconWrapper>
			<IconWrapper>
				<AiOutlineTwitter size={30} />
			</IconWrapper>
			<IconWrapper>
				<ImReddit size={30} />
			</IconWrapper>
			<IconWrapper>
				<MdAlternateEmail size={30} />
			</IconWrapper>
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
