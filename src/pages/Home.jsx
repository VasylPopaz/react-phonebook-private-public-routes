import { Link } from 'react-router-dom';

import heroImg from 'assets/images/bg-hero.jpg';

const Home = () => {
  return (
    <div
      className="hero h-[calc(100dvh-64px)] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${heroImg}) `,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className=" title ">Your Phonebook</h1>
          <Link
            to={'/contacts'}
            className="btn text-black bg-violet-400 hover:bg-violet-700 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
