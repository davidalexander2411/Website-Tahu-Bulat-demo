import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
        <Header />
        <div className="min-h-screen bg-[rgb(254,215,0)] py-12 px-4">
            <div className="container figtree-normal mx-auto max-w-4xl pt-48">
                <h1 className="text-6xl figtree-bold text-center mb-8">ABOUT US</h1>
                <div className="space-y-6">
                    <section>
                    <h2 className="text-2xl figtree-bold mb-4">Our Story</h2>
                    <p className="text-lg">
                        Tahu Bulat began as a small street food stall, driven by a passion for delivering the most delicious and authentic Indonesian tofu experience. Our founder believed that great food starts with quality ingredients and traditional cooking methods.
                    </p>
                    </section>
            
                    <section>
                        <h2 className="text-2xl figtree-bold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            We aim to bring the rich culinary heritage of Indonesian street food to everyone, creating a memorable dining experience that connects people through delicious, affordable, and authentic tahu bulat.
                        </p>
                    </section>
            
                    <section>
                        <h2 className="text-2xl figtree-bold mb-4">Our Commitment</h2>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            <li>100% Halal ingredients</li>
                            <li>Fresh, locally sourced tofu</li>
                            <li>Traditional cooking techniques</li>
                            <li>Affordable pricing</li>
                            <li>Consistent quality</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl figtree-bold mb-4">The Tahu Bulat Experience</h2>
                    <p className="text-lg">
                        More than just a meal, Tahu Bulat is a celebration of Indonesian street food culture. Each bite tells a story of tradition, flavor, and community.
                    </p>
                    </section>
                </div>
            </div>
        </div>
        <Footer />
        </>
        
    );
  };
  
  export default About;