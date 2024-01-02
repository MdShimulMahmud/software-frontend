import React from "react";
// title: "Post 1",
//       photos: [],
//       seatCapacity: 5,
//       price: 5000,
//       type: "male",
//       availabe: true,
//       contact: "01725566253",
//       details: "CUET Gate er pashe",
//       location: "CUET Main gate",
//       coordinates: "99990.5566",

const PostItem = ({ post }) => {
  const {
    title,
    photos,
    seatCapacity,
    price,
    type,
    available,
    contact,
    details,
    location,
    coordinates,
  } = post;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className=" w-[250px] h-[200px]" src={`${photos[0]}`} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
    </div>
  );
};

export default PostItem;
