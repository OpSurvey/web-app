import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState('');
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return windowDimensions;
};
export default useWindowDimensions;