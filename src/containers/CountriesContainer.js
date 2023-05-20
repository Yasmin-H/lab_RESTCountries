import { useEffect, useState } from "react";
import Countries from "../components/countries";
import VisitedCountries from "../components/VisitedCountries";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]); // REMEMBER YOU'RE DEALING WITH ARRAYS SO PREP AN EMPTY ARRAY
    const [visitedCountries , setVisitedCountries] = useState([]);

    let global_apiData;
    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
    // can filter jsonData , then set it 
    // const filteredJson = jsonData.filter((country) => country.region === "Asia") if only want asian countries
    // const filteredJson = jsonData.filter((country) => country.name.common === "Hungary")
        setCountries(jsonData);
    }



    useEffect( () => {
        fetchCountries()
    }, [])

    const visitCountry = (country) => {
        setVisitedCountries([...visitedCountries, country]) // visitedcountries + country ( combining together)
    } 

    return ( 
        <>
            <p>Hello from CountriesContainer!</p>
            <Countries countries={countries} visitCountry={visitCountry}/>
            <VisitedCountries countries={visitedCountries}/>
        
        </>
     );
}
 
export default CountriesContainer;