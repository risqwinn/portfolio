import carbonintensity from "../assets/carbon-intensity-UK.png";
import fakestore from "../assets/flatzi-fake-store.png";
import ngo from "../assets/website-NGO.png";
import perbandinganangka from "../assets/website-perbandingan-angka.png";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-blue-950 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-widest">
            Portfolio
          </h2>
          <div className="w-20 h-2 bg-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-green-500 text-lg font-semibold italic">Project Terbaru</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          
            <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl hover:ring-4 hover:ring-green-500 transition-all duration-500 group">
              <div className="overflow-hidden">
                <img 
                  src={carbonintensity}
                  alt="website intesitas carbon di UK" 
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-10">
                <h5 className="text-3xl font-bold text-black mb-4">Intensity Carbon UK</h5>
                <p className="text-black/70 mb-6 text-lg leading-relaxed">
                  Website yang dapat menampilkan keadaan intensitas karbon di berbagai wilayah United Kingdom dan faktor penyebab nya, API.
                </p>
              </div>
            </div>

          <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl hover:ring-4 hover:ring-green-500 transition-all duration-500 group">
            <div className="overflow-hidden">
              <img 
                src={fakestore}
                alt="website fake store" 
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-10">
              <h5 className="text-3xl font-bold text-black mb-4">E-Commerce</h5>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                Website simulasi online shop, dapat membuat akun/login, tambah keranjang, dan check out, API.
              </p>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl hover:ring-4 hover:ring-green-500 transition-all duration-500 group">
            <div className="overflow-hidden">
              <img 
                src={ngo}
                alt="website Non-Governmental Organization" 
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-10">
              <h5 className="text-3xl font-bold text-black mb-4">NGO (Non-Governmental Organization)</h5>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                platform digital yang digunakan oleh organisasi nirlaba untuk menampilkan informasi, misi, kegiatan, serta membangun kehadiran online guna menjangkau khalayak luas, dapat daftar/login menjadi relawan/admin, dan CRUD kegiatan.
              </p>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl hover:ring-4 hover:ring-green-500 transition-all duration-500 group">
            <div className="overflow-hidden">
              <img 
                src={perbandinganangka}
                alt="website perbandingan angka" 
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-10">
              <h5 className="text-3xl font-bold text-black mb-4">Perbandingan angka</h5>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                Web untuk membandingkan sebuah angka agar incikur.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}