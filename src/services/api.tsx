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

  async search(url: string, term: string) {
    const res = await this.getResource(`${url}/?search=${term}`);
    return res.results;
  }

  async getAllPeople() {
    const res = await this.getResource('people/');

    return res.results;
  }

  async getPerson(id: string) {
    const res = await this.getResource(`people/${id}/`);

    return res;
  }
}
