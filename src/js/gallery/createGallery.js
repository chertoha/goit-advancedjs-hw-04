import { fetchImages } from '../pixabayAPI';
import { toast } from '../toast';

export function createGallery(
  procedure,
  {
    initialPage,
    limit,
    initialQuery,
    initialList,
    loader,
    smoothScroll,
    loadMore,
  }
) {
  let page = initialPage || 1;
  let query = initialQuery || '';
  let list = initialList || [];
  let total = null;

  async function fetchData() {
    if (!query) return;
    try {
      loader && loader.start();
      loadMore.hide();

      const data = await fetchImages(query, page, limit);

      console.log('data', data);

      list.push(...data.list);
      total = data.total;

      const isEndCollection = limit * page >= total;

      if (data.list.length === 0) {
        toast.emptyList();
      } else if (isEndCollection) {
        toast.endCollection();
      } else if (page === 1) {
        toast.foundTotal(total);
      }

      procedure(list);

      if (!isEndCollection) loadMore.show();

      smoothScroll && smoothScroll();
    } catch (error) {
      toast.fetchError();
    } finally {
      loader && loader.stop();
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
