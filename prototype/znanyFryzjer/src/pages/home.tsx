import { Carousel } from '@mantine/carousel'
import {
	ActionIcon,
	Button,
	Container,
	Drawer,
	Flex,
	Group,
	Image,
	Stack,
	Title,
} from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { useRef, useState } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CompanyCard } from '../components/companyCard'
import ThemeSwitch from '../components/themeSwitcher'
import { useAppContext } from '../context/useAppContextHook'
import classes from './FooterSocial.module.css'

export const HomePage: React.FC = () => {
	const { companies } = useAppContext()
	const [opened, setOpened] = useState(false)
	const autoplay = useRef(Autoplay({ delay: 3000 }))

	return (
		<Container size={'xs'}>
			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
				position="right"
			>
				<Stack justify="space-between" h="100%">
					<ThemeSwitch />
					<Stack gap={'xs'} h={'100%'}>
						<Button.Group orientation="vertical">
							<Button variant="default">Główna</Button>
							<Button variant="default">Mój profil</Button>
							<Button variant="default">Barbershopy</Button>
						</Button.Group>
					</Stack>
					<Button>Wyloguj się</Button>
				</Stack>
			</Drawer>
			<Flex
				h="70px"
				bg="teal.6"
				justify="flex-end"
				style={{ borderRadius: '10px 10px 0 0' }}
				align="center"
			>
				<ActionIcon mr={'md'} onClick={() => setOpened(true)} size={30}>
					<GiHamburgerMenu size={40} />
				</ActionIcon>
			</Flex>
			<Stack my={'lg'} gap={'xs'}>
				<Title order={5}>Umów ponownie</Title>
				<CompanyCard company={companies[2]} />
			</Stack>
			<Stack my={'lg'} gap={'xs'}>
				<Title order={5}>Wyróżnione</Title>
				<Carousel
					slideGap="xs"
					controlsOffset="xs"
					controlSize={27}
					withControls={false}
					withIndicators
					emblaOptions={{
						loop: true,
						align: 'center',
					}}
					styles={{ indicator: { background: '#0D697A' } }}
					plugins={[autoplay.current]}
					onMouseEnter={autoplay.current.stop}
					onMouseLeave={() => autoplay.current.play()}
				>
					{companies.map((company) => (
						<Carousel.Slide key={company.id}>
							<CompanyCard company={company} />
						</Carousel.Slide>
					))}
				</Carousel>
			</Stack>
			<div className={classes.footer}>
				<Container className={classes.inner}>
					<Group justify="flex-start">
						<Image
							src="/logo.svg"
							alt="logo"
							width={60}
							height={60}
							style={{
								objectFit: 'contain',
							}}
						/>
					</Group>
					<Group
						gap={0}
						className={classes.links}
						justify="flex-end"
						wrap="nowrap"
					>
						<ActionIcon size="lg" color="gray" variant="subtle">
							<FaTwitter size={18} />
						</ActionIcon>
						<ActionIcon size="lg" color="gray" variant="subtle">
							<FaYoutube size={18} />
						</ActionIcon>
						<ActionIcon size="lg" color="gray" variant="subtle">
							<FaInstagram size={18} />
						</ActionIcon>
					</Group>
				</Container>
			</div>
		</Container>
	)
}
