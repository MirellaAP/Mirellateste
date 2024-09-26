'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(false); // Inicialmente, o usuário não está autenticado
  const router = useRouter();

  const handleLogout = () => {
    setUser(false); // Define o usuário como não autenticado
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {user ? (
        <>
          <h1>Bem-vindo, Cliente!</h1>
          <button onClick={handleLogout} className="p-2 bg-blue-500 text-white rounded">Sair</button>
        </>
      ) : (
        <h1>Por favor, faça login.</h1>
      )}
    </div>
  );
}
