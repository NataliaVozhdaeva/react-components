import API_PATH from './constants';

export default class ApiService {
  base: string;

  constructor() {
    this.base = API_PATH;
  }

  async getResource(url: string | undefined) {
    if (!url) url = '';
    const res = await fetch(`${this.base}${url}`);

    if (!res.ok) {
      throw new Error('error');
    }

    return res.json();
  }

  async search(searchUrl: string, term: string) {
    const res = await this.getResource(`${searchUrl}/?search=${term}`);
    return res.results;
  }
}
