import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateSoftware from './pages/CreateSoftware';
import RequestAccess from './pages/RequestAccess';
import PendingRequest from './pages/PendingRequest';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-software" element={<CreateSoftware />} />
      <Route path="/request-access" element={<RequestAccess />} />
      <Route path="/pending-requests" element={<PendingRequest />} />
    </Routes>
  );
}

export default App;