'use client';

import Card from '../veiw/card';
import Analytics from '../analytics';
import AnalyticsSubmit from '../analytics/submit';
import { AnalyticsProvider } from '../analytics/context';

const flexBox = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
};

const Mozart = () => {
    return (
        <AnalyticsProvider>
            <div
                style={{
                    ...flexBox,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div style={flexBox}>
                    <Analytics
                        id="hello-world"
                        description="This is card I made in React"
                    >
                        <Card title="Hello world" subtitle="first instance" />
                    </Analytics>
                    <Analytics
                        id="second-card"
                        description="This is my second card for this project"
                    >
                        <Card title="Second Card" subtitle="second instance" />
                    </Analytics>
                </div>
                <AnalyticsSubmit />
            </div>
        </AnalyticsProvider>
    );
};

export default Mozart;
