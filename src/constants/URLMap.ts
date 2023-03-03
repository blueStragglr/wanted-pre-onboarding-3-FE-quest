import { PageName } from '@/types/PageName'

const URLMap: { [pageName in PageName]: string } = {
  Home: '/',
  PageA: '/A',
  PageB: '/B',
  PageC: '/C',
} as const

export default URLMap
