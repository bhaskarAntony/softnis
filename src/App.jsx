import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Eclass from './components/Eclass';
import HealthcareDataEnrichment from './HealthcareDataEnrichment';
import Etim from './components/Etim';
import Staff from './components/Staff';
import Unsp from './components/Unsp';
import Cpv from './components/Cpv';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs';
import Home from './Home';
import Header from './components/Header';
import ContactUs from './components/ContactUs';




function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<HealthcareDataEnrichment />} />
        <Route path="/eclass" element={<Eclass />} />
        <Route path="/etim" element={<Etim/>}/>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/unspc' element={<Unsp/>}/>
        <Route path='/cpv' element={<Cpv/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
