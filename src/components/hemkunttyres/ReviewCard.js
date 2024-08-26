import React from "react";

// Function to generate a color based on the initial letter
const getColorByInitial = (initial) => {
  const colors = [
    "#ff5733",
    "#33ff57",
    "#3357ff",
    "#ff33a1",
    "#f1c40f",
    "#1abc9c",
    "#e74c3c",
    "#9b59b6",
    "#34495e",
    "#2ecc71",
    "#3498db",
    "#e67e22",
    "#95a5a6",
    "#d35400",
    "#f39c12",
    "#e74c3c",
    "#7f8c8d",
    "#16a085",
  ];
  const index = initial.charCodeAt(0) % colors.length;
  return colors[index];
};

const ReviewCard = ({ name, review, image }) => {
  const initials = name.charAt(0).toUpperCase();
  const color = image ? "transparent" : getColorByInitial(initials);

  return (
    <div className="review-card">
      <div className="reviewer-info">
        {image ? (
          <img src={image} alt={name} className="profile-image" />
        ) : (
          <div className="profile-initials" style={{ backgroundColor: color }}>
            {initials}
          </div>
        )}
        <div className="reviewer-name">{name}</div>
      </div>
      <p className="review-text">{review}</p>
    </div>
  );
};

export default ReviewCard;
