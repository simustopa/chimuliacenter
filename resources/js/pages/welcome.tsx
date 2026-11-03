import { Head, Link } from '@inertiajs/react';

// Isi URL ini ketika alamat formulir/website pengajuan naskah Chimulia Press sudah tersedia.
const PUBLISHER_SUBMISSION_URL = '';

const units = [
    {
        number: '01',
        name: 'Chimulia Press',
        category: 'PENERBITAN',
        description: 'Penerbitan buku ber-ISBN, buku ajar, buku referensi, serta pendampingan Hak Cipta dan HKI.',
        href: '#pengajuan-naskah',
    },
    {
        number: '02',
        name: 'Chimulia Edu',
        category: 'PENDIDIKAN',
        description: 'Pelatihan, workshop, sertifikasi kompetensi, dan pengembangan profesional di bidang pendidikan.',
        href: '#layanan',
    },
    {
        number: '03',
        name: 'Chi Mulia Academy',
        category: 'BIMBINGAN BELAJAR',
        description: 'Bimbingan belajar dan penguatan matematika berbasis Ethno-RME untuk peserta didik.',
        href: '#layanan',
    },
];

const pillars = [
    {
        number: '01',
        title: 'Riset dan Publikasi Ilmiah',
        description: 'Mendorong riset yang berkualitas, memperkuat diseminasi pengetahuan, serta mendampingi akademisi dalam menghasilkan karya ilmiah yang relevan dan berdampak.',
    },
    {
        number: '02',
        title: 'Pengembangan dan Pelatihan',
        description: 'Menyelenggarakan pelatihan, workshop, dan pengembangan kompetensi bagi guru, mahasiswa, dosen, peneliti, serta praktisi pendidikan.',
    },
    {
        number: '03',
        title: 'Kolaborasi Akademik',
        description: 'Membangun kemitraan lintas institusi dan komunitas untuk memperluas pertukaran pengetahuan, inovasi pendidikan, serta dampak riset di Indonesia.',
    },
];

const services = [
    {
        icon: '⌕',
        title: 'Riset dan Publikasi Ilmiah',
        description: 'Mendukung pengembangan riset, penulisan akademik, dan diseminasi hasil penelitian yang berkualitas dan berdampak.',
    },
    {
        icon: '✧',
        title: 'Pengembangan dan Pelatihan',
        description: 'Program pelatihan, workshop, dan peningkatan kompetensi untuk pendidik, mahasiswa, dan peneliti.',
    },
    {
        icon: '◎',
        title: 'Kolaborasi Akademik',
        description: 'Membangun jejaring dan kerja sama dengan institusi, organisasi, serta komunitas pendidikan.',
    },
];


const collaborationItems = [
    {
        eyebrow: 'MITRA',
        title: 'Berkolaborasi untuk Dampak Lebih Luas',
        description: 'Terbuka untuk membangun jejaring bersama institusi, akademisi, dan komunitas pendidikan.',
    },
    {
        eyebrow: 'PELUANG KOLABORASI',
        title: 'Kembangkan Gagasan Bersama',
        description: 'Diskusikan potensi kolaborasi penerbitan, riset, dan pengembangan literasi akademik.',
    },
    {
        eyebrow: 'SPONSORSHIP / HIBAH',
        title: 'Dukung Inovasi Pendidikan',
        description: 'Hubungi tim kami untuk membicarakan peluang dukungan dan program yang sesuai.',
    },
];

