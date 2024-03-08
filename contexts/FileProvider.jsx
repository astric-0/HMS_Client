"use client";

import FileContext from "./FileContext";
import { useState, useCallback } from "react";

export default function FileProvider({ children, init }) {
	const [currFile, setCurrFile] = useState(init ?? "");
	const [showVideo, setShowVideo] = useState(false);

	const closeMovie = useCallback(() => {
		setCurrFile("");
	}, []);

	const toggleShowVideo = useCallback(() => {
		setShowVideo((curr) => !curr);
	}, [showVideo]);

	return (
		<FileContext.Provider
			value={{
				currFile,
				setCurrFile,
				closeMovie,
				showVideo,
				setShowVideo,
				toggleShowVideo,
			}}
		>
			{children}
		</FileContext.Provider>
	);
}
