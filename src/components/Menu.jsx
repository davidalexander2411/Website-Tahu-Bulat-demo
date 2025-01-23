import useScrollAnimation from '../hooks/useScrollAnimation';

const Menu = () => {
  const sectionRef = useScrollAnimation();

	return (
		<>
			<div ref={sectionRef}>
				<div id="menu" className="text-6xl pt-48 pb-8 figtree-bold flex justify-center">
				MENU
				</div>
				<div className="max-w-4xl mx-auto px-4 pb-32 figtree-normal">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

						<div>
							<h2 className="text-3xl figtree-bold mb-4">TAHU BULAT</h2>
								<img
								src="../public/img/TahuBulatMenu.jpg"
								alt="Tahu Bulat dish"
								className="w-[400px] object-cover rounded-lg drop-shadow-2xl mb-4" />
							<p className="text-sm">
								Our signature round tofu, crispy on the outside and soft on the inside.
								Made fresh daily with premium soybeans and deep-fried to golden perfection.
							</p>
						</div>
						<div>
							<h2 className="text-3xl figtree-bold mb-4">SOTONG</h2>
							<img
								src="../public/img/SotongMenu.jpg"
								alt="Sotong dish"
								className="w-[400px] object-cover rounded-lg drop-shadow-2xl mb-4" />
							<p className="text-sm">
								Fried fresh, crispy batter and deep-fried
								until golden brown. Perfectly seasoned and served with a tangy sauce.
								A perfect pair with our tahu bulat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
