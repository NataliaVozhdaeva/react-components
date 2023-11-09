import API_PATH from './constants';

const base = API_PATH;

const getResource = async (url: string | undefined) => {
  if (!url) url = '';
  const res = await fetch(`${base}${url}`);

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

const search = async (term: string) => {
  const res = await fetch(`${base}${term}`);

  if (!res.ok) {
    throw new Error('We havent got this pokemon');
  }
  return res.json();
};

const getPage = async (limit: number) => {
  const res = await getResource(`?limit=${limit}&offset=${limit + limit}`);
  return res.results;
};

export { getResource, getDetails, search, getPage };
