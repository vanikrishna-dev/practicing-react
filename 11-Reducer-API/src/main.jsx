import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CountContextProvider } from './store/CountContext.jsx'

createRoot(document.getElementById('root')).render(
<CountContextProvider>
   <App />
</CountContextProvider>

)
