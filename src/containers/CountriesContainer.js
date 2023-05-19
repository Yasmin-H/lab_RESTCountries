import { useEffect, useState } from "react";
import Countries from "../components/countries";

const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();

        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return ( 
        <>
            <p>Hello from CountriesContainer!</p>
            <Countries country={countries}/>
            <Countries country={countries}/>
            <Countries country={countries}/>
        </>
     );
}
 
export default CountriesContainer;