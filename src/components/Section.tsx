import Section from "@/types/Section"
import CodeBlock from "./CodeBlock";
import DisplayText from "./DisplayText";

interface SectionProps {
    section: Section;
}

export default function SectionComponent({section}: SectionProps) {
    return (
        <div className="section">
            <h2>{section.title}</h2>
            <DisplayText text={section.content}/>
            {/* <p className="font-bold">{section.content}</p> */}
            {section.codeExample && (
            <CodeBlock>{section.codeExample}</CodeBlock>
            )}
        </div>
    )
}