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
  error: '',
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EXPLORE_REPOS_REQUEST':
      return {...state, loading: true};
    case 'FETCH_EXPLORE_REPOS_SUCCESS':
      return [...state, action.payload];
    case 'FETCH_EXPLORE_REPOS_FAILURE':
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default exploreReducer;
