import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h1 className='m-3 text-3xl font-bold'>Oops!</h1>
      <p className='text-sm'>Sorry, an unexpected error has occured.</p>
      <div className='text-sm text-slate-500 text-center'>
        <p>No match for <code>{location.pathname}</code></p>
      </div>
    </div>
  );
};

export default ErrorPage;
