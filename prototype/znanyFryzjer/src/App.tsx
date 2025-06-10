import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'
import BarbershopPage from './pages/barbershop'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { ProfilePage } from './pages/profile'
import { RegisterPage } from './pages/register'
import { theme } from './theme'

function App() {
	return (
		<AppProvider>
			<MantineProvider theme={theme}>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/barbershop/:id" element={<BarbershopPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</MantineProvider>
		</AppProvider>
	)
}

export default App
