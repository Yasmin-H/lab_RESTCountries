import Country from "./Country";

const VisitedCountries = ({countries}) => {

    const countryComponents = countries.map((country) => <Country country={country}/>)

    return (
        <>
        <h3>Visited Countries</h3>
        <ul>
        {countryComponents} </ul>
        </>
     );
}
 
export default VisitedCountries;