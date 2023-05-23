
const UserReviewSection = () => {
  const userReviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "I absolutely love the tech toys I bought from this shop! They are high-quality, innovative, and provide endless hours of entertainment. Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "The customer service at this tech toy shop is outstanding. The staff is knowledgeable, friendly, and helped me find the perfect toy for my kid. Will definitely shop here again!",
    },
    {
      id: 3,
      name: "Sam Johnson",
      review:
        "As a tech enthusiast, this shop is a dream come true. They have an amazing selection of the latest tech toys. I'm always excited to see what new products they have in stock. Great job!",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-4 text-center">User Reviews</h2>
        <p className="text-center mt-8 text-gray-700">
          At our tech toy shop, we prioritize customer satisfaction. Our dedicated team is committed to providing excellent customer service and ensuring that you have a positive shopping experience with us. If you have any questions or need assistance, feel free to reach out to our friendly customer care team. We are here to help!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded shadow">
              <p className="text-gray-600 mb-4">{review.review}</p>
              <p className="text-gray-800 font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default UserReviewSection;
