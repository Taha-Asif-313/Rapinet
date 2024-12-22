import React, { useState } from 'react'
import { setotherUsers } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import useSearchUser from '../../hooks/useSearchUser';
import { FiSearch } from 'react-icons/fi';

const SearchUser = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    const { response, loading, error, fetchData } = useSearchUser(
      "http://localhost:5000/api/auth/search-users",
      searchTerm
    );
    const onChangeHandler = (e) => {
      setSearchTerm(e.target.value);
      fetchData();
      if (response) {
        dispatch(setotherUsers(response));
      }
    };
  return (
   <>
      <div className="relative mb-4">
           <input
             type="text"
             placeholder="Search contacts"
             value={searchTerm}
             onChange={onChangeHandler}
             className={`w-full pl-10 pr-4 py-2 rounded-full ${
               isDarkTheme ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
             } focus:outline-none focus:ring-2 focus:ring-primary`}
           />
           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
         </div>
   </>
  )
}

export default SearchUser