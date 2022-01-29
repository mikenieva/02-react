// ./src/components/Home/index.js

import React, { useState, useEffect, useContext } from 'react';

import CommentContext from "./../../context/Comment/CommentContext"

export default function Home() {

	// ESTADO GLOBAL
	const ctxComments = useContext(CommentContext)

	const {
		comments,
		getAllComments,
		createComment
	} = ctxComments


	// ESTADO LOCAL
	const [data, setData] = useState({
		title: "",
		description: ""
	})

	const [error, setError] = useState("")

	// useEffect se ejecuta después del primer return
	useEffect(() => {
		getAllComments()
	}, []) // EL ARREGLO VACÍO SIGNIFICA QUE SOLO SE VA A EJECUTAR UNA VEZ


	const handleChange = (event) => {

		// 	setData es una función que reemplaza completamente data
		setData({
			...data,
			[event.target.name]: event.target.value
		})

	}

	const handleSubmit = (event) => {

		// EVITA LA RECARGA DE PÁGINA
		event.preventDefault()
		

		// VALIDACIÓN
		// SE VERIFIQUE QUE NO SE ENVÍEN DATOS VACÍOS
		if(!data.title || !data.description ){

			return setError("Tienes campos vacíos.")

		}


		// ACTUALIZACIÓN DE DATOS
		createComment(data)

		// data se vuelva a datos vacíos
		setData({
			title: "",
			description: ""
		})

		return setError("")

	}


  return (
	  <>
	  	<h1>Sección de comentarios</h1>
		
		<form onSubmit={ (evt) => { handleSubmit(evt) } }>
			<label>Título</label>
			<input 
				name="title"
				value={data.title}
				onChange={ (evt) => { handleChange(evt) } }
			/>

			<label>Descripción</label>
			<input 
				name="description"
				value={data.description}
				onChange={ (evt) => { handleChange(evt) } }
			/>

			<button type="submit">Enviar datos</button>

		</form>

		{ error ? error : null }

		<h2>Listado de comentarios</h2>

		<ul>
			{
				comments.map((e, index) => {
					return (
						<li key={index}>
							<h3>{e.title}</h3>
							<p>{e.description}</p>
						</li>
					)
				})
			}
		</ul>

	  </>
  )
}
