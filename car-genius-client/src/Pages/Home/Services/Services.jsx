import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-6">
            <div className="text-center">
                <h3 className="text-2xl text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Areas</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aspernatur neque quod laboriosam quaerat eos mollitia? <br /> Libero ducimus fuga dignissimos exercitationem ut. Quidem ducimus nemo mollitia repudiandae minima dicta aspernatur autem nobis praesentium nesciunt cum.</p>
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