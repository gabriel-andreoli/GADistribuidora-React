import React from 'react';

interface ButtonProps {
    text: string;
    width: string;
    action?: () => void;
    typeButton?: "submit" | "button";
}

const AppButton: React.FC<ButtonProps> = ({ text, width, typeButton = "button", action }) => {
    const buttonClass = `btn btn-primary btn-block mb-4 w-${width}`;

    return (
        <button type={typeButton} className={buttonClass} onClick={action}>
            {text}
        </button>
    );
}

export default AppButton;
