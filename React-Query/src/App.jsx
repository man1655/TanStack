import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import './App.css'
import Example from './Example';

function App() {
 const queryClient=new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example/>
      </QueryClientProvider>
    </>
  )
}

export default App
