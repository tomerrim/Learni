
interface BtnProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    onSubmit?: () => void;
}

export default function Btn({type = "button", className = "", children, onClick, onSubmit}: BtnProps) {
    return (
        <div className="m-2">
            <button type={type} className={`btn ${className}`} onClick={onClick} onSubmit={onSubmit}>{children}</button>                
        </div>
    )
}