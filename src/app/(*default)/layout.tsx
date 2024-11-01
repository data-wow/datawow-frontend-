import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<div className="bg-primary-gray-100 h-screen flex flex-row p-5 lg:p-10">
					<div className="hidden lg:block lg:w-1/4">
						<Sidebar />
					</div>
					<div className="w-full lg:w-3/4">{children}</div>
				</div>
			</body>
		</html>
	);
}