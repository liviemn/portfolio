type TaskbarButtonProps = {
    children: React.ReactNode;
};

function TaskbarButton({ children }: TaskbarButtonProps) {
    return(
        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl">
            {children}
        </button>
    );
}

export default function BottomBar() {
    return (
        <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-between bg-pink-200/80 px-6">
            <div>
                <TaskbarButton>
                    Left
                </TaskbarButton>
            </div>

            <div>
                <TaskbarButton>
                    <button>⊞</button>
                    <button>✉</button>
                </TaskbarButton>
            </div>
            <div>
                <TaskbarButton>
                    Right
                </TaskbarButton>
            </div>
        </div>
    )
}