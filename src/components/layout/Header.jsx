export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-indigo-600">Сomplex</span>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">BETA</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-indigo-600">Возможности</a>
          <a href="#solution" className="text-gray-600 hover:text-indigo-600">Как это работает</a>
          <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Тарифы</a>
        </nav>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Войти
        </button>
      </div>
    </header>
  )
}