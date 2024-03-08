"use client";

import { usePathname } from "next/navigation";
import {
	FilmIcon,
	MusicalNoteIcon,
	PlayPauseIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { classic } from "@/utils";
import { Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import FileContext from "@/contexts/FileContext";
import FileProvider from "@/contexts/FileProvider";

function NavVideoIcon({ icon: Icon, active }) {
	const { toggleShowVideo } = useContext(FileContext);
	return (
		<span
			onClick={toggleShowVideo}
			className={classic(
				"cursor-pointer m-2 hover:scale-110 duration-200 ease-linear aspect-square w-16 p-1 flex flex-col items-center",
				{ "border-b-2 text-indigo-500 border-indigo-500": active }
			)}
		>
			<Icon className="h-10" />
		</span>
	);
}

export function NavIcon({ label, icon: Icon, active, href }) {
	return (
		<Link
			href={href}
			className={classic(
				"cursor-pointer m-2 hover:scale-110 duration-200 ease-linear aspect-square w-16 p-1 flex flex-col items-center",
				{ "border-b-2 text-indigo-500 border-indigo-500": active }
			)}
		>
			<Icon className="h-10" />
			<span className="text-lg">{label}</span>
		</Link>
	);
}

function Nav() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(true);

	const icons = [
		{ label: "", icon: FilmIcon, href: "/" },
		{ label: "", icon: MusicalNoteIcon, href: "/music" },
	];

	return (
		<div
			className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer min-w-20 min-h-20"
			onMouseOver={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<h1 className="text-white">{isOpen}</h1>
			<Transition appear show={isOpen} as={Fragment}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-0"
					enterTo="opacity-100 scale-100"
					leave="ease-linear duration-1000"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-0"
				>
					<div className="flex justify-end p-1">
						{icons.map((val, index) => (
							<NavIcon
								key={index}
								{...val}
								active={val.href == pathname}
							/>
						))}
						<FileProvider>
							<NavVideoIcon icon={PlayPauseIcon}></NavVideoIcon>
						</FileProvider>
					</div>
				</Transition.Child>
			</Transition>
		</div>
	);
}

export default Nav;
