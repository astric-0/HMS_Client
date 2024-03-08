"use client";

import { VideoThumbnailGenerator } from "browser-video-thumbnail-generator";
import React, { useEffect, useState, useRef } from "react";
import { DEFAULTS } from "@/config";
import Image from "next/image";

function Thumbnail({ src, filename = "thumbnail" }) {
	const [thumbnail, setThumbnail] = useState({});
	const imageRef = useRef(null);

	useEffect(() => {
		if (src) {
			(async () => {
				const tg = new VideoThumbnailGenerator(src);
				try {
					setThumbnail(await tg.getThumbnail());
				} catch (error) {
					console.error(error);
				}
			})();
		}
	}, []);

	useEffect(() => {
		if (imageRef.current?.load) imageRef.current.load();
	}, [thumbnail]);

	return (
		<div className="h-80 cursor-pointer ease-in-out duration-200 rounded-lg outline outline-1 outline-offset-2 hover:text-yellow-300 hover:outline-yellow-300 overflow-hidden">
			<Image
				className="h-full object-cover transition-transform outline-white ease-linear hover:scale-110"
				src={thumbnail.thumbnail ?? DEFAULTS.IMAGE}
				ref={imageRef}
				width={thumbnail.width ?? 400}
				height={thumbnail.height ?? 400}
				alt={filename}
			/>
		</div>
	);
}

export default Thumbnail;
