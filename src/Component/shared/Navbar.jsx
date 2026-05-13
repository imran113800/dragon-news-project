"use client"
import Link from "next/link";
import avarter from "@/assets/user.png"
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
    const [active, setActive] = useState("")
    return (
        <div className="flex justify-between container mx-auto py-5">
            <div></div>
            <ul className="flex gap-4 items-center text-gray-500">
                <li>
                    <Link
                        href="/"
                        onClick={() => setActive("home")}
                        className={`${active === "home" ? "border-b-4" : ""}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/about"}
                        onClick={() => setActive("about")}
                        className={`${active === "about" ? "border-b-4" : ""}`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/career"}
                        onClick={() => setActive("career")}
                        className={`${active === "career" ? "border-b-4" : ""}`}>
                        Career
                    </Link>
                </li>
            </ul>
            <div className="flex items-center gap-5">
                <Image src={avarter} alt="avarter" width={40} height={40}></Image>
                <button className="btn btn-primary">
                    <Link href={"/login"}>Login </Link></button>
            </div>
        </div>
    );
};

export default Navbar;