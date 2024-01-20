import { ADMIN_ROUTE, PREW_ROUTE, NEWS_ROUTE, INSURANCES_ROUTE, REALTY_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ABOUT_ROUTE } from '../utils/consts'
import { Admin} from '../pages/Admin'
import { Prew } from '../pages/Prew'
import { News } from '../pages/News'
import { NewsCard } from '../pages/NewsCard'
import { Insurances } from '../pages/Insurances'
import { InsuranceCard } from '../pages/InsuranceCard'
import { Realty } from '../pages/Realty'
import { RealtyCard } from '../pages/RealtyCard'
import { Contacts } from '../pages/Contacts'
import { Auth } from '../pages/Auth'
import { About } from '../pages/About'


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
    path: ABOUT_ROUTE,
    Component: About,
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
    path: INSURANCES_ROUTE,
    Component: Insurances,
  },
  {
    path: INSURANCES_ROUTE + '/selected' + '/:id',
    Component: InsuranceCard,
  },
  {
    path: REALTY_ROUTE  + '/:page',
    Component: Realty,
  },
  {
    path: REALTY_ROUTE + '/selected' + '/:id',
    Component: RealtyCard,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  }
]
