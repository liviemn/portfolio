type WidgetProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Widget({
    children,
    className="",
}: WidgetProps) {
    return(
        <div
        className={`rounded-2xl border-2 border-[#B96F8A] bg-white/40 p-4 backdrop-blur-sm ${className}`}>
            {children}
        </div>
    );
}
