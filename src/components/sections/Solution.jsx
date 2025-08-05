export default function Solution() {
  const steps = [
    {
      title: "Подключение",
      description: "Авторизуйтесь через API Wildberries или Ozon",
      icon: "🔌"
    },
    {
      title: "Анализ",
      description: "Система сканирует ваш аккаунт 24/7",
      icon: "📊"
    },
    {
      title: "Уведомления",
      description: "Получайте предупреждения о рисках штрафов",
      icon: "🔔"
    },
    {
      title: "Оптимизация",
      description: "Автоматическая корректировка цен и остатков",
      icon: "⚡"
    }
  ]

  return (
    <section id="solution" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Как работает Complex</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}