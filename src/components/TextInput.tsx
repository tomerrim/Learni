interface TextInputProps {
    title: string;
    onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export default function TextInput({title, onChangeEvent, value}: TextInputProps) {
    return (
        <>
            <div className="m-2">
                <label htmlFor={title}>{title}</label>
                <input type="text" name={title} id={title} onChange={onChangeEvent} className="formInput" value={value}/>
            </div>
        </>
    )
}