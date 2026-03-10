import { useState } from 'react' // Importando um Hook para gerenciar estado

function App() {
  // Criando uma variável de estado chamada 'contador'
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Olá, Mundo! Meu primeiro App React 🚀</h1>
      <p>Você clicou {contador} vezes no botão.</p>
      
      <button 
        onClick={() => setContador(contador + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Clique aqui para somar
      </button>
    </div>
  )
}

export default App
