import { createContext, useContext, useState } from 'react';
import Test from './test';
import Result from './result';
import Start from './start';

const HandleUrlContext = createContext(null);

export default function Index() {
  const [url, setUrl] = useState('start');

  const handleUrl = (page) => {
    setUrl(page);
  };

  // react router 쓰는게 유리하지않을까;;
  const pages = {
    start: <Start />,
    test: <Test />,
    result: <Result />,
  };

  const openPage = () => {
    if (!pages[url]) {
      throw new Error(`Unhandled url ${url}`);
    }
    return pages[url];
  };

  return (
    <HandleUrlContext.Provider value={handleUrl}>
      {openPage()}
    </HandleUrlContext.Provider>
  );
}

export function useHandleUrl() {
  const handleUrl = useContext(HandleUrlContext);
  if (!handleUrl) throw new Error('Cannot find HandleUrlContext(index.jsx)');
  return handleUrl;
}
