import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen lg:min-h-[600px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 
                    rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-12'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & experienced in this field!</h1>
                    <p className="py-6">At Car Doctor, we are dedicated to providing exceptional car maintenance and repair services to our valued customers. With years of experience in the automotive industry, our team of skilled technicians is committed to ensuring that your vehicle receives the highest quality of care.</p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;