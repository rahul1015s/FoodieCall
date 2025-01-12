export default function Button({ children, textOnly, onClick }) {
    return textOnly ? (
        <span>{children}</span>
    ) : (
        <button className="bg-yellow-600 px-2 py-1 rounded hover:bg-yellow-800"
        onClick={onClick}>
            {children}
        </button>
    );
}
