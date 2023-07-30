"use client"

import Section from "@/types/Section";
import TextInput from "./TextInput";
import Btn from "./Btn";
import TextArea from "./TextArea";

interface SectionFormProps {
    sections: Section[];
    updateSections: (sections: Section[]) => void;
}

export default function SectionForm({sections, updateSections}: SectionFormProps) {

    function addSection() {
        const newSections = [...sections, {title:"", content:"", image:"", codeExample:""}];
        updateSections(newSections);
    }

    function updateSection(index: number, field: keyof Section, value: string) {
        const newSction = [...sections];
        newSction[index][field] = value;
        updateSections(newSction);
    }

    function deleteSection(index: number) {
        const newSections = [...sections];
        newSections.splice(index, 1);
        updateSections(newSections);

    }

    return (
        <div className="m-2">
            <label htmlFor="Sections">Sections</label>
            {sections.map((section, index) => (
                <div key={index} className="sectionForm">
                    <TextInput title="Title" onChangeEvent={(e) => updateSection(index, 'title', e.target.value)} value={section.title}/>
                    <TextArea title="Content" onChangeEvent={(e) => updateSection(index, 'content', e.target.value)} value={section.content}/>
                    <TextArea title="Code Example" onChangeEvent={(e) => updateSection(index, 'codeExample', e.target.value)} value={section.codeExample}/>
                    <Btn onClick={() => deleteSection(index)} className="deleteBtn">Delete</Btn>
                </div>
            ))}
            <Btn onClick={addSection}>Add Section</Btn>
        </div>
    )
}