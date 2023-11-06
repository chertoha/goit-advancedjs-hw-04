import { fetchImages } from '../pixabayAPI';
import { toast } from '../toast';

export function createGallery(
  procedure,
  { initialPage, limit, initialQuery, initialList, loader, smoothScroll }
) {
  let page = initialPage || 1;
  let query = initialQuery || '';
  let list = initialList || [];
  let total = null;
  const loaderInstance = loader || null;

  async function fetchData() {
    if (!query) return;
    try {
      loaderInstance && loaderInstance.start();

      const data = await fetchImages(query, page, limit);

      console.log('data', data);

      list.push(...data.list);
      total = data.total;

      console.log('page', page);

      if (data.list.length === 0) {
        toast.emptyList();
      } else if (limit * page >= total) {
        toast.endCollection();
      } else {
        toast.foundTotal(total);
      }

      procedure(list);

      smoothScroll && smoothScroll();
    } catch (error) {
      console.log('error', error);
      toast.fetchError();
    } finally {
      loaderInstance && loaderInstance.stop();
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
      this.resetPage();
      this.clearList();
      query = newQuery;
      fetchData();
    },

    clearList() {
      list = [];
    },
  };
}
