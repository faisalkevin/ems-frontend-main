import React from "react";

interface StarProps {
    rating: number;
}

const Star: React.FC<StarProps> = ({ rating }) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;

    return (
        <div>
            {Array.from({length: filledStars}, (_, index) => (
                <span key={index} style={{color: "gold"}}>*</span>
            ))}
            {Array.from({length: emptyStars}, (_, index) => (
                <span key={index} style={{color: "gray"}}>*</span>
            ))}
        </div>
    )
}

export default Star;