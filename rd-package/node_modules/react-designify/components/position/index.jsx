export const Position = ({ position, className, style, children }) => {
    return (
        <div style={style} className={`${position ? Positions.find(e => e?.position === position)?.class : Positions.find(e => e?.position === "top left")?.class} ${className ? className : ""}`}>
            {children}
        </div>
    );
}
const Positions = [
    {
        "position": "top center",
        "class": "absolute -translate-y-1/2 translate-x-1/2 right-1/2"
    },
    {
        "position": "top left",
        "class": "absolute -translate-y-1/2 -translate-x-1/2 right-auto top-0 left-0"
    },
    {
        "position": "top right",
        "class": "absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0"
    },
    {
        "position": "middle center",
        "class": "absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2"
    },
    {
        "position": "middle left",
        "class": "absolute -translate-y-1/2 -translate-x-1/2 right-auto left-0 top-2/4"
    },
    {
        "position": "middle right",
        "class": "absolute -translate-y-1/2 translate-x-1/2 left-auto right-0 top-2/4"
    },
    {
        "position": "bottom center",
        "class": "absolute translate-y-1/2 translate-x-1/2 bottom-0 right-1/2"
    },
    {
        "position": "bottom left",
        "class": "absolute translate-y-1/2 -translate-x-1/2 right-auto bottom-0 left-0"
    },
    {
        "position": "bottom right",
        "class": "absolute translate-y-1/2 translate-x-1/2 left-auto bottom-0 right-0"
    }
]