import Link from "next/link";
import HeaderUser from "./HeaderUser";

const HEADER_ITEMS = [
    { title: "Learni", path: "/" },
    { title: "Topics", path: "/topics" },
]

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="flex mx-auto mx-w5xl items-center">
                    <ul className="flex gap-4">
                        {HEADER_ITEMS.map((item) => (
                            <li key={item.path} className="item">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <HeaderUser/>
                </div>
            </nav>
        </header>
    )
}