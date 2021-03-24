import React from "react";
import { MyNav } from "./navbar";

//create your first component
export function Home() {
	const menuLinks = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#about" },
		{ label: "Services", url: "#services" },
		{ label: "Contact", url: "#contact" }
	];
	return (
		<div>
			<MyNav menu={menuLinks} brand="Start Bootstrap" />
		</div>
	);
}
