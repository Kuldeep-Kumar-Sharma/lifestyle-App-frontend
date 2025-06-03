import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import LogEvents from "./Pages/LogEvents";
import LogEmotions from "./Pages/LogEmotions";
import DailyJournal from "./Pages/DailyJournal";
import Plan from "./Pages/Plan";
import LongtermGoal from "./Pages/LongtermGoal";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

function App() {
   const { i18n } = useTranslation();

   const changeLanguage = (lng: string) => {
     i18n.changeLanguage(lng);
   };
  return (
    <>
      <Navbar bg="primary" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Life Style App</Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"></Nav.Link>
              <Nav.Link href="/logevents">Log Events</Nav.Link>
              <Nav.Link href="/logemotions">Log Emotions</Nav.Link>
              <Nav.Link href="/dailyJournal">Daily Journal</Nav.Link>
              <Nav.Link href="/planning">Planning</Nav.Link>
              <Nav.Link href="/longtermGoal">Long Term Goals</Nav.Link>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => changeLanguage("en")}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("es")}>
                  French
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logevents" element={<LogEvents />}></Route>
        <Route path="/logemotions" element={<LogEmotions />}></Route>
        <Route path="/dailyJournal" element={<DailyJournal />}></Route>
        <Route path="/planning" element={<Plan />}></Route>
        <Route path="/longtermGoal" element={<LongtermGoal />}></Route>
      </Routes>
    </>
  );
}

export default App;
