import {
	Box,
	Button,
	Center,
	Container,
	Group,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from '@mantine/core'
import type React from 'react'

export const LoginPage: React.FC = () => {
	return (
		<Container size="xs">
			<Center mih="100vh">
				<Stack w="100%" mih="100vh" justify="space-between">
					<Box h="30px"></Box>
					<Group w="100%">
						<Center w="100%" mb="lg">
							<Title order={1}>Znany Fryzjer</Title>
						</Center>
						<Paper withBorder p="xl" radius="md" w="100%">
							<Stack gap="md">
								<Center>
									<Text size="xl" fw={700}>
										Logowanie
									</Text>
								</Center>
								<TextInput label="Email" placeholder="Email" required />
								<PasswordInput label="Hasło" placeholder="Hasło" required />
								<Button fullWidth mt="md">
									Zaloguj się
								</Button>
							</Stack>
						</Paper>
					</Group>
					<Box h="30px" bg="teal.6">
						<Text c="dimmed" size="xs">
							Opracowano przez polskich studentów
						</Text>
					</Box>
				</Stack>
			</Center>
		</Container>
	)
}
