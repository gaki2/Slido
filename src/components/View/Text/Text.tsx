import { TextType } from "./SlotText";

export default function Text({text, classList}: TextType) {
    return(
        <p className={classList?.join(" ")}>
            {text}
        </p>
    )  
};
