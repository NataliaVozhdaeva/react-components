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
    throw new Error("we haven't got this pokemon");
  }
  return res.json();
};

export { getResource, getDetails, search };
