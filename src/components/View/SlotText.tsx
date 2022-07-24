import {useEffect, useState} from "react";
import useInterval from "../../shared/useInterval";
import Random from "../../utils/Random";


interface TextEffectPropsType {
    text: string;
}

export default function SlotText({text}: TextEffectPropsType) {
    const [slotText, setSlotText] = useState(text);
    const [isPlaying, setIsPlaying] = useState(true);
    const [textIdx, setTextIdx] = useState(0);
    const [count, setCount] = useState(0);

    const slotTextEffect = () => {
        if (count % 3 === 0) {
            setTextIdx(textIdx + 1);
        }
        if (textIdx >= text.length) {
            setIsPlaying(false);
        }
        setSlotText(text.substring(0, textIdx) + Random.getRandomText(slotText.substring(textIdx)));
        setCount(count + 1);
    }

    useInterval(slotTextEffect, isPlaying ? 35 : null);

    return(
        <h1>
            {slotText}
        </h1>
    )
};
