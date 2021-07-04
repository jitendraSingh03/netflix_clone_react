const API_KEY='ffd4d9cca0ed13e56347cb90858fa3df'


const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentories:`/discover/movie/?api_key=${API_KEY}&with_genres=99`,
}
export default requests;