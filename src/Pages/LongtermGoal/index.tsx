import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addGoal,
  deleteGoal,
  toggleTaskCompletion,
  Task,
} from "../../store/goalSlice";
import "./index.css";

function LongtermGoal() {
  // Local state for form inputs only
  const [goalName, setGoalName] = useState<string>("");
  const [targetYears, setTargetYears] = useState<number>(1);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  // Redux
  const dispatch = useDispatch();
  const goals = useSelector((state: RootState) => state.goals.goals);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { name: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const handleAddGoal = () => {
    if (goalName.trim() && tasks.length > 0) {
      dispatch(
        addGoal({
          name: goalName,
          years: targetYears,
          tasks: tasks,
        })
      );

      // Reset form
      setGoalName("");
      setTargetYears(1);
      setTasks([]);
    }
  };

  const handleDeleteGoal = (id: string) => {
    dispatch(deleteGoal(id));
  };

  const handleToggleTask = (goalId: string, taskIndex: number) => {
    dispatch(toggleTaskCompletion({ goalId, taskIndex }));
  };

  return (
    <Container className="mt-4">
      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Goal Name</Form.Label>
              <Form.Control
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                placeholder="e.g. Learn Piano"
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Target Years</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={targetYears}
                onChange={(e) => setTargetYears(Number(e.target.value))}
                style={{ width: "100px" }}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Tasks/Subgoals</Form.Label>
              <div className="d-flex">
                <Form.Control
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  placeholder="Add a task"
                />
                <Button variant="secondary" onClick={addTask} className="ms-2">
                  + Add Task
                </Button>
              </div>
              <ListGroup className="mt-2">
                {tasks.map((task, idx) => (
                  <ListGroup.Item key={idx}>{task.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Form.Group>
            <Button className="mt-3" onClick={handleAddGoal}>
              Add Goal
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h4>Long-term Goals</h4>
      {goals.map((goal) => (
        <Card className="mb-3" key={goal.id}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <strong>{goal.name}</strong> ({goal.years} years)
                <ListGroup className="mt-2">
                  {goal.tasks.map((task, tIdx) => (
                    <ListGroup.Item key={tIdx}>
                      <Form.Check
                        type="checkbox"
                        label={task.name}
                        checked={task.completed}
                        onChange={() => handleToggleTask(goal.id, tIdx)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <Button
                variant="outline-danger"
                onClick={() => handleDeleteGoal(goal.id)}
                size="sm"
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default LongtermGoal;
