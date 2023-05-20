const Country = ({country , visitCountry}) => {
    return ( 
        <li>{country.name.common} - 
        {country.flag} - 
    {visitCountry ? <button onClick={() => visitCountry(country)}>Visit!</button> : null}
    </li>
    );
}
 
export default Country;