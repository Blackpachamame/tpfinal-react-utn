import React, { useEffect } from 'react';

export default function BtnVolver() {
    useEffect(() => {
        // Este código se ejecutará después de que el componente se monte en el DOM
        const script = document.createElement('script');
        script.src = 'js/volver.js';
        script.async = true;
        document.body.appendChild(script);

        // Este código se ejecutará cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a href="#" className="botonVolver">
            <i className="bi bi-arrow-bar-up"></i>
        </a>
    );
}
