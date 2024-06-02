import React, { useState } from "react";
import edit from "../../Images/edit_.png";

const Information = ({ user }) => {
  const [isEditing, setIsEditing] = useState({});
  const [editUser, setEditUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEdit = (field) => {
    setIsEditing((prevEditing) => ({
      ...prevEditing,
      [field]: true,
    }));
  };

  const handleSave = () => {
    // Save the edited data (e.g., make an API call)
    // After saving, reset the isEditing state
    setIsEditing({});
  };

  const handleProfileImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditUser((prevUser) => ({
          ...prevUser,
          profileImg: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
      <div className="flex flex-col md:w-full p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center relative mb-8">
          <input
            type="file"
            id="profileImg"
            className="hidden"
            onChange={handleProfileImgChange}
          />
          <img
            src={
              user.profileImg ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-300"
          />
          <label
            htmlFor="profileImg"
            className="absolute bottom-1 cursor-pointer bg-white p-1 rounded-full shadow-md right-96"
          >
            <span>
              <img src={edit} alt="Edit" height={30} width={30} />
            </span>
          </label>
        </div>
        <div className="flex flex-col justify-center">
          <table className="w-full text-left">
            <tbody>
              {["name", "email"].map((field) => (
                <tr key={field} className="border-b">
                  <td className="py-2 font-semibold text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </td>
                  <td className="py-2 text-gray-700 flex-grow">
                    {isEditing[field] ? (
                      <input
                        type="text"
                        name={field}
                        value={editUser[field] || ""}
                        onChange={handleInputChange}
                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                    ) : (
                      user[field]
                    )}
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleEdit(field)}
                      className="ml-4 px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-700">Address:</td>
                <td className="py-2 text-gray-700 flex-grow" colSpan="1">
                  {isEditing.address ? (
                    <>
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={editUser.street || ""}
                        onChange={handleInputChange}
                        className="w-full mb-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={editUser.city || ""}
                        onChange={handleInputChange}
                        className="w-full mb-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={editUser.state || ""}
                        onChange={handleInputChange}
                        className="w-full mb-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={editUser.pincode || ""}
                        onChange={handleInputChange}
                        className="w-full mb-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={editUser.phone || ""}
                        onChange={handleInputChange}
                        className="w-full mb-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                    </>
                  ) : (
                    <>
                      <p>Street:{user.street}</p>
                      <p>
                        Location:{user.city} {user.state} {user.pincode}
                      </p>
                      <p>Phone: {user.phone}</p>
                    </>
                  )}
                </td>
                <td className="py-2">
                  <button
                    onClick={() => handleEdit("address")}
                    className="ml-4 px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {Object.values(isEditing).includes(true) && (
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Information;
