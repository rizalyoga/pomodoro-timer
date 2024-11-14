const Navbar = () => {
  return (
    <header>
      <nav className="bg-transparent px-2 justify-between items-center tracking-tight py-4 md:max-w-screen-xl md:mx-auto flex">
        <h1 className="font-bold text-xl">⌛ Pomodoro Timer</h1>
        <a
          className="hover:text-slate-700"
          href="https://github.com/rizalyoga/pomodoro-timer"
          target="_blank"
        >
          {"🔗 Github"}
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
