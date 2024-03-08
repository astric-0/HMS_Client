const API_URL = process.env.NEXT_PUBLIC_API_DEV_URL;

if (!API_URL) throw new Error("API URL NOT DEFINED");

const make = (url, base = API_URL) => base + url;

const HOME = {
	GET: {
		FILE: make("/home/file/"),
		FILES: make("/home/files/"),
	},
};

const DEFAULTS = {
	IMAGE: "/default-placeholder.png",
};

Object.freeze(HOME);
Object.freeze(DEFAULTS);

export { HOME, make, DEFAULTS };
