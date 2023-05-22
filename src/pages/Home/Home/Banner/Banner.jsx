import './Banner.css'
import picture1 from '../../../../assets/images/BannerPicture1.jpg';
import picture2 from '../../../../assets/images/BannerPicture2.jpg';
import picture3 from '../../../../assets/images/BannerPicture3.jpg';
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={picture1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center text-center">
                        <div>
                            <h3 className='text-1xl lg:text-5xl text-pink-700 font-bold m-1'>
                                Ignite Curiosity. Fuel Learning.
                            </h3>
                            <p className='lg:text-3xl text-white font-semibold m-1'>
                                Educational Play for Young Minds!
                            </p>
                            <p className='lg:text-3xl text-fuchsia-950  m-1'>
                                Welcome to intellectoToys, where learning becomes an adventure! Explore our wide range of educational toys, designed to unlock young minds and inspire curiosity.
                            </p>
                            <p>Limited Time Offer: Get 20% Off All Science Kits!</p>
                            <button className="btn btn-outline btn-success font-bold">Explore Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={picture2} className="w-full" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center text-center">
                        <div>
                            <h3 className='text-1xl lg:text-5xl text-pink-700 font-bold m-1'>
                                Building Tomorrow's Innovators!
                            </h3>
                            <p className='lg:text-3xl text-white font-semibold m-1'>
                                Inspire, Create, Engineer!
                            </p>
                            <p className='lg:text-3xl text-fuchsia-950  m-1'>
                                Join intellectoToys in building tomorrow's innovators! Our engineering kits and tools inspire creativity and critical thinking. From intricate models to real-world principles, hands-on learning is made exciting.
                            </p>
                            <p>Math Mania Sale: Buy One, Get One 50% Off!</p>
                            <button className="btn btn-outline btn-success font-bold">Explore Now</button>
                        </div>
                    </div>

                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={picture3} className="w-full" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center text-center">
                        <div>
                            <h3 className='text-1xl lg:text-5xl text-pink-700 font-bold m-1'>
                                Unlock the Power of Learning!
                            </h3>
                            <p className='lg:text-3xl text-white font-semibold m-1'>
                                Discover the Joy of Educational Play!
                            </p>
                            <p className='lg:text-3xl text-fuchsia-950  m-1'>
                                We believe in the power of play to ignite curiosity and empower young minds. Discover our carefully selected educational toys that foster critical thinking, problem-solving skills, and a love for learning.
                            </p>
                            <p>Engineer's Delight: Free Tool Set with Engineering Kits!</p>
                            <button className="btn btn-outline btn-success font-bold">Success</button>
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