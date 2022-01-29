export default (globalState, action) => {

	switch(action.type){

		case "GET_ALL_COMMENTS":
			return {
				...globalState,
				comments: action.payload
			}

		default:
			return globalState

	}


}