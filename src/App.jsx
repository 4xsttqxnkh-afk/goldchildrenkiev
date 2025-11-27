import React from 'react';
import { Mail } from 'lucide-react';

// Компонент для отображения участника Золотой Молодежи Киева
function MemberCard({ name, role, img, description }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="h-56 bg-gray-800 bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="p-4 text-sm">
        <h4 className="font-semibold mb-1">{name}</h4>
        <p className="italic text-gray-400 mb-1">{role}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const members = [
    { name: 'Алексей', role: 'Лидер', description: 'Участник проекта Золотая Молодежь Киева.', img: 'https://via.placeholder.com/400x300?text=Alexey' },
    { name: 'Мария', role: 'Активистка', description: 'Продвигает молодежные инициативы в Киеве.', img: 'https://via.placeholder.com/400x300?text=Maria' },
    { name: 'Игорь', role: 'Организатор', description: 'Отвечает за мероприятия и встречи.', img: 'https://via.placeholder.com/400x300?text=Igor' }
  ];

  const sarcasmText = `Хозяин сайта решил наконец показать миру «Золотую Молодёжь Киева» — и это настоящее зрелище! Здесь собраны те, кто будто родился, чтобы выглядеть эффектно на фото и громко заявлять о себе в социальных сетях. Каждый участник — отдельный проект самовлюблённости: кто-то мастерски умеет делать вид, что работает над важными инициативами, а на деле — виртуозно переключается между бесконечными селфи и лайками.`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold">G</div>
          <span className="font-semibold text-lg">Золотая Молодежь Киева</span>
        </div>
      </header>

      {/* Sarcasm intro */}
      <section className="max-w-4xl mx-auto px-6 py-10 bg-gray-900 border border-gray-700 rounded-xl shadow-md">
        <p className="text-white text-lg leading-relaxed whitespace-pre-line">
          {sarcasmText}
        </p>
      </section>

      {/* Hero */}
      <section
        className="w-full h-[50vh] bg-cover bg-center flex items-end justify-start p-10 mt-6"
        style={{ backgroundImage: "url('https://via.placeholder.com/1600x900?text=Golden+Youth+Kiev')" }}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl max-w-md">
          <h1 className="text-4xl font-extrabold text-white">Золотая Молодежь Киева</h1>
          <p className="mt-3 text-gray-300 text-sm">Знакомьтесь с участниками проекта и их инициативами</p>
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
        <div className="bg-gray-900 rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold flex items-center gap-3 text-white"><Mail size={18}/> Напишите нам</h3>
          <p className="text-gray-300 mt-2">Оставьте сообщение — мы ответим и расскажем больше о проекте.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="col-span-1 md:col-span-2 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" placeholder="Имя" />
            <input className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" placeholder="Email" />
            <input className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" placeholder="Тема" />
            <textarea className="col-span-1 md:col-span-2 bg-gray-800 border border-gray-700 rounded px-3 py-2 h-28 text-white" placeholder="Сообщение"></textarea>
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button type="button" className="px-5 py-2 bg-gray-700 text-white rounded">Отправить</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} Золотая Молодежь Киева</div>
          <div className="text-sm text-gray-400">Редактируйте сайт через GitHub, изменения мгновенно отображаются онлайн</div>
        </div>
      </footer>
    </div>
  );
}
