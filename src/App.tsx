import { useState } from "react";
import Goals from "./components/Goals.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg"

type Goals = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Goals[]>([])
  function handleAddGoal() {
      setGoals(prevGoals => {
        const newGoals: Goals = {
          id: Math.random(),
          title: 'Learn TS + React',
          description: 'Learn it in depth'
        };
        return [...prevGoals, newGoals];
      })
  }
  return(
  <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
      <button onClick={handleAddGoal}>Button</button>
    </Header>
  <ul>
    {goals.map((goal) =>(
      <li key={goal.id}>
        <Goals title={goal.title}>
          <p>{goal.description}</p>
       </Goals>
      </li>
    ))}
  </ul>
  </main>
  )
}