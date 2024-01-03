import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import axiosInstance from "../../utils/axios";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    setLoading(true);
    const files = e.target.files;

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
      data.append("upload_preset", "software");
      data.append("tags", "multiple_images");
      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/du55ossud/image/upload`,
          data
        );

        setImages(() => res.data.secure_url);
      } catch (err) {
        console.error("Error uploading image: ", err);
      }
    }
    setLoading(false);
  };

  const [formData, setFormData] = useState({
    address: "",
    image: images,
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseInt(value) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await axiosInstance.post(`${api}/profile/create/`, {
        ...formData,
      });

      if (response.data) {
        navigate("/profile");

        setFormData({
          address: "",
          image: [],
          phone: "",
        });
      }
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
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        className="w-full border rounded-md p-2 mb-4"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        className="w-full border rounded-md p-2 mb-4"
      />

      <input
        type="file"
        onChange={handleImageUpload}
        multiple
        className="mb-4"
      />

      {loading && <p className="text-red-500">Uploading...</p>}

      <div className="mb-4 flex flex-row">
        {formData.image !== "" && (
          <img
            src={formData.image}
            alt={`cover`}
            className="w-20 h-20 object-cover mr-2 mb-2"
          />
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Profile
      </button>
    </form>
  );
};

export default CreateProfile;
