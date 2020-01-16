import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Get from localStorage by key
        const item = window.localStorage.getItem(key)
        // Parse and return stored json or, if undefined, return initialValue
        return item ? // can item be returned from localStorage?
        JSON.parse(item) : // If yes, return the parsed item
        initialValue // if no, return the initial value
    })

    const setValue = (value) => {
        // Save state 
        setStoredValue(value)
        // Save the value to local storage 
        window.localStorage.setItem((key), JSON.stringify(value))
    }

    return [storedValue, setValue] 
}

