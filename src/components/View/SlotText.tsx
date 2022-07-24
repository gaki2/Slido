import {useEffect, useState} from "react";
import useInterval from "../../shared/useInterval";
import Random from "../../utils/Random";


interface TextEffectPropsType {
    text: string;
    classList?: string[];
}

export default function SlotText({text, classList}: TextEffectPropsType) {
    const [slotText, setSlotText] = useState(text);
    const [isPlaying, setIsPlaying] = useState(true);
    const [textIdx, setTextIdx] = useState(0);
    const [count, setCount] = useState(0);

    const slotTextEffect = () => {
        setTextIdx(textIdx + 1);
        if (textIdx >= text.length) {
            setIsPlaying(false);
        }
        setSlotText(text.substring(0, textIdx) + Random.getRandomText(slotText.substring(textIdx)));
        
    }

    useInterval(slotTextEffect, isPlaying ? 30 : null);

    return(
        <p className={classList?.join(" ")}>
            {slotText}
        </p>
    )
};
