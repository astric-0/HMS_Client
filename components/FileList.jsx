"use client";

import FileContext from "@/contexts/FileContext";
import React, { useContext } from "react";
import { HOME, make } from "@/config";
import { Thumbnail, Modal, Video } from "./utils";
import FileProvider from "@/contexts/FileProvider";
import { classic } from "@/utils";

function FileList({ filenames }) {
	return (
		<FileProvider>
			<div className="col-span-1"></div>
			<FileCards {...{ filenames }} />
			<VideoModal />
		</FileProvider>
	);
}

function VideoModal() {
	const { currFile, closeMovie } = useContext(FileContext);
	return (
		<Modal show={!!currFile} onClose={closeMovie}>
			<Video src={make(currFile, HOME.GET.FILE)} />
		</Modal>
	);
}

function FileCards({ filenames }) {
	const { setCurrFile, setShowVideo } = useContext(FileContext);
	return (
		<div className="col-span-10 vh-full">
			<div className="m-5 flex gap-5 justify-start">
				{filenames.map((filename, index) => (
					<div
						key={index}
						className="w-1/6"
						onClick={() => {
							setCurrFile(filename);
							setShowVideo(true);
						}}
					>
						<Thumbnail
							{...{
								filename,
								src: make(filename, HOME.GET.FILE),
							}}
						/>
						<div className="m-1 overflow-wrap break-words text-center">
							{filename}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default FileList;
