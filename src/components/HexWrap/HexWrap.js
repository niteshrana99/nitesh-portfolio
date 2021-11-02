import React from 'react'

const HexWrap = () => (
    <div className="hexContainer">
        <div className="hexItemContainer">
        <div className="hexContainer_hexagon">
            <span className="text">
                <i className="fa-fast"></i>
            </span>
        </div>
        <div className="hexContainer_caption">
            <span>FAST</span>
            <p className="hexContainer_caption_desc">Fast load times and lag free interaction, my highest priority</p>  
        </div>
        </div>
        <div className="hexItemContainer">
        <div className="hexContainer_hexagon">
            <span className="text">
                <i className="fa-responsive"></i>
                </span>
        </div>
        <div className="hexContainer_caption">
            <span>Responsive</span>
            <p className="hexContainer_caption_desc">My layouts will work on any device, big or small.</p>  
        </div>
        </div>
        <div className="hexItemContainer">
        <div className="hexContainer_hexagon">
            <span className="text">
                <i className="fa-intutive"></i>
                </span>
        </div>
        <div className="hexContainer_caption">
            <span>Intuitive</span>
            <p className="hexContainer_caption_desc">Strong preference for easy to use, intuitive UX/UI.</p>  
        </div>
        </div>
        <div className="hexItemContainer">
        <div className="hexContainer_hexagon">
            <span className="text">
                <i className="fa-dynamic"></i>
                </span>
        </div>
        <div className="hexContainer_caption">
            <span className="hexContainer_caption_heading">Dynamic</span>
            <p className="hexContainer_caption_desc">Websites don't have to be static, I love making pages come to life.</p>  
        </div>
        </div>
    </div>
    
)

export default HexWrap
