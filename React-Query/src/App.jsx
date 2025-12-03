import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import Example from './Example';

function App() {
 const queryClient=new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Example/>
      </QueryClientProvider>
    </>
  )
}

export default App
