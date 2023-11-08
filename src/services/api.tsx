import API_PATH from './constants';

const base = API_PATH;

const getResource = async () => {
  const res = await fetch(`${base}`);

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
};

const getDetails = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('We havent got any details');
  }
  return res.json();
};

/* const search = async (searchUrl: string, term: string) => {
  const res = await getResource(`${searchUrl}/?search=${term}`);
  return res.results;
};

const getPage = async (searchUrl: string, page: number) => {
  const res = await getResource(`${searchUrl}/?page=${page}`);
  return res.results;
}; */

export { getResource, getDetails /*,  search, getPage */ };
