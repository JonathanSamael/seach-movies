import React, { useState } from "react";
import './movieRow.css';

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let moveLineToLeft = scrollX + Math.round(window.innerWidth / 2);
        if (moveLineToLeft > 0) {
            moveLineToLeft = 0
        }
        setScrollX(moveLineToLeft);
    }

    const handleRightArrow = () => {
        let moveLineToRight = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if ((window.innerWidth - listWidth) > moveLineToRight) {
            moveLineToRight = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(moveLineToRight);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <p style={{ fontSize: 30, rotate: '180deg' }}>⨠</p>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <p style={{ fontSize: 30 }}>⨠</p>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export { MovieRow }