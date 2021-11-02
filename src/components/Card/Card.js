import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <div className="card_thumbnail">
                <img className="card_thumbnail_img" src={props.data.thumbnail} />
            </div>
            <div className="card_heading">
                <p className="heading_tertiary">{props.data.title}</p>
            </div>
            {props.data.link ? <a href={props.data.link} target="_blank" className="btn-text">Read Article &rarr;</a> :""}
            
            {props.children}
        </div>
    )
}

export default Card
