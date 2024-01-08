import { ADMIN_ROUTE, PREW_ROUTE, NEWS_ROUTE, INSURENCES_ROUTE, REALTY_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { Admin} from '../pages/Admin'
import { Prew } from '../pages/Prew'
import { News } from '../pages/News'
import { NewsCard } from '../pages/NewsCard'
import { Insurances } from '../pages/Insurances'
import { Realty } from '../pages/Realty'
import { Contacts } from '../pages/Contacts'
import { Auth } from '../pages/Auth'


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  }
]

export const publicRoutes = [
  {
    path: PREW_ROUTE,
    Component: Prew,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: NEWS_ROUTE + '/:page',
    Component: News,
  },
  {
    path: NEWS_ROUTE + '/selected' + '/:id',
    Component: NewsCard,
  },
  {
    path: INSURENCES_ROUTE,
    Component: Insurances,
  },
  {
    path: REALTY_ROUTE  + '/:page',
    Component: Realty,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  }
]
