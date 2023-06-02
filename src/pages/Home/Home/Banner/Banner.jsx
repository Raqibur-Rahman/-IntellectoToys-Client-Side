import './Banner.css'
import picture1 from '../../../../assets/images/BannerPicture1.jpg';
import picture2 from '../../../../assets/images/BannerPicture2.jpg';
import picture3 from '../../../../assets/images/BannerPicture3.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={picture1} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center justify-between   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='lg:space-y-7 lg:w-1/3 p-1 pl-12' data-aos="zoom-in">
                            <h3 className='lg:text-3xl text-pink-700 font-bold lg:m-1 lg:p-1'>
                                Ignite Curiosity, Fuel Learning.
                            </h3>
                            <p className='lg:text-xl text-blue-300  lg:m-1 lg:p-1 '>
                                Educational Play for Young Minds! <br />
                                <small className=''> Welcome to intellectoToys, where learning becomes an adventure! Explore our wide range of educational toys, designed to unlock young minds and inspire curiosity.</small>
                            </p>
                            <p className='text-pink-300 lg:font-semibold'>Limited Time Offer: Get 20% Off All Science Kits!</p>
                            <button className="btn  btn-success lg:font-bold">
                                <Link to="/alltoys">Explore Now</Link>
                            </button>

                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={picture2} className="w-full" />

                    <div className="absolute h-full flex items-center justify-between   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='lg:space-y-7 lg:w-1/3 p-1 pl-12'>
                            <h3 className='lg:text-3xl text-pink-700 font-bold lg:m-1 lg:p-1'>
                                Unlock the Power of Learning!
                            </h3>
                            <p className='lg:text-xl text-blue-300  lg:m-1 lg:p-1 '>
                                Discover the Joy of Educational Play! <br />
                                <small className=''> We believe in the power of play to ignite curiosity and empower young minds. Discover our carefully selected educational toys that foster critical thinking, problem-solving skills, and a love for learning.</small>
                            </p>
                            <p className='text-pink-300 lg:font-semibold'>Math Mania Sale: Buy One, Get One 50% Off!</p>
                            <button className="btn  btn-success lg:font-bold">Explore Now</button>
                        </div>
                    </div>

                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={picture3} className="w-full" />

                    <div className="absolute h-full flex items-center justify-between   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='lg:space-y-7 lg:w-1/3 p-1 pl-12'>
                            <h3 className='lg:text-3xl text-pink-700 font-bold lg:m-1 lg:p-1'>
                                Build the Innovators of Tomorrow!
                            </h3>
                            <p className='lg:text-xl text-blue-300  lg:m-1 lg:p-1 '>
                                Inspire, Create, Engineer! <br />
                                <small className=''> Our engineering kits and tools are designed to inspire creativity, critical thinking, and a passion for innovation. From building intricate models to experimenting with real engineering principles, our toys encourage hands-on learning. </small>
                            </p>
                            <p className='text-pink-300 lg:font-semibold'>Free Tool Set with Engineering Kits!</p>
                            <button className="btn  btn-success lg:font-bold">Explore Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;