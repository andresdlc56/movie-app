
export const getMoviesByName = async( name = "", page ) => {
    //Parsiando el name recibido
    name = name.trim().toLocaleLowerCase();

    if( name.length === 0 ) return []; 

    //Consulta
    const url = `https://api.themoviedb.org/3/search/movie?query=${ name }&page=${ page }`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTMwMTVhNjI0MWViMjJiOWQzZWI5YzY2MGI2NWQ4YSIsInN1YiI6IjY1OTU3YWI1NTkwN2RlMWJmNDYzYmY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRLyj_cXEYFTqe9H7f6uQRgqtNQ1o5bGJTmeuFmSMeI'
        }
    });

    const data = await resp.json();
    return data;
}