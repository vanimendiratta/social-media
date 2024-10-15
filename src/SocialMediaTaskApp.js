import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Send, Linkedin } from 'lucide-react';

const SocialMediaTaskApp = () => {
  const socialTasks = [
    { name: 'Instagram', icon: Instagram, points: 300 },
    { name: 'Facebook', icon: Facebook, points: 225 },
    { name: 'X', icon: Twitter, points: 85 },
    { name: 'Youtube', icon: Youtube, points: 150 },
    { name: 'Telegram', icon: Send, points: 60 },
    { name: 'LinkedIn', icon: Linkedin, points: 30 },
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-4 font-sans">
      <header className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <div>8:13</div>
        <div className="flex items-center space-x-1">
          <span>0.00</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </header>

      <main>
        <h1 className="text-xl font-bold mt-4">Home</h1>
        
        <div className="flex justify-between mt-2">
          <div className="bg-pink-200 rounded-full px-3 py-1">🎉 3982</div>
          <div className="bg-green-200 rounded-full px-3 py-1">₹2875.00</div>
          <div className="bg-gray-200 rounded-full px-3 py-1">₹1000</div>
          <div className="bg-blue-200 rounded-full px-3 py-1">V</div>
        </div>

        <div className="bg-yellow-400 text-black p-2 mt-4 rounded">
          Taskplanet: Get 10 Points on every referrals.
        </div>

        <div className="flex justify-between mt-4">
          <div className="bg-white p-2 rounded shadow flex-1 mx-1">
            <div>Wallet</div>
            <div className="font-bold">₹2875.00 💰</div>
          </div>
          <div className="bg-white p-2 rounded shadow flex-1 mx-1">
            <div>Earnings</div>
            <div className="font-bold">₹2875.00 $</div>
          </div>
          <div className="bg-white p-2 rounded shadow flex-1 mx-1">
            <div>Referrals</div>
            <div className="font-bold">2417 🔗</div>
          </div>
        </div>

        <div className="bg-yellow-400 text-black p-4 mt-4 rounded relative">
          <img src="/api/placeholder/400/200" alt="Woman with money" className="w-full h-32 object-cover rounded" />
          <div className="absolute top-2 left-2">
            <div className="font-bold text-xl">Weekly Leaderboard</div>
            <div>You Will Get</div>
            <div className="font-bold text-2xl">₹150</div>
            <div>(Total Pool Prize)</div>
          </div>
        </div>

        <h2 className="text-lg font-bold mt-4">Social Media Task</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {socialTasks.map((task) => (
            <div key={task.name} className="bg-white p-2 rounded shadow text-center">
              <task.icon className="mx-auto" size={24} />
              <div>{task.name}</div>
              <div className="text-green-600">+{task.points}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-white p-4 rounded shadow">
          <h3 className="font-bold">Social Media Task</h3>
          <p>Now you can earn money by completing simple social media tasks.</p>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-2 flex justify-around">
        <div>🏠 Home</div>
        <div>📋</div>
        <div>➕</div>
        <div>⚙️</div>
        <div>🏆</div>
      </footer>
    </div>
  );
};

export default SocialMediaTaskApp;