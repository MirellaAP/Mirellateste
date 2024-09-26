'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Simulação de login
    if (email === 'admin@example.com' && password === 'senha') {
      router.push('/'); // Redireciona para a página inicial
    } else {
      setError('E-mail ou senha incorretos'); // Mensagem de erro
    }
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8">
      <h1 className="mb-4">Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">Login</button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
