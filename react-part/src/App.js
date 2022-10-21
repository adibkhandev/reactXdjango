import React from 'react'
import App2 from './App2'
import Admin from './Admin'
import {Routes,Route,Link} from 'react-router-dom'
const Routing = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Nav/>}>
					
				</Route>
				<Route path="/admin" element={<Admin/>} >
					
				</Route>
				<Route path="/app" element={<App2/>} >
					
				</Route>
			</Routes>
		</>
	)
}

const Nav =()=>{
	
	return(
		<nav>
			<ul>
				<li><Link to='admin' >Admin</Link></li>
				<li><Link to='app' >App</Link></li>

				<li></li>
			</ul>
		</nav>

	)
}



export default Routing