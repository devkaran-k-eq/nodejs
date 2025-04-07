import React from "react";
import Link from "next/link";

function Header() {

    return (
        <header className="py-3 shadow bg-[#97ffc8] rounded-2xl">

            <nav className="flex">
                <div className="mr-4">
                    <Link href={`/`}>

                        <img src="/crown.jpg" alt="" style={{ width: "60px" }} className="mx-2"/>
                    </Link>
                </div>

                <ul className="flex  items-center">

                    <li className="inline-block py-2 px-6 duration-200 hover:bg-[#F3C301] rounded-full font-bold">
                        <Link href={`/`}>
                            🏠 Home
                        </Link>
                    </li>
                    <li className="inline-block py-2 px-6 duration-200 hover:bg-[#F3C301] rounded-full font-bold">
                        <Link href={`/videos`}>
                            🎥 Videos
                        </Link>
                    </li>
                    <li className="inline-block py-2 px-6 duration-200 hover:bg-[#F3C301] rounded-full font-bold">
                        <Link href={`/`}>
                            🧐 Privacy Policy
                        </Link>
                    </li>

                </ul>
            </nav>

        </header>
    );
}

export default Header;
