export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export const showCompleted = () => {
  return {
    type: 'SHOW_COMPLETED',
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
