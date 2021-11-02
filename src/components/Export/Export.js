import React from 'react'

const Export = () => {

    const handleViewResume = () => {
        window.open('https://drive.google.com/file/d/153CoO3Gz-_CTIjkf5oK7e1K5jxs9hU7y/view', '_blank');
    }
    return (
        <div className="export">
           <button className="round_btn" onClick={handleViewResume}>View Resume</button>
        </div>
    )
}

export default Export
