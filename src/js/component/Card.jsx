import React from "react";
import PropTypes from "prop-types";
import { cartas } from "./rawData";




function Card (props)  {
    return (<div className="card" style={{width: '18rem'}} id={props.id}>
        <img src={props.img} class="card-img-top" style={{width:"100%", height:"200px",objectFit:"cover", position: "top"}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn"
         style={{backgroundColor:"darkorange",color:"white"}} >Test Drive</a>
        </div>
      </div>)
}

export default Card;



Card.propTypes = {
  
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  


}