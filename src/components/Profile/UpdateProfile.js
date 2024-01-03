import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("image", image);

    try {
      const response = await axiosInstance.post("/profile/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
        navigate("/profile");
      }

      console.log("Profile created:", response.data);
      // Handle success or redirection after profile creation
    } catch (error) {
      console.error("Error creating profile:", error);
      // Handle error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
      </div>
      <div>
        <label>
          Profile Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateProfile;
