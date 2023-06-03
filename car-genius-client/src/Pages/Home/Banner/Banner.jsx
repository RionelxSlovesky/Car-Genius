import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} />
                <div>
                    <div className='absolute h-full left-0 right-0 bottom-0 px-8 text-white space-y-2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center md:space-y-8 md:w-2/3 md:px-16'>
                        <h1 className='text-base font-bold md:text-4xl'>Car Services at your Fingertips!</h1>
                        <p className='text-xs md:text-base'>Your Car, Our Responsibility.</p>
                        <div>
                            <button className="btn btn-error me-5 text-white text-xs md:text-base">Discover More</button>
                            <button className="btn btn-warning text-xs md:text-base mb-8">Available Services</button>
                        </div>

                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} />
                <div>
                    <div className='absolute h-full left-0 right-0 bottom-0 px-8 text-white space-y-2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center md:space-y-8 md:w-2/3 md:px-16'>
                        <h1 className='text-base font-bold md:text-4xl'>You Deserve Only The Best!</h1>
                        <p className='text-xs md:text-base'>All of our technicians have at least 5 years of experience in automation.</p>
                        <div>
                            <button className="btn btn-error me-5 text-white text-xs md:text-base">Discover More</button>
                            <button className="btn btn-warning text-xs md:text-base mb-8">Available Services</button>
                        </div>

                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} />
                <div>
                    <div className='absolute h-full left-0 right-0 bottom-0 px-8 text-white space-y-2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center md:space-y-8 md:w-2/3 md:px-16'>
                        <h1 className='text-base font-bold md:text-4xl'>So What Are You Waiting For?</h1>
                        <p className='text-xs md:text-base'>Sign Up and book your car service today!</p>
                        <div>
                            <button className="btn btn-error me-5 text-white text-xs md:text-base">Discover More</button>
                            <button className="btn btn-warning text-xs md:text-base mb-8">Available Services</button>
                        </div>

                    </div>
                    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;