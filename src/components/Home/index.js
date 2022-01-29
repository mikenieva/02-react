// ./src/components/Home/index.js

import React, { useState } from 'react';

export default function Home() {

	// ESTADO LOCAL
	const [data, setData] = useState({
		title: "",
		description: ""
	})

	const handleChange = (event) => {

		console.log("event.target.name:", event.target.name)

		console.log("event.target.value", event.target.value)

		// 	setData es una función que reemplaza completamente data
		setData({
			...data,
			[event.target.name]: event.target.value
		})


	}

  return (
	  <>
	  	<h1>Sección de comentarios</h1>
		
		<form>
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

			<button>Enviar datos</button>

		</form>

	  </>
  )
}
