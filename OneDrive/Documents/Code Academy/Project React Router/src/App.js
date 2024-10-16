import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'; 

// Create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<PetDetailsPage />} />
      <Route path="search" element={<SearchPage />} />
      {/* Corrected the path for the PetDetailsNotFound component */}
      <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<PetDetailsNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
