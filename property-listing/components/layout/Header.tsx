export default function Header() {
  return (
    <header className="flex justify-etween items-center p- bg-white shadow">
      {/* Logo */}
      <div className="text-xl font-bold"> ALX Listings</div>

      {/* Logo */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-lue-500">Rooms</a>
        <a href="#" className="hover:text-blue-500">Mansions</a>
        <a href="#" className="hover:text-blue-500">Countryside</a>
      </nav>

      {/* search + Auth */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="search..."
          className="bborder rounded px-2 py-1 text-sm"
        />
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">Sign In</button>
        <button className="px-3 py-1 text-sm bg-gray-100 rounded">Sign Up</button>
      </div>
    </header>
  );
}