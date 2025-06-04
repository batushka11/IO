import {
	Center,
	Container,
	PasswordInput,
	Stack,
	TextInput,
} from '@mantine/core'
import type React from 'react'

export const LoginPage: React.FC = () => {
	return (
		<Container size='xl'>
			<Center>
				<form>
					<Stack gap='md'>
						<TextInput label='email' />
						<PasswordInput label='password' />
					</Stack>
				</form>
			</Center>
		</Container>
	)
}
