import {ParsedUrlQuery} from 'querystring';

export const getOrFirstOne = (query: ParsedUrlQuery, key?: string): string => {
  if (!key) {
    if (!query) return ''
    return Array.isArray(query) ? query[0] : query
  }

  const queryValue = query[key]
  if (!queryValue) return ''
  return Array.isArray(queryValue) ? queryValue[0] : queryValue
}
