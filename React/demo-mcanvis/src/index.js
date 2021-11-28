import React from 'react';
import ReactDOM from 'react-dom';

// var MainContent = () => 
//     <div>
//         <h1>I'm building a react app</h1>
//     </div>

// ReactDOM.render(<div>
//                     <MainContent/>
//                 </div>, document.getElementById("root") )

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)