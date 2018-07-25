import comments from './comments';


const initialState = {
	comments: [],
	users: []
};

function app(state = initialState, action) {
	return {
		comments: comments(state.comments, action),
		users: users(state.users, action)
	};
}
