import { useEffect, useState } from 'react';
import API from '../services/api';

export default function PendingRequest() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    API.get('/requests').then(res => setRequests(res.data));
  }, []);

  const handleUpdate = async (id: number, status: string) => {
    try {
      await API.patch(`/requests/${id}`, { status });
      alert('Status updated');
      setRequests(requests.filter(r => r.id !== id));
    } catch {
      alert('Update failed');
    }
  };

  return (
    <div>
      <h2>Pending Requests</h2>
      <ul>
        {requests.map(req => (
          <li key={req.id}>
            {req.user.username} requested {req.accessType} on {req.software.name}<br />
            <button onClick={() => handleUpdate(req.id, 'Approved')}>Approve</button>
            <button onClick={() => handleUpdate(req.id, 'Rejected')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
