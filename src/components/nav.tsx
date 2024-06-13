import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul className="flex w-screen justify-center bg-red-600">
                <li className="p-10">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-10">
                    <Link href="/about">About</Link>
                </li>
                <li className="p-10">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}