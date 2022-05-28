import Search from "./components/Search";
import List from "./components/List";

function App() {
  return (
    <div className="fixed h-[100vh] overflow-hidden top-0 left-0 w-[100%]">
      <header className="py-[80px] bg-[#FF33AE]"></header>
      <main className="flex items-center justify-center">
        <div className="w-[700px] px-[50px]">
          <List />
        </div>
      </main>
    </div>
  );
}

export default App;
