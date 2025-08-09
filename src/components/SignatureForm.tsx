'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignatureForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMessage('Envoi…');

    try {
      const res = await fetch('/api/yousign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        const errMsg = json?.message || 'Erreur ❌';
        setMessage(errMsg);
        toast.error(errMsg);
        return;
      }

      setStatus('success');
      setMessage('Succès ✅ Document envoyé à Yousign');
      toast.success('Document envoyé à Yousign ✅');

      setFirstName('');
      setLastName('');
      setEmail('');

      router.push('/success');
    } catch (error: any) {
      setStatus('error');
      const err = error?.message || 'Erreur ❌';
      setMessage(err);
      toast.error(err);
    }
  }

  const isDisabled = status === 'loading' || !firstName || !lastName || !email;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envoyer une signature</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Jean"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Dupont"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="jean.dupont@email.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? 'Envoi…' : 'Envoyer à Yousign'}
          </button>

          {status !== 'idle' && (
            <p className={`text-sm mt-2 ${status === 'success' ? 'text-green-600' : status === 'error' ? 'text-red-600' : 'text-gray-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
