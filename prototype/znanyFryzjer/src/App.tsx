import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { theme } from './theme'
import BarbershopPage from './pages/barbershop'

function App() {
	return (
		<AppProvider>
			<MantineProvider theme={theme}>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/barbershop/:id" element={<BarbershopPage />} />
				</Routes>
			</MantineProvider>
		</AppProvider>
	)
}

export default App
