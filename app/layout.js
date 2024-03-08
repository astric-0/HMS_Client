import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/partials";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "HMS",
	description: "Home Media Server",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sourceCodePro.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
