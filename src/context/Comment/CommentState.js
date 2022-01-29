import { useReducer } from 'react'

import CommentContext from './CommentContext'
import CommentReducer from './CommentReducer'

import axiosClient from './../../config/axios'


const CommentState = (props) => {

	// 1. ESTADO GLOBAL CON VALOR INICIAL
	const initialState = {
		comments: []
	}

	// 2. CONFIGURACIÓN DEL REDUCER
	const [globalState, dispatch] = useReducer(CommentReducer, initialState)


	// 3. FUNCIONES
	const getAllComments = async () => {

 		const res = await axiosClient.get("/api/comments/readall")

		dispatch({ // EL OBJETO ES EL ACTION
			type: "GET_ALL_COMMENTS",
			payload: res.data.data
		})

	}

	const createComment = async (dataForm) => {

		const res = await axiosClient.post("/api/comments/create", dataForm)

		console.log(res)

		getAllComments()

	}


	// 4. RETORNO
	return (
		<CommentContext.Provider
			value={{
				comments: globalState.comments,
				getAllComments,
				createComment
			}}
		>
			{ props.children }
		</CommentContext.Provider>
	)

}


export default CommentState
