import axios from "axios";
import React, { useState } from "react";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    seatCapacity: 0,
    price: 0,
    photos: [],
    type: "",
    available: false,
    contact: "",
    details: "",
    location: "",
    coordinates: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue =
      type === "number"
        ? parseInt(value)
        : type === "checkbox"
        ? checked
        : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedPhotos = files.map((file) => URL.createObjectURL(file));

    setFormData({
      ...formData,
      photos: uploadedPhotos,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/posts/",
        formData
      );
      console.log("Post request response:", response.data);
      // Reset the form after successful submission if needed
      setFormData({
        title: "",
        seatCapacity: 0,
        price: 0,
        photos: [],
        type: "",
        available: false,
        contact: "",
        details: "",
        location: "",
        coordinates: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-[90vh]  mx-auto my-5 p-4 bg-gray-100 rounded-lg"
    >
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="w-full border rounded-md p-2 mb-4"
      />
      <input
        type="number"
        name="seatCapacity"
        value={formData.seatCapacity}
        onChange={handleInputChange}
        placeholder="Seat Capacity"
        className="w-full border rounded-md p-2 mb-4"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        placeholder="Price"
        className="w-full border rounded-md p-2 mb-4"
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleInputChange}
        placeholder="Type"
        className="w-full border rounded-md p-2 mb-4"
      />
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleInputChange}
          className="form-checkbox h-5 w-5 text-blue-500 rounded mr-2"
        />
        Available
      </label>
      <input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleInputChange}
        placeholder="Contact"
        className="w-full border rounded-md p-2 mb-4"
      />
      <textarea
        name="details"
        value={formData.details}
        onChange={handleInputChange}
        placeholder="Details"
        className="w-full border rounded-md p-2 mb-4"
        rows="4"
      ></textarea>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Location"
        className="w-full border rounded-md p-2 mb-4"
      />
      <input
        type="text"
        name="coordinates"
        value={formData.coordinates}
        onChange={handleInputChange}
        placeholder="Coordinates"
        className="w-full border rounded-md p-2 mb-4"
      />
      <input
        type="file"
        name="photos"
        onChange={handlePhotoUpload}
        multiple
        className="mb-4"
      />
      {formData.photos.length > 0 && (
        <div className="mb-4">
          {formData.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo_no ${index}`}
              className="w-20 h-20 object-cover mr-2 mb-2"
            />
          ))}
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AddPost;
