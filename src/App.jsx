import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { AppcontextProvider } from '@/context/AppContextProvider';
import { AppRoutes } from './Routes';
import { Modals } from '@/components/organisms/Modals/Modals';


function App() {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
     <AppcontextProvider>
        <AppRoutes/>
        <Modals/>
      </AppcontextProvider>
      <Toaster/>
    </QueryClientProvider>
  )
}

export default App