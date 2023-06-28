import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

// imorting all component
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import Notfound from "./components/Notfound";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          {/* by using the link you go to perticular page 
           but using navlink we add one active class on 
           tht perticular element to track currently which component  */}
          {/* <li>
            <Link to={"/"}>Home</Link>
          </li> */}

          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/support"}>Support</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/labs"}>Labs</NavLink>
          </li>
      
        </ul>
      </nav>

      {/* multiple Routes */}
      <Routes>
        {/* single Route */}
        {/* 
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />

        {it handle other than above}
        <Route path="*" element={<Notfound />} /> */}


        {/* parent and child in routs  */}

        <Route path="/" element={<Main></Main>}>

        {/* here home is default path  */}
        <Route index element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<Notfound />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
