import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

function Header(){
   return(
      <nav className="nav">
    <img src="./logo19.png" alt="logo" className="nav-logo" />
    <ul className="nav-items">
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>

   )
}
function Footer(){
   return(
      <footer>
      <small> @2021 zirool decelopment . all rights reservel.</small>
   </footer>


   )
}
function Maincontinent(){
   return(
      <div>
         <h1>hello i am very excited doing these things</h1>
          <ol>
         <li>hi </li>
         <li>about</li>
         <li>contact</li>
         <li>portfolio</li>
      </ol>


      </div>


   )
}






function Page() {
   return(
      <div>
      <Header/>   
     <Maincontinent/>
     <Footer/>
      </div>
   )
}
ReactDOM.render(<Page/>,document.getElementById("root"))