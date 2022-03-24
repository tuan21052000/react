import { useState,useContext} from "react";

// Comtext
import ShowsContext from '../context/shows/showsContext';

import Alert from "./Alert";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {searchShows} = useContext(ShowsContext);
    

    const onSearchHanler = (e) => {
        e.preventDefault();
       searchShows(searchTerm);
     
    };

  return ( 
  <div className="searchbar">
      <Alert message="Please enter something" type="danger" />
    <form className="searchbar__form">
        <input type="text" placeholder="Search For Tv Show" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}></input>
    <button className="btn btn-block" onClick={onSearchHanler}>SEARCH</button>
    </form>
  </div>
  )
}

export default Searchbar;