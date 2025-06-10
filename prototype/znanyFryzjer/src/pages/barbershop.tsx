import { ActionIcon, Container, Flex, Image, Stack, Title } from '@mantine/core'
import { FaAngleDown } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/footer'
import { useAppContext } from '../context/useAppContextHook'

export const BarbershopPage: React.FC = () => {
	const { id } = useParams()
	const { companies } = useAppContext()

	return (
		<Container size="xs">
			<Image
				style={{ borderRadius: '10px 10px 0 0' }}
				h={200}
				src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
			/>
			<Stack my={'lg'} gap={'xs'}>
				<Flex align={'center'}>
					<Title>{companies[Number(id)].name}</Title>
					<ActionIcon flex={'flex-end'} ml={'xl'} variant="transparent">
						<FaAngleDown size={0} />
					</ActionIcon>
				</Flex>
			</Stack>
			<Footer />
		</Container>
	)
}

export default BarbershopPage
