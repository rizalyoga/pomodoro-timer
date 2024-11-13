import CountdownTimer from "./components/CountdownTimer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="min-h-screen absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <Navbar />
        <CountdownTimer />
      </main>
    </>
  );
}

export default App;
