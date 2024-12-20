import { useContext } from 'react';
import AnalyticsContext from './context';
import Button from '../veiw/button';

const Submit = () => {
    const { handleSubmit } = useContext(AnalyticsContext);
    return <Button text="Submit" onClick={handleSubmit} />;
};

export default Submit;
