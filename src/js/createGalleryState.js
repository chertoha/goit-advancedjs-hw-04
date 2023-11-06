import { fetchImages } from './pixabayAPI';

export function createGalleryState(
  procedure,
  { initialPage, limit, initialQuery, initialList }
) {
  let page = initialPage || 1;
  let query = initialQuery || '';
  let list = initialList || [];

  async function fetchData() {
    if (!query) return;
    try {
      const data = await fetchImages(query, page, limit);
      console.log('DATA', data);
      list.push(...data.hits);
      procedure(list);
    } catch (error) {
      console.log('error', error);
    }
  }

  return {
    getPage() {
      return page;
    },

    increasePage() {
      page += 1;
      fetchData();
    },

    resetPage() {
      page = initialPage || 1;
    },

    setQuery(newQuery) {
      if (query !== newQuery) {
        this.resetPage();
        this.clearList();
      }
      query = newQuery;
      fetchData();
    },

    clearList() {
      list = [];
    },
  };
}
