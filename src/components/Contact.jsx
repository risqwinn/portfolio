import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sedang mengirim....");
    const formData = new FormData(event.target);

    // MASUKKAN ACCESS KEY KAMU DI SINI
    formData.append("access_key", "e80f0f9c-06fc-40ed-8981-7627d672879f ");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan Berhasil Terkirim!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Contact</h2>
        <div className="w-16 h-1.5 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-black/60">Hubungi Saya</p>

        <form onSubmit={onSubmit} className="mt-12 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Nama Lengkap"
              className="w-full p-4 bg-blue-950/5 border border-blue-950/10 rounded-2xl text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Alamat Email"
              className="w-full p-4 bg-blue-950/5 border border-blue-950/10 rounded-2xl text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <textarea
            name="message"
            required
            placeholder="Tulis pesanmu di sini..."
            rows="5"
            className="w-full p-4 bg-blue-950/5 border border-blue-950/10 rounded-2xl text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          ></textarea>

          <button 
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl hover:bg-green-600 shadow-xl shadow-green-500/20 transition-all active:scale-[0.98]"
          >
            Kirim Pesan Sekarang
          </button>
        </form>

        <span className="mt-4 block text-green-600 font-medium">{result}</span>
      </div>
    </section>
  );
}