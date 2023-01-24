import { createContext, useContext, useState } from 'react';
import Test from './test';
import Result from './result';
import Start from './start';

const HandleUrlContext = createContext(null);

export default function Index() {
  const [url, setUrl] = useState('test');

  const handleUrl = (page) => {
    setUrl(page);
  };

  const pages = {
    start: <Start />,
    test: <Test />,
    result: <Result />,
  };

  return (
    <HandleUrlContext.Provider value={handleUrl}>
      {pages[url]}
    </HandleUrlContext.Provider>
  );
}

export function useHandleUrl() {
  const handleUrl = useContext(HandleUrlContext);
  if (!handleUrl) throw new Error('Cannot find HandleUrlContext(index.jsx)');
  return handleUrl;
}
