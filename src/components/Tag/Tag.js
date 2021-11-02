import React from 'react'

const Tag = ({label}) => {
    return (
        <div className="tag">
            <p className="tag_content">{label}</p>
        </div>
    )
}

export default Tag
