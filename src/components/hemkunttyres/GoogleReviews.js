import React from "react";
import ReviewCard from "./ReviewCard";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Shubh Shubh",
      review:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your...",
    },
    {
      name: "Rohit Bhati",
      review:
        "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
    },
    {
      name: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience.",
    },
    {
      name: "Md Nasir",
      review:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your...",
    },
    {
      name: "Rohit Bhati",
      review:
        "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
    },
    {
      name: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience.",
    },
    {
      name: "Shubham",
      review:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your...",
    },
    {
      name: "Rohit Bhati",
      review:
        "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
    },
    {
      name: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience.",
    },
    {
      name: "Aniker",
      review:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your...",
    },
    {
      name: "Rohit Bhati",
      review:
        "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
    },
    {
      name: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience.",
    },
  ];

  return (
    <div className="google-reviews conatiner">
      <h3 className="reviews-title">Google Reviews</h3>
      <div className="reviews-container conatiner">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            review={review.review}
            image={review.image}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
