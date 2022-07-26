// const API_KEY = process.env.API_KEY
const API_KEY = "5fd8e9b18dd5bcd042758174c5acb82e"

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    // fetchComedyMovies: {
    //     title: "Comedy",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // },
    // fetchHorrorMovies: {
    //     title: "Horror",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // },
    // fetchRomanceMovies: {
    //     title: "Romance",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // },
    // fetchScienceMovies: {
    //     title: "Sci-Fi",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=107`,
    // },
    // fetchMysteryMovies: {
    //     title: "Mystery",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=107`,
    // },
}