import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
// Update the import path if your store file is named 'store.ts' and located in 'src/store'
import { RootState } from "../../store";
import { addDayPlan } from "../../store/planSlice";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

function Plan() {
  const dispatch = useDispatch();
  const plans = useSelector((state: RootState) => state.plan.plans);
  const [mainGoal, setMainGoal] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainGoal.trim()) {
      setError("Main goal is required.");
      setSuccess("");
      return;
    }
    dispatch(
      addDayPlan({
        id: uuidv4(),
        date,
        mainGoal,
        tasks,
        notes,
      })
    );
    setMainGoal("");
    setTasks([]);
    setNotes("");
    setError("");
    setSuccess("Day plan saved!");
  };

  return (
    <Container className="mt-4">
      <h1>Day Plan</h1>
      <Tabs defaultActiveKey="day" id="plan-tabs" className="mb-3">
        <Tab eventKey="day" title="Day">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Main Goal</Form.Label>
              <Form.Control
                value={mainGoal}
                onChange={(e) => setMainGoal(e.target.value)}
                placeholder="What's your main goal for today?"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tasks</Form.Label>
              <div className="d-flex mb-2">
                <Form.Control
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  placeholder="Add a task"
                />
                <Button
                  variant="secondary"
                  onClick={handleAddTask}
                  className="ms-2"
                >
                  Add
                </Button>
              </div>
              <ul>
                {tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any notes for today?"
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Button type="submit" variant="primary">
              Save Day Plan
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="week" title="Week">
          <h2>This Week's Plans</h2>
          {plans.length === 0 && <div>No plans yet.</div>}
          {plans
            .filter((plan: { date: string | number | Date; }) => {
              const planDate = new Date(plan.date);
              const now = new Date();
              const weekStart = new Date(
                now.setDate(now.getDate() - now.getDay())
              );
              const weekEnd = new Date(weekStart);
              weekEnd.setDate(weekStart.getDate() + 6);
              return planDate >= weekStart && planDate <= weekEnd;
            })
            .map((plan: { id: React.Key | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; mainGoal: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; tasks: any[]; notes: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }) => (
              <div key={plan.id} className="mb-3 p-2 border rounded bg-light">
                <strong>{plan.date}</strong> - <span>{plan.mainGoal}</span>
                <ul>
                  {plan.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
                <div>{plan.notes}</div>
              </div>
            ))}
        </Tab>
        <Tab eventKey="month" title="Month">
          <h2>This Month's Plans</h2>
          {plans.length === 0 && <div>No plans yet.</div>}
          {plans
            .filter((plan: { date: string | number | Date; }) => {
              const planDate = new Date(plan.date);
              const now = new Date();
              return (
                planDate.getFullYear() === now.getFullYear() &&
                planDate.getMonth() === now.getMonth()
              );
            })
            .map((plan: { id: React.Key | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; mainGoal: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; tasks: any[]; notes: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }) => (
              <div key={plan.id} className="mb-3 p-2 border rounded bg-light">
                <strong>{plan.date}</strong> - <span>{plan.mainGoal}</span>
                <ul>
                  {plan.tasks.map((task: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined, idx: React.Key | null | undefined) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
                <div>{plan.notes}</div>
              </div>
            ))}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Plan;
