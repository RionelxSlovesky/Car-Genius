import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-genius-server-orcin.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-6">
            <div className="text-center">
                <h3 className="text-2xl text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Areas</h2>
                <p>Our mission is to deliver reliable and efficient car services that exceed customer expectations. Whether you need routine maintenance, such as oil changes and tire rotations, or more complex repairs, our knowledgeable team is here to help. We pride ourselves on using advanced diagnostic equipment and industry-leading techniques to accurately identify and address any issues your vehicle may have.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;