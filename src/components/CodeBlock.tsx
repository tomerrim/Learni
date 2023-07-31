"use client"

import { useRef,useEffect } from "react";
import Btn from "./Btn";
import hljs from 'highlight.js';

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

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div className="codeBlock">
            <div className="ring-inset ring-1 ring-gray-300 focus:ring-indigo-600 bg-gray-800 p-1">
                <header className="flex justify-between items-center bg-gray-900">
                    <h3 className="text-white pl-1">Code Example</h3>
                    <Btn onClick={handleCopy} className="copyBtn">Copy</Btn>
                </header>
                <pre>
                    <code ref={codeRef} className="block p-4">
                        {children}
                    </code>
                </pre>
            </div>
        </div>
    )
}