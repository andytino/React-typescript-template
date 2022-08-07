import Home from '@/pages/Home/container/Home'
import About from '@/pages/About/container/About'

export const createRoutes = () => {
  return [
    {
      path: '/',
      children: [
        {index: true, element: <Home />},
        {path: '/about', element: <About />},
      ],
    },
  ]
}
