import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  POPULAR_BASE_TV_URL,
  SEARCH_TV_SHOW_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTVShows: async (searchTerm, page) => {
    const endpoint = searchTerm
      ?`${SEARCH_TV_SHOW_URL}${searchTerm}&page=${page}`
      :`${POPULAR_BASE_TV_URL}&page=&{page}`;
      return await (await fetch(endpoint)).json();
  },
  fetchMovieVideo: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  fetchTVShow: async TvShowId => {
    const endpoint = `${API_URL}tv/${TvShowId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  fetchGenres: async () => {
    const genresEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(genresEndpoint)).json();
  },
  fetchMoviesTvsGenre: async (genreId, movieOrTVShow) => {
      const movieOrTVParam = movieOrTVShow === "Movies" ? "movie" : "tv";
      const moviesGenresEndpoint = `${API_URL}discover/${movieOrTVParam}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=${genreId}`;
      console.log(`Endpoint: ${moviesGenresEndpoint}`);
      const return_data = await (await fetch(moviesGenresEndpoint)).json();
      console.log(`RETURN DATA IS: ${return_data}`);
      return return_data;
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value })
      })
    ).json();

    return rating;
  }
};

export default apiSettings;


