import { useReducer } from "react";
import axios from "axios";
import showsContext from "./showsContext";
import showsReducer from "./showsReducer";
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW,
} from '../types';

const ShowsState = (props) => {
    const initialState = {
        shows: [],
        singleShow: {},
        loading: false,
    };
   const [state,dispatch] = useReducer(showsReducer,initialState);

    const searchShows = async (searchTerm) => {
        dispatch({type: SET_LOADING});

        const {data} = await axios.get
        (`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        
        console.log(data);
        dispatch ({
            type: SEARCH_SHOWS,
            payload: data,
        });
    }
    return (
    <showsContext.Provider
    value={{
        shows:state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows
    }}    
    >
      {props.children}
    </showsContext.Provider>
  )
}

export default ShowsState