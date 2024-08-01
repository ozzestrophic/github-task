const initialState = [
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
];

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default exploreReducer;
