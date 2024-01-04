
//Router
import { BrowserRouter } from 'react-router-dom';

//Components
import { AppRouter } from './router/AppRouter';

const MoviesApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default MoviesApp