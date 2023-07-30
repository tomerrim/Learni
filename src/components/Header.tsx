import Link from "next/link";

const HEADER_ITEMS = [
    { title: "Learney", path: "/" },
    { title: "Topics", path: "/topics" },
]

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="flex mx-auto mx-w5xl items-center gap-4">
                    {HEADER_ITEMS.map(item => (
                        <div key={item.path} className="item">
                            <Link href={item.path}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}