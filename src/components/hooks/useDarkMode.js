import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
const [value, setValue] = useLocalStorage('darkMode')

    useEffect(() => {
        console.log("This is useEffect hook.")
        // check to see if the class is in localStorage
        if (value === true) {
            // if value from localStorage is true, add it to the class of the body element
            document.body.classList.add('dark-mode')
        } else {
            // remove the class from the body element
            document.body.classList.remove('dark-mode')
        }
    }, [value])

    return [value, setValue];
}