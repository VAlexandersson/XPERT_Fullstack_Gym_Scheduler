import React from 'react';
import { useEffect, useState } from 'react';

const TestComponent: React.FC = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:4001/api/test')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

return (<p>{message}</p>)

};

export default TestComponent;