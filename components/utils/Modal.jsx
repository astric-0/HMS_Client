"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Modal({ children, show, onClose }) {
	return (
		<Transition appear show={show} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</Transition.Child>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full w-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel>{children}</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default Modal;
