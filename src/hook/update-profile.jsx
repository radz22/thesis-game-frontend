import { useState } from "react";
import { updateProfile } from "../services/authService";
import { handleSuccessAlert, handleErrorAlert } from "../component/sweet-alert";
const UpdateProfileHook = () => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (id, username) => {
    setLoading(true);
    try {
      const response = await updateProfile(id, username);
      handleSuccessAlert("Successfully updated profile!");
      return response.data;
    } catch (error) {
      handleErrorAlert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleUpdate };
};

export default UpdateProfileHook;
