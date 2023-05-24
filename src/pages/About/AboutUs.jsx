

const AboutUs = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src='https://img.freepik.com/premium-photo/education-concept-books-science-equipment_488220-5377.jpg?w=740'alt="About Us" className="rounded-lg mb-4 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <p className="mb-4">
            Welcome to our tech toy shop! We are passionate about bringing the latest and most exciting tech toys to our customers. Whether you are a gadget enthusiast, a tech-savvy individual, or simply looking for a fun and educational toy, we have got you covered.
          </p>
          <p className="mb-4">
            At our store, you will find a wide range of tech toys that cater to all ages and interests. From remote-controlled drones and robots to virtual reality headsets and smart toys, we curate our collection to offer the best and most innovative products on the market.
          </p>
          <p className="mb-4">
            Our team is composed of tech enthusiasts who are dedicated to providing exceptional customer service. We are always available to assist you in finding the perfect tech toy or answering any questions you may have. Your satisfaction is our top priority.
          </p>
          <p className="mb-4">
            Shopping with us is not just about buying toys; it is about embracing the world of technology and exploring its endless possibilities. We believe that tech toys can inspire creativity, spark curiosity, and promote learning in a fun and engaging way.
          </p>
          <p className="mb-4">
            Thank you for choosing our tech toy shop. We look forward to serving you and helping you discover the exciting world of tech toys!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
