import React from 'react'

const Export = () => {

    const handleViewResume = () => {
        window.open('https://drive.google.com/file/d/1__FBC0stei6BGX5kXYcIsUlc0hjtqBfX/view?usp=sharing', '_blank');
    }
    return (
        <div className="export">
           <button className="round_btn" onClick={handleViewResume}>View Resume</button>
        </div>
    )
}

export default Export
