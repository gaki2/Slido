import SlotText from "./components/View/SlotText"
import "./css/font.css";
import "./css/text.css";

export default function App() {
  return(
    <SlotText text={"Your go-to interaction app for hybrid meetings"} classList={["Nunito", "title"]}></SlotText>
  )
}