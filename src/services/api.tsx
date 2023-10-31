import API_PATH from './constants';

export default class ApiService {
  base: string;

  constructor() {
    this.base = API_PATH;
  }

  async getResource(url: string) {
    const res = await fetch(`${this.base}${url}`);

    if (!res.ok) {
      throw new Error('error');
    }

    return res.json();
  }

  async search() {
    const input = document.querySelector('input');
    if (!input) throw new Error('search-bar was disappear');

    const term = input.value;
    const res = await this.getResource(`?search=${term}`);

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
