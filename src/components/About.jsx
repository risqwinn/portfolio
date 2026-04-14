export default function About() {
  return (
    <section id="about" className="py-24 flex items-center justify-center bg-white px-5">
      <div className="max-w-4xl bg-white shadow-2xl shadow-blue-950/10 rounded-3xl p-8 md:p-16 text-center border border-blue-950/5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Tentang Saya</h2>
        <div className="w-16 h-1.5 bg-green-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-8 text-black/80 leading-relaxed text-lg">
          Saya adalah seorang siswa SMK Wikrama Bogor kelas XI yang sedang belajar 
          <span className="font-bold text-green-600"> pengembangan web</span> yang baik dan benar.
          Saya dapat bekerja sama tim dan berkomunikasi dengan cukup baik dan memiliki minat besar dalam membangun sebuah website.
          Saat ini saya fokus memahami bagaimana membuat website yang responsif, 
          visual berkualitan, dan konsisten.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["HTML", "CSS", "Tailwind", "Javascript", "React", "PHP", "Laravel"].map((skill) => (
            <span key={skill} className="px-5 py-2 bg-blue-950 text-white rounded-lg text-sm font-bold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}