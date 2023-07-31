
interface DisplayTextProps {
    text: string;
}

export default function DisplayText({text}: DisplayTextProps) {
    const splitText: string[] = text.split(/\d+\./).map(s => s.trim()).filter(Boolean);

    return (
        <div>
            {splitText.map((text, index) => (
                <p key={index} className="mb-3">{text}</p>
            ))}
        </div>
    );
}