import useScrollAnimation from '../hooks/useScrollAnimation';

const Location = () => {
  const sectionRef = useScrollAnimation();

	return (
		<>
            <div id="location" ref={sectionRef} className="flex flex-col items-center p-32">
                <img 
                  src="img/Location.png"
                  className="w-20 mb-8"
                ></img>
                <h2 className="text-6xl figtree-bold text-center ">HOURS & LOCATION</h2> 
                <a 
                  href="https://maps.app.goo.gl/71AYydjBZSbcn4jf7"
                  className="text-xl w-[400px] figtree-normal text-center underline p-8">
                  Jl. Sultan Agung No.14, Jakarta Selatan, Daerah Khusus Ibukota Jakarta, 12980
                </a>
                <h2 className="text-2xl figtree-bold text-center">OPEN 7 DAYS A WEEK!</h2>
                <h2 className="text-2xl figtree-bold text-center">11:30 AM - 9 PM OR UNTIL WE SELL OUT</h2>
                <div className="w-[1000px] aspect-video mt-8 shadow-lg rounded-lg overflow-hidden">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2618843530555!2d106.82244067501!3d-6.227158261556751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e5f2c1%3A0x5b42e7a07cf33ae2!2sJl.%20Sultan%20Agung%20No.14%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1705987654321!5m2!1sen!2sid"
                    style={{
                      border: 0,
                      filter: 'invert(90%) hue-rotate(180deg)'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    ></iframe>
                </div>
            </div>
		</>
	);
}

export default Location;