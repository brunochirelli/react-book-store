import React from "react";

import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
  price: number;
  rating: number;
  ratingQuantity: number;
};

const ProductCard = ({
  title,
  image,
  price,
  rating,
  ratingQuantity,
}: ProductCardProps) => {
  return (
    <div>
      <div>
        <Image src={image} alt={`${title} image`} />
      </div>
      <div>
        <p>{title}</p>
        <div>
          <span>{rating}</span>
          <span>{ratingQuantity}</span>
        </div>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
