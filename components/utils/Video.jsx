"use client";
import React from "react";
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";

function Video({ src }) {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) videoRef.current.load();
	}, [src]);

	if (!src) return <>src Not Given</>;

	return (
		<>
			<h1>{src}</h1>
			<ReactPlayer className="w-full" controls url={src} />
		</>
	);
}

export default Video;
