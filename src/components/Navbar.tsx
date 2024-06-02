"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-vw h-16 bg-lime-600 flex justify-around items-center text-2xl">
            <Link href="/">Home</Link>
            <Link href="/essen">Essen</Link>
        </nav>
    )
}