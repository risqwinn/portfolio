import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sedang mengirim...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "e80f0f9c-06fc-40ed-8981-7627d672879f"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Pesan berhasil terkirim!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F8FAFC] flex items-center px-6 md:px-16 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: 120 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F172A]">
            Contact
          </h2>

          {/* Underline */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-12 h-[2px] bg-black"></div>
            <div className="w-5 h-[2px] bg-black/40"></div>
          </div>

          <p className="mt-8 text-gray-500 leading-relaxed max-w-md">
            Punya project, pertanyaan, atau ingin bekerja sama?
            Silahkan hubungi saya melalui form di samping.
          </p>

          <div className="mt-10 space-y-4 text-[#475569]">
            <p>Email : qriskiriski123@gmail.com</p>
            <p>Location : Kab.Bogor, Indonesia</p>
            <p>Phone : +62 8954 1582 5900</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileOutOfView={{ opacity: 0, x: -120 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
        >
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-[35px] p-8 md:p-10 shadow-xl border border-black/5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Nama Lengkap"
                className="w-full p-4 bg-[#F5F5F5] rounded-2xl outline-none border border-black/5 focus:border-[#3B82F6] transition"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Alamat Email"
                className="w-full p-4 bg-[#F5F5F5] rounded-2xl outline-none border border-black/5 focus:border-[#3B82F6] transition"
              />
            </div>

            <textarea
              name="message"
              required
              rows="6"
              placeholder="Tulis pesanmu..."
              className="w-full mt-5 p-4 bg-[#F5F5F5] rounded-2xl outline-none border border-black/5 focus:border-[#3B82F6] transition resize-none"
            />

            <button
              type="submit"
              className="w-full mt-6 bg-[#0F172A] text-white py-4 rounded-2xl font-semibold hover:bg-[#3B82F6] transition-all duration-300"
            >
              Kirim Pesan
            </button>

            <span className="block mt-5 text-center text-[#3B82F6] font-medium">
              {result}
            </span>
          </form>
        </motion.div>
      </div>
    </section>
  );
}