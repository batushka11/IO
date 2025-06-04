import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { theme } from './theme'

function App() {
	return (
		<MantineProvider theme={theme}>
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</MantineProvider>
	)
}

export default App
