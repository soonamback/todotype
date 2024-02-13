import Goals from "./components/Goals.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg"
export default function App() {
  return(
  <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
      <h1>my goals</h1>
    </Header>
  <Goals title="Learn React + TS">
    <p>Learn it from ground up</p>
    </Goals>
  </main>
  )
}