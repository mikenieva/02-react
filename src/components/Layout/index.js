// ./src/components/Layout/index.js

import React, { useState, useContext } from 'react';

import { Outlet, Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext';


export default function Layout() {

	const ctxUser = useContext(UserContext)

	const { authStatus } = ctxUser


	const [activeProfile, setActiveProfile] = useState(false)
	const [activeMenu, setActiveMenu] = useState(false)

	const handleActiveProfile = (event) => {

		event.preventDefault()

		setActiveProfile(!activeProfile)

	}

	const handleActiveMenu = (event) => {

		event.preventDefault()

		setActiveMenu(!activeMenu)

	}

	return (
		<>
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu"
								aria-expanded="false"
								onClick={(evt) => { handleActiveMenu(evt) }}
							>
								<span className="sr-only">Open main menu</span>
								<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
								<svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
								<img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
							</div>

							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									<Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
										Guiado con Mike
									</Link>

									<Link to="/ejercicio" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Ejercicio
									</Link>
								</div>
							</div>


						</div>


						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<div className="ml-3 relative">

								{
									authStatus ?
										<>
											<div>
												<button
													type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
													onClick={(evt) => {
														handleActiveProfile(evt)
													}}
												>
													<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
												</button>
											</div>
										</>
										:
										<>
											<div class="hidden md:flex md:items-center md:space-x-6">
												<Link to="/login" class="text-base font-medium text-white hover:text-gray-300">
													Inicia sesión
												</Link>
												<Link to="/registro" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
													Crea una cuenta
												</Link>
											</div>
										</>

								}


								{

									activeProfile ?
										<>
											<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
												<Link
													to="/profile"
													className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
													tabindex="-1">
													Tu perfil
												</Link>
												<Link
													to="/"
													className="block px-4 py-2 text-sm text-gray-700"
													role="menuitem"
													tabindex="-1">
													Cerrar sesión
												</Link>
											</div>
										</>
										:
										null
								}

							</div>
						</div>
					</div>
				</div>

				{
					activeMenu ?
						<>
							<div className="sm:hidden" id="mobile-menu">
								<div className="px-2 pt-2 pb-3 space-y-1">

									<Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
										Guiado con Mike
									</Link>

									<Link to="/ejercicio" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Ejercicio
									</Link>

									{authStatus ?

										<>
											<Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
												Tu perfil
											</Link>

											<Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
												Cerrar sesión
											</Link>
										</>	
										:
										<>
											<Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
												Inicia sesión
											</Link>

											<Link to="/registro" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
												Crea tu cuenta
											</Link>
										</>
									}

								</div>
							</div>
						</>
						:
						null
				}


			</nav>

			<Outlet />

		</>
	)
}
