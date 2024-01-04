
import { FaSpinner } from 'react-icons/fa';

//Css
import styles from '../css/Spinner.module.css';

export const Spinner = () => {
    return (
        <div className={ styles.spinner }>
            <FaSpinner className={ styles.spinning } size={ 60 } />
        </div>
    )
}
