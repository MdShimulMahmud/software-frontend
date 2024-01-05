import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searched } from "../../features/posts/postsSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (search) {
      dispatch(searched(search));
    }
  };
  return (
    <div className="form-control">
      <input
        onClick={handleSearch}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search location"
        className="input input-bordered w-100 md:w-auto bg-slate-50"
      />
    </div>
  );
};

export default Search;
