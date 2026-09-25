interface Window {
  Harumi: {
    ambiguousSearch: (text: string, options?: import('../types').SearchOptions) => import('../types').SearchResult[];
    nengoNames: (text: string, options?: import('../types').SearchOptions) => string[];
  }
}