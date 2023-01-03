
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/ContactFile";
import Journal from "./Components/JournalFile";
import Navbar from "./Components/Navbar";
import Ourstory from "./Components/OurStory";
import Shop from "./Components/ShopFile";
const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path="/" element={<Shop/>}/>
         <Route path="/ourstory" element={<Ourstory/>} />
         <Route path="/journal" element={<Journal/>} />
         <Route path="/contact" element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
