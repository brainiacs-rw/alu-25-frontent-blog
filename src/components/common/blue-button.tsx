import type React from "react";
import type { FC } from "react";

interface BlueButtonProps {
    title : string,
}
const BlueButton : FC<BlueButtonProps> = (props) => {
    return (
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white">{ props.title }</button>
    )
}

export default BlueButton