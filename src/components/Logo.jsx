import React from "react";

function Logo({
    className=''
}) {
    return (
        <div>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4yvRwYIkzsXW82VVq6KDOyvgOl5e-wgo3A&s" 
            alt="Logo" 
            className={`${className}`}
            />
        </div>
    )
}

export default Logo;