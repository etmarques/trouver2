// rotas
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// pages
import Home from '../src/pages/Home';
import Form from '../src/pages/Form';
import Matriz from '../src/pages/Matriz';

//Msal from https://learn.microsoft.com/pt-br/azure/active-directory/develop/single-page-app-tutorial-04-call-api?tabs=visual-studio-code

import { loginRequest } from './authConfig';
import { callMsGraph } from './graph';
import { ProfileData } from './components/ProfileData';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { Button } from 'react-bootstrap';

/**
* Renders information about the signed-in user or a button to retrieve data about the user
*/
/**
* Renders information about the signed-in user or a button to retrieve data about the user

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => setGraphData(response));
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      <br />
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="secondary" onClick={RequestProfileData}>
          Request Profile Information
        </Button>
      )}
    </>
  );
};
*/
//criação das rotas
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='forms' element={<Form />} />
      <Route path='matriz' element={<Matriz />} />
    </Route>
  )
)



function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  )
}

export default App;
