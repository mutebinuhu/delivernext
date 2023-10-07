import React from "react";

function IconButton({ icon, text, onClick , type}) {
    return (
        <button
        type={type}
            onClick={onClick}
            className="flex items-center px-4 w-full justify-center py-2 bg-primary text-white rounded hover:bg-primary-800 focus:outline-none focus:bg-primary-800"
        >
            <span className="mr-2">{icon}</span>
            {text}
        </button>
    );
}

export default IconButton;