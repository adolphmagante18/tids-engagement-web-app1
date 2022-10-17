import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Container from './Container'
import { useAppSelector } from './redux/hooks'
import { getUserSession } from './redux/userSessionSlice'
import Auth from './Auth'
import Login from './Login'

function App() {
	const userSession = useAppSelector(getUserSession)
	const isUserAuthenticated = userSession.email ? true : false

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/dashboard' element={isUserAuthenticated ? <Container /> : <Navigate to={'/login'} />}>
					{/** TODO: Add nested routes here */}
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/auth' element={<Auth />}  />
				<Route
					path="*"
					element={
						<main style={{ padding: '10px' }}>
							<p>Requested page does not exist! Try &apos;/dashboard&apos;</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
