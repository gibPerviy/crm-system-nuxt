export interface IMenuItem {
  name: string
  url: string
  icon: string
}

export const MENU_DATA: IMenuItem[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'radix-icons:dashboard',
  },
  {
    name: 'Products',
    url: '/products',
    icon: 'ep:goods',
  },
  {
    name: 'Paymants',
    url: '/paymants',
    icon: 'ph:contactless-payment',
  },
  {
    name: 'Orders',
    url: '/orders',
    icon: 'fluent:receipt-28-regular',
  },
  {
    name: 'Customers',
    url: '/customers',
    icon: 'mingcute:group-line',
  },
  {
    name: 'Feedback',
    url: '/feedback',
    icon: 'fluent:person-feedback-48-regular',
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'radix-icons:gear',
  },
  {
    name: 'Help Center',
    url: '/help',
    icon: 'radix-icons:question-mark',
  },
]
