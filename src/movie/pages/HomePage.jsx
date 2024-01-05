
import { useLocation } from "react-router-dom";
import queryString from "query-string";

//Components
import { MoviesGrid } from "../../ui";
import { Search } from "../";



export const HomePage = () => {

    const location = useLocation();

    //Capturando y parsiando los datos obtenidos desde la url
    const { search = '' } = queryString.parse( location.search );

    return (
        <>
            <Search />

            <MoviesGrid key={ search } search={ search } />
        </>
        
    )
}
