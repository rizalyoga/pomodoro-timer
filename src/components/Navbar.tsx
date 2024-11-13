const Navbar = () => {
  return (
    <header>
      <nav className="bg-transparent max-w-screen-xl mx-auto flex justify-between items-center tracking-tight py-4">
        <h1 className="font-bold text-xl">Pomodoro Timer</h1>
        <a
          className="hover:text-slate-700"
          href="https://github.com/rizalyoga/pomodoro-timer"
          target="_blank"
        >
          Github
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
