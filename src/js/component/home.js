import React from "react";
import { MyNav } from "./navbar";
import { MyJumbotron } from "./jumbotron";

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
			<MyJumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla fermentum lacinia. Aliquam turpis leo, interdum quis lectus et, vestibulum cursus lectus."
				buttonURL="/"
				buttonLabel="Call to action!"
			/>
		</div>
	);
}
