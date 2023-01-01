import NavBar from './components/NavBar';

function App(): JSX.Element {
  return (
    <div className="root-container text-xs text-fontPrimary bg-secondary h-screen flex flex-col justify-between items-center">
      <a href="#mainContent" className="skip-link hidden" role="button">
        Skip to Content
      </a>
      <header className="header p-7 w-full bg-primary text-white rounded-b-3xl">
        <NavBar />
        <div className="hero mt-1 min-h-[150px] w-full bg-hero-small bg-center bg-skeleton1 bg-cover flex justify-end items-end rounded-xl md:bg-hero-large">
          <h1 className="hero__tagline bg-primary font-medium text-lg py-3 pl-3 pr-0 rounded-tl-xl mb-[-1px] mr-[-1px]">
            #eatanywhere
          </h1>
        </div>
      </header>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <main id="mainContent" className="main" tabIndex={0} />
      <footer className="footer sticky w-full p-4 text-center bg-primary text-white z-20">
        <p>Copyright © 2022 - Find Resto</p>
      </footer>
    </div>
  );
}

export default App;
