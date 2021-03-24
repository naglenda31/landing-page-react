import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { Card } from "./card";

//create your first component
export function Home() {
	const menuLinks = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#about" },
		{ label: "Services", url: "#services" },
		{ label: "Contact", url: "#contact" }
	];

	const cardContent = [
		{
			imageUrl: "http://placehold.jp/500x325.png",
			title: "Card Title",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl a magna faucibus euismod. Curabitur ac nisl erat. Donec volutpat orci at eleifend aliquet.",
			buttonUrl: "/",
			buttonLabel: "Find Out More!"
		},
		{
			imageUrl: "http://placehold.jp/500x325.png",
			title: "Card Title",
			text:
				"Aliquam semper risus sit amet orci congue maximus. Donec laoreet molestie egestas. Ut vel vehicula odio. Duis id sollicitudin orci, iaculis euismod mauris. Quisque egestas vitae odio vel interdum. ",
			buttonUrl: "/",
			buttonLabel: "Find Out More!"
		},
		{
			imageUrl: "http://placehold.jp/500x325.png",
			title: "Card Title",
			text:
				"Nulla a libero scelerisque, iaculis enim eget, mattis mauris. Phasellus eu eleifend odio, eu faucibus nulla. In vitae tellus vel eros egestas sollicitudin. Ut sit amet tempor ante, at imperdiet felis.",
			buttonUrl: "/",
			buttonLabel: "Find Out More!"
		},
		{
			imageUrl: "http://placehold.jp/500x325.png",
			title: "Card Title",
			text:
				"Vivamus quis libero ante. Mauris lacus orci, malesuada at est eu, mattis bibendum libero. Praesent congue nibh eget orci auctor, quis ornare justo aliquam.",
			buttonUrl: "/",
			buttonLabel: "Find Out More!"
		}
	];

	return (
		<div>
			<Navbar menu={menuLinks} brand="Start Bootstrap" />
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla fermentum lacinia. Aliquam turpis leo, interdum quis lectus et, vestibulum cursus lectus."
				buttonUrl="/"
				buttonLabel="Call to action!"
			/>
			<div className="container">
				<div className="row mb-3">
					<Card cardContent={cardContent} />
				</div>
			</div>

			<Footer copyright="Copyright © Your Website 2021" />
		</div>
	);
}
