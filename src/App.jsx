import Mensaje from "./components/Mensaje"

function App() {
  const amigo = "friend";

  return (
    <main className="text-center fs-3 m-3">
      <Mensaje amigo={amigo} />
    </main>
  );
}

export default App
