import React from "react";
import ProductCard from "./ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
var myName = prompt("Veuillez saisir votre nom")
var resultat
resultat = myName.length === 0 ? "Hello there" : "Hello" + myName
console.log(resultat)
function App() {
  return (
    <>
      <h4 style={{ textAlign: "center", color: "blue" }}>CheckPoint React</h4>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ProductCard />
        <p style={{ textAlign: "center", fontSize: "50px" }}>{resultat = myName.length === 0 ? "Hello there" : "Hello " + myName}</p>
        <img src="./lavie.jpg" alt="echec" style={{ width: "10rem", height: "20rem" }} />
      </div>
    </>
  )
}
export default App;
