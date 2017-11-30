const HELLO_LOADING = 'HELLO_LOADING';
const HELLO_SUCCESS = 'HELLO_SUCCESS';
const HELLO_FAILURE = 'HELLO_FAILURE';

export const helloLoading = input => {
  return {
    type: HELLO_LOADING,
    payload: { input },
  };
};

export const helloSuccess = output => {
  return {
    type: HELLO_SUCCESS,
    payload: { output },
  };
};

export const helloFailure = error => {
  return {
    type: HELLO_FAILURE,
    payload: { error },
  };
};

export const initialState = {
  error: null,
  input: null,
  loading: false,
  output: null,
};

export const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case HELLO_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        input: action.payload.input,
      };
    case HELLO_SUCCESS:
      return {
        ...state,
        loading: false,
        output: action.payload.output,
      };
    case HELLO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
