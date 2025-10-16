import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-orange-600">探究の教科書：自己探究フォーム</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <p className="mb-4 font-semibold">STEP1. 自分の“衝動”に気づこう</p>
        <input type="text" placeholder="例：つい人に話しかけちゃう" className="w-full border p-2 mb-6" />

        <p className="mb-4 font-semibold">STEP2. 興味のある職業を選ぼう</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {["カウンセラー", "デザイナー", "研究者", "経営者", "芸術家", "芸人"].map((job) => (
            <label key={job} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {job}
            </label>
          ))}
        </div>

        <p className="mb-4 font-semibold">STEP3. オリジナルの職業を作ってみよう（5つまで）</p>
        {[...Array(5)].map((_, i) => (
          <input key={i} type="text" placeholder={`オリジナル職業 ${i + 1}`} className="w-full border p-2 mb-2" />
        ))}
      </div>
    </div>
  );
};

export default Home;