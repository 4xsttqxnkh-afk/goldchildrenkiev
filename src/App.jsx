import React from 'react'
import { Mail } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
          <span className="font-semibold text-lg">GoldChildrenKiev</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:brightness-95">Get started</button>
        </nav>
        <button className="md:hidden px-3 py-2 border rounded-md">Menu</button>
      </header>

      <main className="w-full">
        <section
          className="w-full h-[70vh] bg-cover bg-center flex items-end justify-start p-10"
          style={{ backgroundImage: "url('https://via.placeholder.com/1600x900?text=GoldChildrenKiev+Background')" }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl max-w-md">
            <h1 className="text-4xl font-extrabold">GoldChildrenKiev</h1>
            <p className="mt-3 text-gray-700 text-sm">Наша колекція дитячого преміум одягу та аксесуарів</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="h-56 bg-gray-200 bg-center bg-cover" style={{ backgroundImage: `url(https://via.placeholder.com/400x300?text=Photo+${i})` }}></div>
              <div className="p-4 text-sm text-gray-700">Опис фото або товару №{i}. Тут можна написати деталі, матеріали, розміри тощо.</div>
            </div>
          ))}
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold flex items-center gap-3"><Mail size={18}/> Напишіть нам</h3>
            <p className="text-gray-600 mt-2">Залиште повідомлення — я відповім і допоможу запустити сайт.</p>
            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="col-span-1 md:col-span-2 border rounded px-3 py-2" placeholder="Ім'я" />
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <input className="border rounded px-3 py-2" placeholder="Тема" />
              <textarea className="col-span-1 md:col-span-2 border rounded px-3 py-2 h-28" placeholder="Повідомлення"></textarea>
              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button type="button" className="px-5 py-2 bg-yellow-500 text-white rounded">Відправити</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 border-t py-6">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} GoldChildrenKiev</div>
            <div className="text-sm text-gray-600">Створено для презентації</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
