import React from 'react'

const pageStyle = {
  backgroundColor: "#7F00FF"
}

const layOut = {
  display: "flex"
}

const frameStyle = {
  height: "250px",
  marginRight: "30px"
}

const textStyle = {
  lineHeight: "50%",
  textAlign: "left"
}

const nameStyle = {
  
}

const typeStyle = {
  color: "green"
}

const addressStyle = {
  lineHeight: "100%"
}

const phoneStyle = {}

const numberStyle = {
  color: "blue"
}

const buttonStyle = {
  textAlign: "right",
  height: "20px",
  backgroundColor: "#7F00FF",
  border: "none",
  fontSize: "50px"
}

const lineStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "550px"
}

function BeerCard(props) {
  return (
    <li style={pageStyle}>
      <div style={layOut}><iframe style={frameStyle} src={props.website_url} ></iframe><div style={textStyle}><h3 style={nameStyle}>{props.name}: <span style={typeStyle}>{props.brewery_type}</span></h3> <h4 style={addressStyle}>{props.address_1} <br></br> {props.city}, {props.state} {props.postal_code} </h4> 
      
      <div style={lineStyle}><p style={phoneStyle}>phone:  <span style={numberStyle}>{props.phone}</span></p> </div></div><button onClick={props.handleClick} style={buttonStyle}>  {props.buttonText}</button> </div>
    </li>
  )
}

export default BeerCard