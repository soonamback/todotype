import {  type ReactNode  } from "react";

interface GoalsProps {
    title: string;
    children: ReactNode
}
export default function Goals({
    title,
    children
}: GoalsProps ){

    return (
    <article>
        <div>
            <h2>{ title }</h2>
            { children }
        </div>
        <button>Delete</button>
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