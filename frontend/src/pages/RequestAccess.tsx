import { useState, useEffect } from 'react';
import API from '../services/api';

export default function RequestAccess() {
  const [softwareId, setSoftwareId] = useState('');
  const [accessType, setAccessType] = useState('Read');
  const [reason, setReason] = useState('');
  const [softwares, setSoftwares] = useState<any[]>([]);

  useEffect(() => {
    API.get('/software').then(res => setSoftwares(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('/requests', { softwareId, accessType, reason });
      alert('Request submitted');
    } catch {
      alert('Request failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setSoftwareId(e.target.value)} value={softwareId}>
        <option value="">Select Software</option>
        {softwares.map(sw => (
          <option key={sw.id} value={sw.id}>{sw.name}</option>
        ))}
      </select>
      <select onChange={(e) => setAccessType(e.target.value)} value={accessType}>
        <option value="Read">Read</option>
        <option value="Write">Write</option>
        <option value="Admin">Admin</option>
      </select>
      <textarea placeholder="Reason" onChange={(e) => setReason(e.target.value)} />
      <button type="submit">Submit Request</button>
    </form>
  );
}
