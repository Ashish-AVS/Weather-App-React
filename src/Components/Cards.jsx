import React from "react";
import Card from "./Card";
import '../App.css'
const Cards = (props) =>{
	return(
		<div style={{width:"auto"}}>
			<div className="card">
				<div className="container">						
					<h2> 
					{props.City}
					<sup className="country">
					{props.country}
					
					</sup>
					</h2>
				<div className="city-temp">
					{Math.round(props.Temp)}
					<sup>°C</sup>
				</div>
				<figure>
			<img src={props.icon} alt={"http://openweathermap.org/img/wn/50n@2x.png"}/>
					<figcaption>{props.description.toUpperCase()}</figcaption>
				</figure>
				</div>
			</div>
		</div>
	);
} 
export default Cards;