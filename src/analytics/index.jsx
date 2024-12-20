import { useContext } from 'react';
import AnalyticsContext from './context';

const Analytics = ({ children, id, description }) => {
    const { handleEvent } = useContext(AnalyticsContext);
    return (
        <div
            style={{ cursor: 'pointer' }}
            data-analytics-id={id}
            data-description={description}
            onMouseLeave={e => handleEvent(e, 'mouse-leave')}
            onMouseEnter={e => handleEvent(e, 'mouse-enter')}
            onClick={e => handleEvent(e, 'click')}
        >
            {children}
        </div>
    );
};

export default Analytics;
