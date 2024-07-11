import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/navbar";

import Contact from "./Components/Contact/contact";
import Elements from "./Components/More/Elements";
import LeftSidebar from "./Components/More/LeftSidebar";
import RightSidebar from "./Components/More/RightSidebar";
import Typography from "./Components/More/Typography";
import Blog from "./Components/AboutUs/Blog/Blog";
import Galleries from "./Components/AboutUs/Galleries/galleries";
import Gallery1 from "./Components/AboutUs/Galleries/Gallery1";
import Gallery2 from "./Components/AboutUs/Galleries/Gallery2";
import Gallery3 from "./Components/AboutUs/Galleries/Gallery3";
import Gallery4 from "./Components/AboutUs/Galleries/Gallery4";
import Gallery5 from "./Components/AboutUs/Galleries/Gallery5";
import Gallery6 from "./Components/AboutUs/Galleries/Gallery6";
import Team from "./Components/AboutUs/OurTeam/Team";
import Vivien from './Components/AboutUs/OurTeam/Vivien'
import Rudy from "./Components/AboutUs/OurTeam/Rudy";
import Matthew from "./Components/AboutUs/OurTeam/Matthew";
import OurServices from "./Components/OurServices/OurServices";
import All from "./Components/OurServices/All";
import Cosmetic from "./Components/OurServices/Cosmetic"
import Hairdressing from "./Components/OurServices/Hairdressing"
import Barber from "./Components/OurServices/Barber"
import Massages from "./Components/OurServices/Massages"
import BodyTreatments from "./Components/OurServices/BodyTreatment"
import Aromatherapy from "./Components/OurServices/Aromatherapy"
import Home from "./Components/Home/Home";
import Testimonials from "./Components/AboutUs/Testimonials/Testimonials";
import Faq from "./Components/AboutUs/Faq/Faq";
import Spa from "./Components/Home/Spa";
import Massage from "./Components/Home/Massage";
import HairTreatment from "./Components/Home/HairTreatment";
import FaqDetails from "./Components/AboutUs/Faq/FaqDetails";
import Bridal from "./Components/OurServices/Bridal";

const App = () => {
  return (
    <div className="lg:flex lg:h-[100vh] lg:overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <div className="lg:overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more/typography" element={<Typography />} />
            <Route path="/more/elements" element={<Elements />} />
            <Route path="/more/leftsidebar" element={<LeftSidebar />} />
            <Route path="/more/rightsidebar" element={<RightSidebar />} />
            <Route path="/aboutUs/blog" element={<Blog />} />
            <Route path="/aboutUs/galleries" element={<Galleries />} />
            <Route path="/aboutUs/galleries/gallery1" element={<Gallery1 />} />
            <Route path="/aboutUs/galleries/gallery2" element={<Gallery2 />} />
            <Route path="/aboutUs/galleries/gallery3" element={<Gallery3 />} />
            <Route path="/aboutUs/galleries/gallery4" element={<Gallery4 />} />
            <Route path="/aboutUs/galleries/gallery5" element={<Gallery5 />} />
            <Route path="/aboutUs/galleries/gallery6" element={<Gallery6 />} />
            <Route path="/aboutUs/ourteam" element={<Team />} />
            <Route path="/aboutUs/ourteam/vivien" element={<Vivien />} />
            <Route path="/aboutUs/ourteam/rudy" element={<Rudy />} />
            <Route path="/aboutUs/ourteam/matthew" element={<Matthew />} />
            <Route path="/ourServices/all" element={<OurServices />} />
            <Route path="/ourServices/all" element={<All />} />
            <Route path="/ourServices/cosmetics" element={<Cosmetic />}  />
            <Route path="/ourServices/hairdressing" element={<Hairdressing />}  />
            <Route path="/ourServices/barber" element={<Barber />}  />
            <Route path="/ourServices/massages" element={<Massages />}  />
            <Route path="/ourServices/bodyTreatments" element={<BodyTreatments />}  />
            <Route path="/ourServices/aromatherapy" element={<Aromatherapy />}  />
            <Route path="/ourServices/bridal" element={<Bridal />} />
            <Route path="/aboutUs/testimonials" element={<Testimonials />} />
            <Route path="/aboutUs/faq" element={<Faq />} />
            <Route path="/latestblogpostSpa" element={<Spa />} />
            <Route path="/latestblogpostMassage" element={<Massage />} />
            <Route path="/latestblogpostHair" element={<HairTreatment />} />
            <Route path="/faq/:faqId" element={<FaqDetails />}/>
          </Routes> 
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
