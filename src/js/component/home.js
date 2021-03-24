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
	return (
		<div>
			<Navbar menu={menuLinks} brand="Start Bootstrap" />
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla fermentum lacinia. Aliquam turpis leo, interdum quis lectus et, vestibulum cursus lectus."
				buttonUrl="/"
				buttonLabel="Call to action!"
			/>
			<Card
				imageUrl="http://placehold.jp/500x325.png"
				title="Card title"
				cardText="Etiam pharetra venenatis diam. Proin orci ante, feugiat non feugiat sit amet, rhoncus sed nulla. Ut facilisis quis quam quis molestie. Etiam gravida laoreet porttitor."
				cardButtonUrl="/"
				cardButtonLabel="Find Out More!"
			/>

			<Card
				imageUrl="http://placehold.jp/500x325.png"
				title="Card title"
				cardText="Etiam pharetra venenatis diam. Proin orci ante, feugiat non feugiat sit amet, rhoncus sed nulla. Ut facilisis quis quam quis molestie. Etiam gravida laoreet porttitor."
				cardButtonUrl="/"
				cardButtonLabel="Find Out More!"
			/>

			<Card
				imageUrl="http://placehold.jp/500x325.png"
				title="Card title"
				cardText="Etiam pharetra venenatis diam. Proin orci ante, feugiat non feugiat sit amet, rhoncus sed nulla. Ut facilisis quis quam quis molestie. Etiam gravida laoreet porttitor."
				cardButtonUrl="/"
				cardButtonLabel="Find Out More!"
			/>

			<Card
				imageUrl="http://placehold.jp/500x325.png"
				title="Card title"
				cardText="Etiam pharetra venenatis diam. Proin orci ante, feugiat non feugiat sit amet, rhoncus sed nulla. Ut facilisis quis quam quis molestie. Etiam gravida laoreet porttitor."
				cardButtonUrl="/"
				cardButtonLabel="Find Out More!"
			/>
			<Footer copyright="Copyright © Your Website 2021" />
		</div>
	);
}
