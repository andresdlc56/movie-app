
import { useLocation } from "react-router-dom";
import queryString from "query-string";

//Components
import { MoviesGrid } from "../../ui";
import { Search } from "../";

//Custom Hooks
import { useDebounce } from "../../hooks";


export const HomePage = () => {

    const location = useLocation();

    //Capturando y parsiando los datos obtenidos desde la url
    const { search = '' } = queryString.parse( location.search );

    const debounceSearch = useDebounce(search, 1000);

    return (
        <>
            <Search />

            <MoviesGrid key={ debounceSearch } search={ debounceSearch } />
        </>
        
    )
}
