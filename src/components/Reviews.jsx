import { useState, useEffect, useRef } from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const sectionRef = useScrollAnimation();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=6');
      const data = await response.json();
      
      const reviewsData = data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        image: user.picture.large,
        review: getRandomReview()
      }));
      
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const getRandomReview = () => {
    const reviews = [
      "Tahu Bulat terenak yang pernah saya coba! Renyah di luar, lembut di dalam. Saus pedasnya pas banget!",
      "Sotong-nya fresh dan crispy. Porsinya juga pas. Recommended banget!",
      "Menu favorit keluarga kami! Harga terjangkau dengan kualitas premium. Pasti bakal balik lagi!",
      "Pelayanannya ramah dan cepat. Tempatnya juga bersih dan nyaman. Worth it!",
      "Rasanya konsisten dari dulu, selalu enak. Jadi langganan tiap weekend!"
    ];
    return reviews[Math.floor(Math.random() * reviews.length)];
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div id="reviews" ref={sectionRef} className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl figtree-bold text-center mb-16">CUSTOMER REVIEWS</h2>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 cursor-grab p-6 scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 bg-gray-950 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 drop-shadow-xl"
              style={{
                userSelect: isDragging ? 'none' : 'auto',
              }}
            >
              <div 
                className="flex flex-col items-center"
                style={{
                  pointerEvents: isDragging ? 'none' : 'auto',
                }}
              >
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl text-[rgb(254,215,0)] font-bold mb-1 figtree-bold">{review.name}</h3>
                <p className="text-center text-[rgb(254,215,0)] figtree-normal">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