export default function Welcome() {
    return (
        <>
            <Head title="CHIMULIA — Center for Cultural Impact in Mathematics" />

            <div className="min-h-screen bg-white text-slate-800">
                <header className="sticky top-0 z-50 bg-[#103f73] text-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
                        <a href="#beranda" className="shrink-0 leading-tight" aria-label="CHIMULIA beranda">
                            <span className="block text-xl font-extrabold tracking-wide">✦ Chimulia</span>
                            <span className="mt-1 block text-[8px] tracking-wide text-blue-100">Center for Cultural Impact in Mathematics Learning</span>
                        </a>

                        <nav className="hidden items-center gap-5 text-xs font-medium lg:flex">
                            <a href="#beranda" className="transition hover:text-amber-200">Beranda</a>
                            <a href="#profil" className="transition hover:text-amber-200">Tentang Kami</a>
                            <div className="group relative py-3">
                                <a href="#unit" className="inline-flex items-center gap-1 transition hover:text-amber-200">Unit <span>⌄</span></a>
                                <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 rounded-xl bg-white p-2 text-slate-800 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                    <a href="#chimulia-press" className="block rounded-lg px-3 py-2.5 hover:bg-blue-50">Chimulia Press</a>
                                    <a href="#chimulia-edu" className="block rounded-lg px-3 py-2.5 hover:bg-blue-50">Chimulia Edu</a>
                                    <a href="#chimulia-academy" className="block rounded-lg px-3 py-2.5 hover:bg-blue-50">Chimulia Academy</a>
                                </div>
                            </div>
                            <div className="group relative py-3">
                                <a href="#kolaborasi" className="inline-flex items-center gap-1 transition hover:text-amber-200">Kolaborasi <span>⌄</span></a>
                                <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-xl bg-white p-2 text-slate-800 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                    <a href="#mitra" className="block rounded-lg px-3 py-2.5 hover:bg-blue-50">Mitra</a>
                                    <a href="#peluang-kolaborasi" className="block rounded-lg px-3 py-2.5 hover:bg-blue-50">Peluang Kolaborasi</a>
                                    <a href="#sponsorship" className="block rounded-lg px-3 py-2.5 hover:bg-blue-50">Sponsorship / Hibah</a>
                                </div>
                            </div>
                            <a href="#kontak" className="transition hover:text-amber-200">Kontak</a>
                        </nav>



                        <a href="#menu-mobile" className="rounded-md border border-white/30 px-3 py-2 text-sm lg:hidden">Menu ☰</a>
                    </div>
                    <div id="menu-mobile" className="border-t border-white/15 px-5 py-3 lg:hidden">
                        <nav className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-3 text-xs">
                            <a href="#beranda">Beranda</a><a href="#profil">Tentang Kami</a><a href="#unit">Unit</a><a href="#kolaborasi">Kolaborasi</a><a href="#kontak">Kontak</a><a href="#pengajuan-naskah">Pengajuan Naskah</a>
                        </nav>
                    </div>
                </header>

                <main>
                    <section id="beranda" className="relative overflow-hidden bg-[#103f73] text-white">
                        <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-[55%] rounded-full border border-white/10" />
                        <div className="pointer-events-none absolute -left-12 bottom-5 h-44 w-[52%] rounded-full border border-white/10" />
                        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
                            <div className="relative z-10">
                                <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-amber-300">NASIONAL RESEARCH AND PUBLISHING INSTITUTE</p>
                                <div className="mb-4 flex items-center gap-2">
                                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Chimulia</h1>
                                    <span className="text-5xl text-amber-300 sm:text-6xl">✦</span>
                                </div>
                                <h2 className="max-w-2xl text-lg font-bold leading-snug sm:text-xl">Nasional Research and Publishing Institute<br />Center for Cultural Impact in Mathematics</h2>
                                <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100">Mendampingi insan akademis, guru, mahasiswa dan seluruh peneliti Indonesia untuk menciptakan karya ilmiah berdampak yang diakui secara nasional.</p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a href="#pengajuan-naskah" className="rounded-full bg-amber-300 px-5 py-3 text-xs font-bold text-slate-900 shadow transition hover:bg-amber-200">Ajukan Naskah Sekarang →</a>
                                    <a href="#profil" className="rounded-full border border-white/50 px-5 py-3 text-xs font-semibold transition hover:bg-white/10">Kenali CHIMULIA</a>
                                </div>
                            </div>

                            <div id="pengajuan-naskah" className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 text-slate-800 shadow-2xl sm:p-7">
                                <p className="text-lg font-bold text-[#103f73]">Formulir Pengajuan Naskah</p>
                                <p className="mb-5 text-xs text-slate-500">Lengkapi data berikut untuk mengajukan naskah Anda.</p>
                                <form onSubmit={(event) => { event.preventDefault(); if (PUBLISHER_SUBMISSION_URL) window.location.href = PUBLISHER_SUBMISSION_URL; }} className="space-y-3">
                                    <div><label htmlFor="nama" className="mb-1 block text-xs font-semibold">Nama Lengkap & Gelar</label><input id="nama" name="nama" required placeholder="Contoh: Khairullah, M.Pd." className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></div>
                                    <div><label htmlFor="whatsapp" className="mb-1 block text-xs font-semibold">Nomor WhatsApp</label><input id="whatsapp" name="whatsapp" type="tel" required placeholder="Contoh: 081234567890" className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></div>
                                    <div><label htmlFor="judul" className="mb-1 block text-xs font-semibold">Judul Draft Naskah Buku</label><input id="judul" name="judul" required placeholder="Masukkan judul naskah Anda" className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></div>
                                    <div><label htmlFor="kategori" className="mb-1 block text-xs font-semibold">Kategori Buku</label><select id="kategori" name="kategori" required defaultValue="" className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"><option value="" disabled>Pilih kategori buku</option><option>Buku Teks / Buku Ajar</option><option>Buku Referensi</option><option>Monograf Hasil Penelitian</option><option>Buku Umum dan Literasi Edukasi</option><option>Lainnya</option></select></div>
                                    {PUBLISHER_SUBMISSION_URL ? <button type="submit" className="w-full rounded-md bg-[#103f73] px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800">Kirim via Website Penerbit →</button> : <button type="button" disabled className="w-full cursor-not-allowed rounded-md bg-[#103f73] px-4 py-3 text-sm font-bold text-white opacity-80">Kirim via Website Penerbit ⓘ</button>}
                                    <p className="text-center text-[10px] leading-4 text-slate-400">Data akan diarahkan ke website penerbit setelah tautan resmi tersedia. Formulir ini belum menyimpan atau mengirimkan data.</p>
                                </form>
                            </div>
                        </div>
                    </section>

                    <section id="profil" className="bg-white py-14 sm:py-16">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
                            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
                                <div>
                                    <p className="text-xs font-bold tracking-[0.18em] text-amber-600">PROFIL LEMBAGA</p>
                                    <h2 className="mt-3 text-3xl font-bold leading-tight text-[#103f73] sm:text-4xl">Center for Cultural Impact in Mathematics</h2>
                                    <p className="mt-5 text-justify text-sm leading-7 text-slate-600">Ekosistem terpadu untuk riset, publikasi ilmiah, penerbitan, pelatihan, dan pengembangan pendidikan matematika berbasis budaya, inovasi, dan teknologi guna mewujudkan pembelajaran yang bermakna, inklusif, dan berkelanjutan di Indonesia.</p>
                                    <a href="#layanan" className="mt-5 inline-flex rounded-full bg-[#103f73] px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-800">Selengkapnya →</a>
                                </div>
                                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
                                    <h3 className="text-lg font-bold text-[#103f73]">Visi dan Pilar Strategis</h3>
                                    <div className="mt-5 space-y-5">
                                        {pillars.map((pillar) => <article key={pillar.number} className="grid grid-cols-[34px_1fr] gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-[#103f73] text-xs font-bold text-white">{pillar.number}</span><div><h4 className="font-bold leading-snug text-slate-800">{pillar.title}</h4><p className="mt-1 text-sm leading-5 text-slate-600">{pillar.description}</p></div></article>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="layanan" className="bg-[#f1f7fc] py-14 sm:py-16">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
                            <div className="mb-8">
                                <p className="text-xs font-bold tracking-[0.18em] text-amber-600">LAYANAN KAMI</p>
                                <h2 className="mt-2 text-2xl font-bold text-[#103f73] sm:text-3xl">Tiga Pilar Layanan CHIMULIA</h2>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Tiga fokus utama untuk mendukung ekosistem riset, pendidikan, dan pengembangan pengetahuan.</p>
                            </div>
                            <div id="unit" className="grid gap-4 md:grid-cols-3">
                                {services.map((service, index) => <article key={service.title} id={index === 0 ? 'chimulia-press' : index === 1 ? 'chimulia-edu' : 'chimulia-academy'} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="flex items-center gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#103f73] text-xl text-white">{service.icon}</span><span className="text-sm font-bold text-amber-600">0{index + 1}</span></div><h3 className="mt-5 text-lg font-bold text-[#103f73]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p></article>)}
                            </div>
                        </div>
                    </section>

                    <section id="kolaborasi" className="bg-white py-14 sm:py-16">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
                            <div className="mb-7">
                                <p className="text-xs font-bold tracking-[0.18em] text-amber-600">MITRA DAN JEJARING</p>
                                <h2 className="mt-2 text-2xl font-bold text-[#103f73] sm:text-3xl">Siap Bertumbuh Bersama CHIMULIA?</h2>
                            </div>
                            <div className="grid gap-4 md:grid-cols-3">
                                {collaborationItems.map((item, index) => <article key={item.eyebrow} id={index === 0 ? 'mitra' : index === 1 ? 'peluang-kolaborasi' : 'sponsorship'} className="rounded-xl border border-blue-100 bg-[#f8fbff] p-6 transition hover:shadow-md"><p className="text-[10px] font-bold tracking-[0.16em] text-amber-600">{item.eyebrow}</p><h3 className="mt-3 text-lg font-bold text-[#103f73]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></article>)}
                            </div>
                        </div>
                    </section>
                </main>

                <footer id="kontak" className="border-t border-slate-200 bg-white text-slate-800">
                    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-8">
                        <h2 className="text-center text-xl font-bold text-[#103f73]">Siap Berkolaborasi dengan CHIMULIA?</h2>
                        <div className="mt-5 grid overflow-hidden rounded-xl border border-slate-300 md:grid-cols-2">
                            <div className="border-b border-slate-300 md:border-b-0 md:border-r">
                                <div className="border-b border-slate-300 bg-slate-50 py-2 text-center text-sm font-semibold">Email</div>
                                <div className="p-5 sm:p-6">
                                    <div className="mb-5 flex items-center gap-3"><span className="text-3xl font-black tracking-tight text-[#103f73]">✦ Chimulia</span></div>
                                    <h3 className="font-bold leading-snug">CHIMULIA – Center for Cultural Impact in Mathematics</h3>
                                    <p className="mt-2 text-justify text-sm leading-6 text-slate-600">Berkomitmen untuk mengembangkan pendidikan matematika yang inovatif, kontekstual, dan berkelanjutan melalui integrasi budaya, teknologi, dan pendekatan pembelajaran yang berpusat pada peserta didik, guna menciptakan dampak nyata bagi kemajuan pendidikan di Indonesia.</p>
                                    <p className="mt-4 text-sm"><span className="font-semibold">Email:</span> <a className="text-blue-800 hover:underline" href="mailto:info@chimulia.or.id">info@chimulia.or.id</a></p>
                                </div>
                            </div>
                            <div>
                                <div className="border-b border-slate-300 bg-slate-50 py-2 text-center text-sm font-semibold">WA</div>
                                <div className="p-5 sm:p-6 text-sm leading-7">
                                    <p className="font-semibold text-[#103f73]">Informasi Kontak</p>
                                    <p>Center for Human Centered STEM Education Indonesia (HUMANIS)</p>
                                    <p><span className="font-semibold">Kantor Pusat:</span> xxxxxxxxxxxxxxxx</p>
                                    <p><span className="font-semibold">Info:</span> xxxxxxxxxx</p>
                                    <p><span className="font-semibold">Email:</span> <a href="mailto:info@chimulia.or.id" className="text-blue-800 hover:underline">info@chimulia.or.id</a></p>
                                    <p><span className="font-semibold">WA Official:</span> xxxxxxxxxx</p>
                                    <p><span className="font-semibold">Website:</span> <a href="#beranda" className="text-blue-800 hover:underline">Segera hadir</a></p>
                                    <p><span className="font-semibold">IG:</span> xxxxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-2 text-center text-xs text-slate-500 sm:flex-row sm:justify-between"><span>Nasional Research and Publishing Institute</span><span>© {new Date().getFullYear()} CHIMULIA. Hak cipta dilindungi.</span></div>
                    </div>
                </footer>

                <div className="fixed bottom-4 right-4 z-40"><Link href="/chimulia/dashboard" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50">Admin</Link></div>
            </div>
        </>
    );
}
