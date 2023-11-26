import { useState } from "react";

export interface HamburgerProps {
    /** Callback function, which should be executed on click */
    onClick: () => void;

    /** Initial state of our button */
    isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer float-right mr-4`}
        >
            <div
                className={`bg-black block w-8 h-[0.20rem] transition-all origin-[1px] ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
            />
            <div
                className={`bg-black block w-8 h-[0.20rem] transition-all origin-[1px] ${
                    isOpen ? 'transform scale-0 bg-transparent' : 'translate-x-0'
                }`}
            />
            <div
                className={`bg-black block w-8 h-[0.20rem] transition-all origin-[1px] ${
                    isOpen ? 'rotate-[-45deg]' : 'rotate-0'
                }`}
            />
        </button>
    );
}

export default Hamburger;