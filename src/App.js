import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import AccordionExample from './components/AccordionExample/AccordionExample';
import TablistExample from './components/TablistExample/TablistExample';
import SearchExample from './components/SearchExample/SearchExample';
import RadioGroupExample from './components/RadioGroupExample/RadioGroupExample';
import SelectExample from './components/SelectExample/SelectExample';
//import LiveRegion from './components/LiveRegion/LiveRegion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import {useSelector} from 'react-redux';

function App() {
  const loc = useSelector(state => state.location.value);
  React.useEffect(() => {
    document.title = loc;
  }, [loc]);
  return (
    <React.Fragment>
      <Router>
        <nav>
          <ul>
            <li className="home">
              <Link to="/">           
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>Home</title>
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/accordion">
                Accordion
              </Link>
            </li>
            <li>
              <Link to="/tablist">
                Tablist
              </Link>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
            <li>
              <Link to="/radio">
                Radio
              </Link>
            </li>
            <li>
              <Link to="/select">
                Select
              </Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/accordion" element={<AccordionExample/>}/>
          <Route path="/tablist" element={<TablistExample/>}/>
          <Route path="/search" element={<SearchExample/>}/>
          <Route path="/radio" element={<RadioGroupExample/>}/>
          <Route path="/select" element={<SelectExample/>}/>
        </Routes>
      </Router>
      {/*<LiveRegion loc={loc}/>*/}
    </React.Fragment>
  );
}

export default App;
