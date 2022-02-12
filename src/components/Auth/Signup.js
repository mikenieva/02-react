// ./components/Auth/Signup.js

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'

export default function Signup() {

	const ctx = useContext(UserContext)

	const { createUser } = ctx

	const [form, setForm] = useState({
		name: "",
		lastname: "",
		email: "",
		password: ""
	})


	const handleChange = (event) => {

		setForm({
			...form,
			[event.target.name]: event.target.value
		})

	}


	const handleSubmit = (event) => {

		event.preventDefault()

		createUser(form)

	}



	return (
		<>
			<div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Crea tu cuenta</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						O,
						<Link to="/login" 
						className="font-medium text-indigo-600 hover:text-indigo-500"> inicia sesión.</Link>
					</p>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form 
							onSubmit={(evt) => { handleSubmit(evt) }}
							className="space-y-6">
						<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700"> Nombre </label>
								<div className="mt-1">
									<input 
										id="name" 
										name="name" 
										type="text"
										value={form.name}
										onChange={ (evt) => { handleChange(evt) }} 
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
								</div>
							</div>							
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700"> Apellido </label>
								<div className="mt-1">
								<input 
									id="lastname" 
									name="lastname" 
									type="text" 
									value={form.lastname} 
									onChange={ (evt) => { handleChange(evt) }} 
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
								/>
								</div>
							</div>							
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
								<div className="mt-1">
									<input 
										id="email" 
										name="email" 
										type="email" 
										value={form.email} 
										onChange={ (evt) => { handleChange(evt) }} 
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
								</div>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
								<div className="mt-1">
									<input 
										id="password" 
										name="password" 
										type="password" 
										value={form.password} 
										onChange={ (evt) => { handleChange(evt) }} 
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
								</div>
							</div>

							<div>
								<button 
									type="submit" 
									className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Crear cuenta
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>

	)
}