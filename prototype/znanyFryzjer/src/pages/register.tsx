import {
    Anchor,
    Box,
    Button,
    Center,
    Container,
    Flex,
    Group,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Title,
} from '@mantine/core'
import type React from 'react'
import {  useNavigate } from 'react-router-dom'

export const RegisterPage: React.FC = () => {
    const navigate = useNavigate()
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
                                        Rejestracja
                                    </Text>
                                </Center>
                                <TextInput label="Imię" placeholder="Imię" required />
                                <TextInput label="Email" placeholder="Email" required />
                                <PasswordInput label="Hasło" placeholder="Hasło" required />
                                <Button fullWidth mt="md">
                                    Zarejestruj się
                                </Button>
                                <Flex justify={'center'} align={'center'} pt={'md'}>
                                    <Text>Masz konto?</Text>
                                    <Text style={{ cursor: 'pointer', textDecoration: 'underline' }} ml="xs" variant="subtle" onClick={() => navigate('/')} c="teal.6">
                                        Zaloguj się
                                    </Text>
                                </Flex>
                            </Stack>
                        </Paper>
                    </Group>
                    <Flex h="30px" bg="teal.6" justify="center" align="center">
                        <Text c="dimmed" size="11px">
                            Opracowano przez Andrii i Andrzej
                        </Text>
                    </Flex>
                </Stack>
            </Center>
        </Container>
    )
}
