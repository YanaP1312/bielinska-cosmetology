'use client'

import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import MobMenu from "./MobMenu";

const BurgerBtn = () => {
const [isOpen, setIsOpen] = useState(false)

    return (<div className="flex items-center">
        <button onClick={() => setIsOpen(true)} className="hover-interaction hover:scale-105" aria-label="Open mobile menu">
    <SlMenu  className="fill-primary w-7 h-7"/>
    </button>
    {isOpen && <MobMenu onClose={() => setIsOpen(false)}/>}
    </div>)
}

export default BurgerBtn;