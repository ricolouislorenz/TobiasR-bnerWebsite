import { useState, useEffect, useRef } from 'react';
import { Lock } from 'lucide-react';

interface PasswordModalProps {
  onSuccess: () => void;
  onClose: () => void;
}

export function PasswordModal({ onSuccess, onClose }: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const expected = import.meta.env.VITE_EDIT_PASSWORD || 'tobfinance2024';

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Allow ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === expected) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2500);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl transition-transform ${shake ? 'animate-shake' : ''}`}>
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-4 shadow-md">
            <Lock className="size-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#1e3a5f]">Bearbeitungsmodus</h2>
          <p className="text-sm text-gray-500 mt-1 text-center">Bitte Passwort eingeben um Inhalte zu bearbeiten</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Passwort"
            autoComplete="current-password"
            className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all text-center tracking-widest text-lg mb-3 ${
              error
                ? 'border-red-400 bg-red-50 placeholder-red-300'
                : 'border-gray-200 focus:border-[#1e3a5f]'
            }`}
          />

          {error && (
            <p className="text-red-500 text-sm text-center mb-3">
              Falsches Passwort. Bitte erneut versuchen.
            </p>
          )}

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border-2 border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors font-medium"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#2c4f7c] transition-colors font-medium"
            >
              Einloggen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
