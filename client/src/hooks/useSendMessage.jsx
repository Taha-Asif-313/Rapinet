import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useSendMessage = (url, message) => {
  // States
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async () => {
    setLoading(true); // Start loading state

    try {
      const res = await axios.post(url, { message }, { withCredentials: true });
      setLoading(false); // Stop loading after request

      // Handle success or failure based on the response
      if (res.data.success) {
        setResponse(res.data);
        toast.success(res.data.message);
      } else {
        setError(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error(error.response ? error.response.data.message : error.message);
      setError(error.message);
    }
  };

  // Return the data, error, and loading
  return { response, loading, error, sendMessage };
};

export default useSendMessage;
