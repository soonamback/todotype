import Goals from "./Goals"
import { type Goals as CGoal } from "../App"
type CourseGoalListProps = {
    goals: CGoal[]
}

export default function CourseGoalList({goals}: CourseGoalListProps) {

    return(
        <ul>
         {goals.map((goal) =>(
        <li key={goal.id}>
        <Goals title={goal.title}>
          <p>{goal.description}</p>
       </Goals>
      </li>
    ))}
  </ul>
    )
}