"use client"

import { useRef } from "react";
import Btn from "./Btn";

interface CodeBlockProps {
    children: React.ReactNode;
}

export default function CodeBlock({ children}: CodeBlockProps) {
    const codeRef = useRef<HTMLElement>(null);

    async function handleCopy() {
        if (codeRef.current) {
            try {
                await navigator.clipboard.writeText(codeRef.current.innerText);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div className="codeBlock">
            <div className="mb-10 ring-inset ring-1 ring-gray-300 focus:ring-indigo-600 bg-gray-800 p-1">
                <header className="flex justify-between items-center bg-gray-900">
                    <h3 className="text-white pl-1">Code Example</h3>
                    <Btn onClick={handleCopy} className="copyBtn">Copy</Btn>
                </header>
                <pre>
                    <code ref={codeRef} className="block p-4 text-white">
                        {children}
                    </code>
                </pre>
            </div>
        </div>
    )
}