import React from "react";
import { Card } from "react-bootstrap";

const deals = [
  {
    id: 1,
    name: "RALSON",
    imageSrc:
      "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/e/AmazonStores/A21TJRUUN4KGV/70314bb42cf2fb24bf819b186dd21e61.w1201.h630._SS200_.png",
  },
  {
    id: 2,
    name: "Ultramile",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBVmC-WDy-sa6cSFanjwFt_LQDKaujrFFdA&s.png?trw-10",
  },
  {
    id: 3,
    name: "Birla",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGfFCOpW5kfS4AiocvdQBnSOMwwsZweZVhg&s.png",
  },
  {
    id: 4,
    name: "Kenda",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC45KowseXUFcDZSyfq8Zipgd9UxWw-44a8w&s.png",
  },
  {
    id: 5,
    name: "Metzeler",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWipn2OCP8yQHjTFBtLq947bMUgjaOvvkmw&s.png",
  },
  {
    id: 6,
    name: "Kumho",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Om1RnRYojQrPozKO5V8cchk_BAIfQCq_mg&s.png",
  },
  {
    id: 7,
    name: "RALSON",
    imageSrc:
      "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/e/AmazonStores/A21TJRUUN4KGV/70314bb42cf2fb24bf819b186dd21e61.w1201.h630._SS200_.png",
  },
  {
    id: 8,
    name: "Ultramile",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBVmC-WDy-sa6cSFanjwFt_LQDKaujrFFdA&s.png?trw-10",
  },
  {
    id: 9,
    name: "Birla",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGfFCOpW5kfS4AiocvdQBnSOMwwsZweZVhg&s.png",
  },
  {
    id: 10,
    name: "Kenda",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC45KowseXUFcDZSyfq8Zipgd9UxWw-44a8w&s.png",
  },
  {
    id: 11,
    name: "Metzeler",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWipn2OCP8yQHjTFBtLq947bMUgjaOvvkmw&s.png",
  },
  {
    id: 12,
    name: "Kumho",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Om1RnRYojQrPozKO5V8cchk_BAIfQCq_mg&s.png",
  },
];

const DealsIn = () => {
  return (
    <div className="deals-in-container">
      <h5>Deals in</h5>
      <div className="deals-scroll-container">
        {deals.map((deal) => (
          <Card key={deal.id} className="deal-card">
            <Card.Img
              variant="top"
              src={deal.imageSrc}
              className="deal-image"
            />
            <Card.Body className="text-center">
              <Card.Text className="deal-name">{deal.name}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DealsIn;
