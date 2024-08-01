import axios from 'axios';

const initialState = {
  loading: false,
  exploreRepos: [
    {
      id: 1,
      title: 'repo1',
      description: 'repo1 description is here',
      starCount: 10,
    },
    {
      id: 2,
      title: 'repo2',
      description: 'repo2 description is here',
      starCount: 12,
    },
  ],
  error: null,
};

const FETCH_EXPLORE_REPOS_REQUEST = 'FETCH_EXPLORE_REPOS_REQUEST';
const FETCH_EXPLORE_REPOS_SUCCESS = 'FETCH_EXPLORE_REPOS_SUCCESS';
const FETCH_EXPLORE_REPOS_FAILURE = 'FETCH_EXPLORE_REPOS_FAILURE';

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPLORE_REPOS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_EXPLORE_REPOS_SUCCESS:
      return {...state, loading: false, exploreRepos: action.payload};
    case FETCH_EXPLORE_REPOS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default exploreReducer;

export const fetchExploreRepos = (limit = 10, date = '', language = '') => {
  return async dispatch => {
    dispatch({type: FETCH_EXPLORE_REPOS_REQUEST});
    try {
      const query = `q=${date && `created:>${date}+`}
        ${language && `language:${language}&`}
        sort=stars&order=desc
        ${limit && `&per_page=${limit}`}
        `;
      const response = await axios.get(
        `https://api.github.com/search/repositories${query}`,
      );
      console.log(response.data);
    } catch (error) {
      dispatch({type: FETCH_EXPLORE_REPOS_FAILURE, payload: error.message});
    }
  };
};
