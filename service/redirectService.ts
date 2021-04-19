import Router from 'next/router'

type Url = string

export const redirect = (url: Url, queryParam?: string) => {
  Router.push(queryParam ? `${url}?${queryParam}` : url)
}
