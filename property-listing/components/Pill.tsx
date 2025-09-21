interface PillProps {
    label: string;
    onclick?: () => void;
}

export default function Pill({ label, onClick }: PillProps) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded-full border bg-gray-100 hover:bg-blue-100 transition"
        >
            {label}
        </button>
    );
}