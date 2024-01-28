import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const usePageClass = () => {
    const location = useLocation();

    useEffect(() => {
        const pgClass = location.pathname.replace('/', '') || 'home';
        document.body.className = pgClass;
    }, [location]);
};

export default usePageClass;
