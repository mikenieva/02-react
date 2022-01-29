// ./src/components/Layout/index.js

import React from 'react';

import { Outlet, Link } from 'react-router-dom'


export default function Layout() {
  return (
	<>
		<header>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/ejercicio">Ejercicio</Link>
				</li>
			</ul>
		</header>

		<Outlet />

	</>
  )
}
