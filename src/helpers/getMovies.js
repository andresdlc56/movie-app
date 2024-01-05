export const getMovies = async( page ) => {
    const url = `https://api.themoviedb.org/3/discover/movie?page=${ page }`;
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