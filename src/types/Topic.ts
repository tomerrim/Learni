import Section from "./Section";

export default interface Topic {
    id?: string;
    name: string;
    introduction: string;
    sections: Section[];
    image?: string;
    createdBy: string | null | undefined;
}