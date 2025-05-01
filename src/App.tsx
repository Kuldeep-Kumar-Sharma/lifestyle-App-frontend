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

function App() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/logevents" element={<LogEvents />}></Route>
        <Route path="/logemotions" element={<LogEmotions />}></Route>
        <Route path="/dailyJournal" element={<DailyJournal />}></Route>
        <Route path="/planning" element={<Plan />}></Route>
        <Route path="/longtermGoal" element={<LongtermGoal />}></Route>
      </Routes>
      <Container>
        <Navbar.Brand href="#home">Life Style App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Route path="/" element={<App />}>
              Home
            </Route>
          </Nav.Link>
          <Nav.Link href="#logevents">Log Events</Nav.Link>
          <Nav.Link href="#logemotions">Log Emotions</Nav.Link>
          <Nav.Link href="#dailyJournal">Daily Journal</Nav.Link>
          <Nav.Link href="#planning">Planning</Nav.Link>
          <Nav.Link href="#longtermGoal">Long Term Goals</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
