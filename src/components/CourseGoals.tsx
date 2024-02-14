import {  useState, type ReactNode  } from "react";
import { Goals } from "../App";

interface GoalsProps {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}
export default function CourseGoals({
    id,
    title,
    children,
    onDelete
}: GoalsProps ){
    return (
    <article>
        <div>
            <h2>{ title }</h2>
            { children }
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
    )
}

// type GoalsProps = PropsWithChildren<{ title: string }>;

// const Goals: FC<GoalsProps> = ({ title, children }) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//                 <button>Delete</button>
//         </article>
//     )
// }
// export default Goals;