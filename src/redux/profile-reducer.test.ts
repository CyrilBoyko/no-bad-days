import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ],
    profile: null,
    status: '',
    newPostText: ''
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator('wuzup');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('new post message should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator('wuzup');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe('wuzup');
});

test('length of messages should be decrement after deleting', () => {
    // 1. test data
    let action = actions.deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test(`length of messages shouldn't be decrement after deleting if id is incorrect`, () => {
    // 1. test data
    let action = actions.deletePost(3);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
