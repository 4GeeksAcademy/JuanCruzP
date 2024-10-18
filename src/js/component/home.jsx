import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


import NavBar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx"
import { cartas } from "./rawData.jsx";
//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<div className="container my-5 pt-4 ">
			<Jumbotron/>
			<div className="justify-content-between d-flex">
			{cartas.map(carta =>(
				<Card 
				key={carta.id}
				title={carta.title} 
				text={carta.text} 
				img={carta.img}/>
			))}
			
			</div>
		</div>
		</>
	);
};

export default Home;
