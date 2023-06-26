import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPhonesService } from "../services/phones.services.js";
import { FadeLoader } from "react-spinners";

function Phones () {

    const navigate = useNavigate();

    const [phones, setPhones] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [phoneDetails, setPhoneDetails] = useState(false);

    const getData = async () => {
        try{
            const response = await getPhonesService();
            setPhones(response.data);
            setIsLoading(false);
        } catch(error) {
            navigate("/error");
        }
    }

    useEffect(() => {
        getData();
    },[])

    const handlePhoneDetails = (e) => {
        setPhoneDetails(true);
    }

    if(isLoading){
        return(
            <div>
                <FadeLoader color="rgba(255,99,71,1)" size={66}/>
            </div>
        )
    }

    return(
        <div className="phonesList">
            <h1>See our Phones Here!</h1>
            {!phoneDetails && phones.map(phone =>{
                return <Link key={phone.id} onClick={handlePhoneDetails} to={`/${phone.id}`}>
                <h2>{phone.name}</h2>
                </Link>
            })}
        </div>
    )
}

export default Phones

