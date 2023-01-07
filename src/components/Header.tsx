import NavBar from './NavBar';

const Header = () => {
  return (
    <>
      <a href="#mainContent" className="skip-link hidden" role="button">
        Skip to Content
      </a>
      <header className="header p-7 w-full bg-primary text-white rounded-b-3xl shadow-md shadow-zinc-500">
        <NavBar />
        <div className="hero mt-1 min-h-[150px] w-full bg-hero-small bg-center bg-skeleton1 bg-cover flex justify-end items-end rounded-xl md:bg-hero-large">
          <h1 className="hero__tagline bg-primary font-medium text-lg py-3 pl-3 pr-0 rounded-tl-xl mb-[-1px] mr-[-1px]">
            #eatanywhere
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;