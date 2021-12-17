import { ref, shallowReactive } from 'vue'
import Link from '../../interface/Link'

export default function useLink() {
  const homeLink = shallowReactive<Link>({
    name: 'Simooo',
    url: '/'
  })
  const socialLink = shallowReactive<Link []>([
    {
      name: 'twitter',
      url: 'https://twitter.com/SimoooWann'
    },
    {
      name: 'github',
      url: 'https://github.com/SimonWann'
    },
  ])
  return {
    homeLink,
    socialLink
  }
}