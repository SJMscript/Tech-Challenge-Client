import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { getPhoneDetailsService } from "../services/phones.services";

function OnePhone() {
  const navigate = useNavigate();

  const params = useParams();

  const [phone, setPhone] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


const getData = async () => {
    try {
        console.log(params.phoneId)
        console.log("testing single phone")
        const response = await getPhoneDetailsService(params.phoneId)
        console.log(response.data)
        setPhone(response.data)
        setIsLoading(false)
    } catch (error) {
        navigate("/error")
    }
}

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <FadeLoader color="rgba(255,99,71,1)" size={66} />
      </div>
    );
  }

  return (
    <div className="onePhone">
      <div className="onePhone-title">
        <h2>{phone.name}</h2>
        <p> - </p>
        <h3>{phone.manufacturer}</h3>
        <p>€{phone.price}</p>
      </div>
      <p>{phone.description}</p>
      <p>Color: {phone.color}</p>
      <p>Screen: {phone.screen}</p>
      <div className="onePhone-processor-ram">
        <p>Processor: {phone.processor}</p>
        <p>RAM: {phone.ram}GB</p>
      </div>

      <Link to={"/"}>Back</Link>
    </div>
  );
}

export default OnePhone;
