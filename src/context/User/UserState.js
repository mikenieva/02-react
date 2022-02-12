import { useReducer } from 'react'

import UserContext from './UserContext'
import UserReducer from './UserReducer'

import axiosClient from './../../config/axios'


const UserState = (props) => {

	// 1. ESTADO GLOBAL CON VALOR INICIAL
	const initialState = {
		currentUser: {
			name: "",
			lastname: "",
			email: ""			
		},
		authStatus: false
	}

	// 2. CONFIGURACIÓN DEL REDUCER
	const [globalState, dispatch] = useReducer(UserReducer, initialState)

	// 3. FUNCIONES

	const createUser = async (dataForm) => {

		const res = await axiosClient.post("/api/users/create", dataForm)

		console.log(res)

	}



	// 4. RETORNO
	return (
		<UserContext.Provider
			value={{
				currentUser: globalState.currentUser,
				authStatus: globalState.authStatus,
				createUser
			}}
		>
			{ props.children }
		</UserContext.Provider>
	)

}

export default UserState

