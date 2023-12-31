const ErrorComponent = ({ message }) => {
    console.error("message", message);
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded " role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline t">{message}</span>
        </div>
    );
};

export default ErrorComponent;