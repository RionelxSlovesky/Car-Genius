import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, img, price } = service;

    return (
        <div>
            <h2>{title}</h2>
            <h2>{price}</h2>

        </div>
    );
};

export default CheckOut;