import {useEffect} from "react";

interface TextEffectPropsType {
    text: string;
}

export default function TextEffect({text}: TextEffectPropsType) {
    return(
        <h1>
            {text}
        </h1>
    )
};
