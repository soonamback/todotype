import Goals from "./CourseGoals"
import { type Goals as CGoal } from "../App"
type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({goals, onDeleteGoal }: CourseGoalListProps) {

    return(
        <ul>
         {goals.map((goal) =>(
        <li key={goal.id}>
        <Goals id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
          <p>{goal.description}</p>
       </Goals>
      </li>
    ))}
  </ul>
    )
}