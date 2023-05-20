import Country from "./Country";

const Countries = ({countries, visitCountry}) => {

    const countryComponents = countries.map((country) => <Country country={country} visitCountry={visitCountry}/>)

    return ( 
        <ul>
        {countryComponents} </ul>
     );
}
 
export default Countries;