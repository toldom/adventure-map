import type { Metadata } from "next";
import "./globals.scss";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Tofino Adventure Map",
	description: "Tofino adventure map website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
