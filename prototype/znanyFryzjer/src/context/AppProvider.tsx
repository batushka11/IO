import { createContext, useState } from 'react'
import type { User } from '../types/user'

type AppContextType = {
	users: User[]
	setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [users, setUsers] = useState<User[]>([])

	return (
		<AppContext.Provider value={{ users, setUsers }}>
			{children}
		</AppContext.Provider>
	)
}
