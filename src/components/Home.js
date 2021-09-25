import { useEffect, useState } from 'react';
import Bloglist from './Bloglist';
import ChooseAuthor from './ChooseAuthor';
import Loading from './Loading';
import useFetch from '../costomHooks/UseFetch';

const Home = () => {
  // VARS

  const [chosenAut, setChosenAut] = useState('');
  // comming from costum hook
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );
  // TEMPLATE
  return (
    <div className='home'>
      {isPending && <Loading />}
      {error && <div className='error'>{error}</div>}
      {!isPending && (
        <ChooseAuthor setChosenAut={setChosenAut} chosenAut={chosenAut} />
      )}
      {blogs && (
        <Bloglist classList='bolgEl' blogs={blogs} title='I componimenti' />
      )}
    </div>
  );
};
export default Home;

// TO CREATE A LOCAL SERVER THAT RETURNS data/db -> npx json-server --watch data/db.json --port 8000
