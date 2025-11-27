import React from 'react';
import { Mail } from 'lucide-react';

// Компонент для отображения участника Золота Молодежь Киева
function MemberCard({ name, role, img, description }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="h-56 bg-gray-200 bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="p-4 text-sm text-gray-700">
        <h4 className="font-semibold mb-1">{name}</h4>
        <p className="italic text-gray-500 mb-1">{role}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const members = [
    { name: 'Алексей', role: 'Лидер', description: 'Участник проекта Золота Молодежь Киева.', img: 'https://via.placeholder.com/400x300?text=Alexey' },
    { name: 'Мария', role: 'Активистка', description: 'Продвигает молодежные инициативы в Киеве.', img: 'https://via.placeholder.com/400x300?text=Maria' },
    { name: 'Игорь', role: 'Организатор', description: 'Отвечает за мероприятия и встречи.', img: 'https://via.placeholder.com/400x300?text=Igor' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
          <span className="font-semibold text-lg">GoldChildrenKiev</span>
        </div>
      </header>

      {/* Hero */}
      <section
        className="w-full h-[70vh] bg-cover bg-center flex items-end justify-start p-10"
        style={{ backgroundImage: "url('https://via.placeholder.com/1600x900?text=Gold+Youth+Kiev')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl max-w-md">
          <h1 className="text-4xl font-extrabold">Gold Молодежь Киева</h1>
          <p className="mt-3 text-gray-700 text-sm">Знакомьтесь с участниками проекта и их инициативами</p>
        </div>
      </section>

      {/* Members section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map(m => (
          <MemberCard key={m.name} {...m} />
        ))}
      </section>

      {/* Contact / Form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold flex items-center gap-3"><Mail size={18}/> Напишите нам</h3>
          <p className="text-gray-600 mt-2">Оставьте сообщение — мы ответим и расскажем больше о проекте.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="col-span-1 md:col-span-2 border rounded px-3 py-2" placeholder="Имя" />
            <input className="border rounded px-3 py-2" placeholder="Email" />
            <input className="border rounded px-3 py-2" placeholder="Тема" />
            <textarea className="col-span-1 md:col-span-2 border rounded px-3 py-2 h-28" placeholder="Сообщение"></textarea>
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button type="button" className="px-5 py-2 bg-yellow-500 text-white rounded">Отправить</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Gold Молодежь Киева</div>
          <div className="text-sm text-gray-600">Редактируйте сайт через GitHub, изменения мгновенно отображаются онлайн</div>
        </div>
      </footer>
    </div>
  );
}
