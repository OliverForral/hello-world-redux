import {
  initialState,
  helloReducer,
  helloLoading,
  helloSuccess,
  helloFailure,
} from './HelloState';

describe('HelloState reducer', () => {
  it('return the initial state when no actions are handled', () => {
    expect.assertions(1);
    const fakeAction = {
      type: 'FAKE_ACTION',
    };

    const actual = helloReducer(undefined, fakeAction);

    const expected = {
      error: null,
      input: null,
      loading: false,
      output: null,
    };
    expect(actual).toEqual(expected);
  });

  it('return input on loading', () => {
    expect.assertions(1);
    const newInitialState = {
      ...initialState,
      error: {
        message: 'error',
      },
    };
    const input = { name: 'world' };

    const actual = helloReducer(
      newInitialState,
      helloLoading(input)
    );

    const expected = {
      ...initialState,
      error: null,
      input,
      loading: true,
    };
    expect(actual).toEqual(expected);
  });

  it('return output on success', () => {
    expect.assertions(1);
    const newInitialState = {
      ...initialState,
      loading: true,
    };
    const output = { greeting: 'Hello, world!' };
    
    const actual = helloReducer(
      newInitialState,
      helloSuccess(output)
    );

    const expected = {
      ...initialState,
      loading: false,
      output,
    };
    expect(actual).toEqual(expected);
  });

  it('return error on failure', () => {
    expect.assertions(1);
    const newInitialState = {
      ...initialState,
      loading: true,
    };

    const error = { message: 'errorMessage' };

    const actual = helloReducer(
      newInitialState,
      helloFailure(error)
    );

    const expected = {
      ...initialState,
      loading: false,
      error,
    };

    expect(actual).toEqual(expected);
  });
});
