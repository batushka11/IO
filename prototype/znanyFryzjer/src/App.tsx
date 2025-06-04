import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { theme } from './theme'
import { RegisterPage } from './pages/register'

function App() {
	return (
		<MantineProvider theme={theme}>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</MantineProvider>
	)
}

export default App
