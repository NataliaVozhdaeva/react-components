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

const search = async (searchUrl: string, term: string) => {
  const res = await getResource(`${searchUrl}/?search=${term}`);
  return res.results;
};

const getPage = async (searchUrl: string, page: number) => {
  const res = await getResource(`${searchUrl}/?page=${page}`);
  return res.results;
};

export { getResource, search, getPage };
