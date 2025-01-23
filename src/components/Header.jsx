import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import ClaimVoucherModal from './ClaimVoucherModal';
import Logo from '../../public/img/Logo.png'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleAuthAction = async () => {
    if (user) {
      await supabase.auth.signOut();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const handleClaimClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      setShowClaimModal(true);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky 
          ? 'bg-black shadow-md py-4 text-[rgb(254,215,0)]' 
          : 'bg-[rgb(254,215,0)] py-8 text-black'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <button 
              onClick={handleAuthAction}
              className={`login absolute right-8 px-2 py-1 figtree-bold border-2 
              transition-all duration-300 
              ${isSticky 
                ? 'border-[rgb(254,215,0)] hover:bg-[rgb(254,215,0)] hover:text-black' 
                : 'border-black hover:bg-black hover:text-[rgb(254,215,0)]'
              }`}
            >
              {user ? 'SIGN OUT' : 'LOGIN'}
            </button>
            
            <div className="flex items-center justify-center mb-4">
              <a href="/">
              <img 
                src={Logo}
                alt="Tahu Bulat Logo" 
                className={`w-96 object-contain transition-all duration-300 ${
                  isSticky 
                    ? 'brightness-0 invert-[0.7] sepia-[1] hue-rotate-[180deg]' 
                    : ''
                }`}
                style={{
                  filter: isSticky 
                    ? 'brightness(0) saturate(100%) invert(77%) sepia(30%) hue-rotate(340deg) brightness(108%) contrast(105%)' 
                    : 'none',
                  WebkitFilter: !isSticky 
                    ? 'brightness(0)' 
                    : 'none'
                }}
              />
              </a>
            </div>

            <nav className="hidden figtree-bold md:flex space-x-12 py-2">
              {['HOME', 'MENU', 'REVIEWS', 'LOCATION', 'CLAIM'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'CLAIM' ? '#' : `/#${item.toLowerCase()}`}
                  onClick={item === 'CLAIM' ? handleClaimClick : undefined}
                  className={`nav-link relative px-2 py-1 ${
                    isSticky ? 'text-[rgb(254,215,0)]' : 'text-black'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <style jsx>{`
          .nav-link {
            overflow: hidden;
            display: inline-block;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${isSticky ? 'rgb(254,215,0)' : 'black'};
            transform: translateX(-101%);
            transition: transform 0.3s ease;
            z-index: 1;
          }

          .nav-link:hover::before {
            transform: translateX(0);
          }

          .nav-link span {
            transition: color 0.3s ease;
          }

          .nav-link:hover span {
            color: ${isSticky ? 'black' : 'rgb(254,215,0)'};
          }
        `}</style>
      </header>

      {showClaimModal && user && (
        <ClaimVoucherModal 
          user={user} 
          onClose={() => setShowClaimModal(false)} 
        />
      )}
    </>
  );
};

export default Header;