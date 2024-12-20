
import { createContext, useState } from 'react';

const AnalyticsContext = createContext(null)
export default AnalyticsContext

const format = (event) => 
	`EVENT: ${
		event.name
	} on ${
		event.analyticsId
	} at ${
		event.createdAt
	} DESCRIPTION: ${
		event.description
	}`

export const AnalyticsProvider = ({ children }) => {
	const [events, setEvents] = useState([]) 
	const handleEvent = (e, name) => {
		const { analyticsId, description } = e.currentTarget.dataset
		const event = { name, description, analyticsId, createdAt: Date.now() }
		setEvents(arr => [...arr, event])
	}

	const handleSubmit = async () => {
		const res = await fetch("api/mozart")
		const data = await res.json();
		console.log(data)
		//console.log(events.map(format))
	}

	return (
		<AnalyticsContext.Provider value={{ handleEvent, handleSubmit }}>
			{children}
		</AnalyticsContext.Provider>
	)
}

