import React from "react";

function IconButton({ icon, text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center px-4 w-full justify-center py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
            <span className="mr-2">{icon}</span>
            {text}
        </button>
    );
}

export default IconButton;