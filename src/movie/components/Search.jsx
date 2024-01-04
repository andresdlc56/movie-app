
import { FaSearch } from "react-icons/fa";

//Css
import styles from '../css/search.module.css';


export const Search = () => {
    return (
        <form className={ styles.searchContainer }>
            <div className={ styles.searchBox }>

                <input
                    className={ styles.searchInput } 
                    type="text" 
                />

                <button 
                    className={ styles.searchButton }
                    type="submit"
                >
                    <FaSearch size={ 20 } />
                </button>
            </div>
        </form>
    )
}
