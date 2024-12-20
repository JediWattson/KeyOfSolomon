import { createContext, useState } from 'react';
import Card from '../veiw/card'

const AnalyticsContext = createContext(null)
export default AnalyticsContext

const readStream = async (streamBody, setAnalysis) => {
	setAnalysis("")
	const textDecoder = new TextDecoder();
	for await (const value of streamBody) {
		try {
			const textChunk = textDecoder.decode(value);
			setAnalysis(prev => prev + textChunk)
		} catch (e) {
			console.log(e)
		}
	}
}

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
	const [analysis, setAnalysis] = useState("")
	const handleEvent = (e, name) => {
		const { analyticsId, description } = e.currentTarget.dataset
		const event = { name, description, analyticsId, createdAt: Date.now() }
		setEvents(arr => [...arr, event])
	}

	const handleSubmit = async () => {
		const body = JSON.stringify({
			seq: events.map(format).splice(-100).join("\n")
		})
		const res = await fetch("api/mozart", { body, method: "POST" })
		readStream(res.body, setAnalysis)
	}

	return (
		<AnalyticsContext.Provider value={{ handleEvent, handleSubmit }}>
			{analysis !== "" 
				? <Card title="Analysis of events" subtitle={analysis} />
				: children
			}
		</AnalyticsContext.Provider>
	)
}

