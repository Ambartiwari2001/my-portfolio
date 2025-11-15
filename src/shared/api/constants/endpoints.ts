export const ENDPOINTS = {
  sendMessage: 'https://formspree.io/f/mdkppyeg',
  searchPosts: (query: string) => `/api/posts/search?q=${query}`
} as const;
