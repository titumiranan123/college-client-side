
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './components/routes/routes.jsx'
import Authprovider from './components/Providers/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={routes} />
    </div>
  </Authprovider>
)
