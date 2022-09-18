export default function Header({ title }) {
  return (
    <header className="flex justify-between px-5 py-3 bg-blue-500">
      <h1 className="inline-block text-3xl">{title}</h1>
      <button className="inline-block px-2 py-0 bg-gray-100 rounded">
        Overview
      </button>
    </header>
  );
}