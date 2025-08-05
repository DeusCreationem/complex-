export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Complex</h3>
            <p className="text-gray-400">Автоматизация продаж на маркетплейсах</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Возможности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Тарифы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Документация</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <p className="text-gray-400 mb-2">support@complex.ru</p>
            <p className="text-gray-400">+7 (991) 708-30-88</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2025 Complex. Все права защищены.
        </div>
      </div>
    </footer>
  )
}