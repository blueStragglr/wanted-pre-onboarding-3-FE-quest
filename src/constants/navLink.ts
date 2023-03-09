import { SideBarItem } from '@projects/types';
import RouterInfo from './routerInfo';

const navLink: SideBarItem[] = RouterInfo.reduce((prev, cur) => {
  if (!cur.withAuthorization && cur.title !== 'notFound') {
    return [
      ...prev,
      {
        path: cur.path,
        title: cur.title,
      },
    ];
  }
  return prev;
}, [] as SideBarItem[]);

export default navLink;
