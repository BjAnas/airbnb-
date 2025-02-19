import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (username, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
            }
            if (response.ok) {
                // Save user to local storage
                localStorage.setItem('user', JSON.stringify(json));

                // Update auth context
                dispatch({ type: 'LOGIN', payload: json });

                setIsLoading(false);
            }
        } catch (err) {
            setIsLoading(false);
            setError('Failed to fetch');
        }
    }

    return { signup, isLoading, error };
}
