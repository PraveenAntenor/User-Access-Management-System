import { useState } from 'react';
import API from '../services/api';

export default function CreateSoftware() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [accessLevels, setAccessLevels] = useState('Read,Write');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/software', {
        name,
        description,
        accessLevels: accessLevels.split(',')
      });
      alert('Software created');
    } catch {
      alert('Creation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Access Levels (comma separated)" onChange={(e) => setAccessLevels(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}
