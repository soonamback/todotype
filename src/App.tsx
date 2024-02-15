import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg"
import NewGoal from "./components/NewGoal.tsx";

export type Goals = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Goals[]>([])
  function handleAddGoal(goal: string, summary: string) {
      setGoals(prevGoals => {
        const newGoals: Goals = {
          id: Math.random(),
          title: goal,
          description: summary
        };
        return [...prevGoals, newGoals];
      })
  }
  function handleDeleteGoal(id:number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id)) 
  }
  return(
  <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </Header>
  
  </main>
  )
}