
interface TextAreaProps {
    title: string;
    rows?: number;
    onChangeEvent?: React.ChangeEventHandler<HTMLTextAreaElement>;
    value?: string;
}

export default function TextArea({ title, rows = 10, onChangeEvent,value }: TextAreaProps) {
    return (
        <div className="m-2">
            <label htmlFor={title}>{title}</label>
            <textarea
                rows={rows}
                onChange={onChangeEvent}
                className="formInput"
                value={value}
                />
        </div>
    )
}