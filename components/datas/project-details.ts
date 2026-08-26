export const PROJECT_DETAILS = [
  {
    slug: "mayochat",
    name: "Mayochat | Take Order Dashboard",
    category: "Internal Dashboard",
    tagline: "Dashboard order management yang memangkas 80% waktu proses manual tim.",
    liveUrl: "https://mayochat.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayo-tools",
    tech: ["JavaScript", "ES Modules", "Vercel", "Custom DOM Renderer"],
    problem:
      "Tim harus mengerjakan banyak hal terpisah setiap hari: input order manual, bikin invoice satu-satu, cari template chat di grup, sampai kelola data reseller — semua di tempat berbeda-beda. Prosesnya lambat dan gampang salah karena harus bolak-balik antar tools.",
    solution:
      "Saya membangun satu dashboard yang menyatukan semuanya: Take Order dengan lookup username Roblox otomatis, Invoice Generator yang bikin invoice konsisten dalam sekali klik, Template Manager untuk balas chat customer service, dan Reseller Tools untuk manajemen reseller — semua dalam satu tempat.",
    challenge:
      "Awalnya cuma bikin template chat sederhana, tapi makin lama makin banyak yang harus ditambahin sesuai kebutuhan tim. Saya harus rombak arsitekturnya jadi custom DOM renderer sendiri (tanpa framework) biar tetap ringan meski fiturnya nambah terus. Debugging jadi lebih susah karena semua vanilla JavaScript.",
    result:
      "Sekarang semua kerjaan order, invoice, dan chat template ada di satu dashboard. Tim tidak perlu lagi buka banyak tab atau bolak-balik ke grup. 300 chat yang biasanya butuh 60+ menit selesai dalam 30 menit.",
    impact: ["80% lebih cepat", "4 fitur dalam 1 dashboard", "Dipakai 8+ orang"],
    testimonial: {
      quote:
        "Dulu order, invoice, sama template chat itu kerjaannya kepisah-pisah. Sekarang tinggal buka satu dashboard, semua ada. Kerjaan jadi jauh lebih rapi dan cepet.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
  {
    slug: "ditsuy-money",
    name: "Ditsuy | Catatan Keuangan",
    category: "Personal Project — Fullstack",
    tagline: "Web app pencatatan keuangan multi-user dengan autentikasi dan keamanan data per-user.",
    githubUrl: "https://github.com/ditsune/ditsuy-money",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Row Level Security", "PWA"],
    problem:
      "Saya dan teman-teman butuh cara mencatat pengeluaran yang gampang dipakai bareng-bareng, tapi tetap privat — data masing-masing orang tidak boleh kelihatan sama yang lain. Aplikasi catatan keuangan yang ada kebanyakan single-user atau datanya cuma disimpan di localStorage yang gampang hilang.",
    solution:
      "Saya membangun web app fullstack menggunakan Next.js dan Supabase. Setiap orang bisa signup sendiri, dan datanya otomatis terpisah lewat Row Level Security di level database — bukan cuma dibatasi di tampilan aplikasi. Ada halaman Beranda, Wawasan dengan donut chart, Transaksi dengan kalender, dan Akun untuk tracking net worth dan target tabungan. Aplikasinya juga PWA, sehingga bisa di-install di HP seperti aplikasi native.",
    challenge:
      "Ini project pertama saya yang menerapkan autentikasi dan keamanan data multi-user secara serius. Tantangan utamanya memastikan satu user benar-benar tidak bisa mengakses data user lain — bukan cuma disembunyikan di tampilan, tapi diblokir langsung di level database lewat Row Level Security. Selain itu perlu menyesuaikan struktur halaman dan flow aplikasi agar tetap sederhana meski fiturnya cukup banyak.",
    result:
      "Aplikasi yang bisa dipakai bersama dengan aman — data tiap orang benar-benar terpisah dan terlindungi. Saldo dihitung real-time dari transaksi sehingga tidak akan pernah nyasar. Project ini yang paling menunjukkan kemampuan saya di luar tools operasional — benar-benar fullstack app dengan auth dan database security yang proper.",
    impact: ["Multi-user dengan RLS", "PWA installable", "Real-time balance"],
  },
  {
    slug: "mayo-chart",
    name: "Mayo Chart | Forensic Sales Dashboard",
    category: "Internal Dashboard — Analytics Engine",
    tagline: "Dashboard yang bukan cuma menghitung, tapi juga mendeteksi anomali data secara otomatis.",
    liveUrl:
      "https://script.google.com/macros/s/AKfycbypBvGxHYkmxz--KsGJfOEjwwb2ssf2_Df4YBxbaoGISuBoArO_4ABfAgKQBvEA1s97/exec",
    githubUrl: "https://github.com/cuakproject/mayo-chart",
    tech: ["Google Apps Script", "Chart.js", "Levenshtein Algorithm"],
    problem:
      "Awalnya cuma butuh rekap penjualan dari 3 sumber berbeda. Tapi masalah yang lebih besar muncul: saldo Robux di akun sering tidak cocok antara catatan sistem dan catatan manual, dan tidak ada cara cepat untuk tahu penyebabnya — apakah kode akun ketuker, ada transaksi yang salah tercatat di akun lain, atau memang human error saat input.",
    solution:
      "Saya kembangkan dashboard ini jadi lebih dari rekap biasa — jadi semacam mesin forensik data. Selain menghitung total proses dan item terjual dari 3 sumber, sistem ini otomatis mendeteksi pola anomali: kode akun yang kemungkinan ketuker (dengan mencocokkan selisih yang berlawanan persis), transaksi yang 'ngambang' tanpa kode akun valid, dan kemungkinan salah ketik kode akun menggunakan algoritma Levenshtein distance. Ada juga fitur Deep Identify yang otomatis menentukan rentang tanggal pencarian berdasarkan kapan akun mulai dan selesai dipakai, lalu menyisir seluruh transaksi di rentang itu untuk mencari kandidat penyebab selisih.",
    challenge:
      "Bagian tersulit adalah membedakan false positive dari masalah asli — versi awal sempat salah menandai transaksi akun lain yang sebenarnya valid sebagai 'kandidat typo' hanya karena kemiripan kode. Saya harus memperketat syarat deteksi supaya tidak salah tuduh. Selain itu ada perubahan format kode akun di tengah jalan (dari MYX ke AXM) yang membuat saya harus menambahkan sistem cutoff tanggal supaya data lama tidak ikut kehitung secara keliru. Sistem juga perlu autentikasi sisi server yang tidak bisa dilewati lewat console browser, plus optimasi supaya pengambilan data dari banyak sheet sekaligus tetap cepat.",
    result:
      "Rekap yang dulu manual dan rawan salah sekarang otomatis dan mengeliminasi 95% waktu prosesnya. Lebih dari itu, tim sekarang punya alat untuk langsung tahu penyebab selisih saldo tanpa harus menelusuri ratusan baris data manual — sistem yang langsung menunjukkan kemungkinan penyebabnya beserta tingkat keyakinannya.",
    impact: ["95% lebih cepat", "Deteksi anomali otomatis", "3 sumber data terintegrasi"],
    testimonial: {
      quote:
        "Rekap yang dulu makan waktu lama dan sering beda-beda hasilnya, sekarang tinggal buka dashboard, pilih bulan, langsung keliatan semua datanya. Yang paling membantu itu pas ada selisih saldo, sistemnya langsung kasih tau kemungkinan penyebabnya.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
  {
    slug: "sheet-worker",
    name: "Sheet Worker | VILOG Pipeline",
    category: "Automation Pipeline — Production Grade",
    tagline: "Pipeline otomatis yang berjalan di Docker dengan monitoring dan bot Discord.",
    githubUrl: "https://github.com/ditsune/sheet-worker-tele",
    tech: ["Python", "Docker", "Google Sheets API", "Discord Bot"],
    problem:
      "Data order dari Telegram dan web harus dipindahkan manual ke Google Sheets setiap shift, dan proses manual ini sering menghasilkan duplikasi order yang membuat admin harus nombok. Versi awal juga masih berjalan di terminal biasa — kalau PC restart atau terminal ke-close tidak sengaja, prosesnya berhenti tanpa ada yang sadar.",
    solution:
      "Saya bangun dua pipeline otomatis (Telegram dan Web) yang berjalan sebagai container Docker terpisah dengan auto-restart kalau crash atau PC di-restart. Sistem memakai checkpoint berbasis ID agar tidak ada data dobel, dan sekarang ada bot Discord yang bisa dicek statusnya langsung lewat command chat — tidak perlu buka server untuk tahu prosesnya masih jalan atau tidak.",
    challenge:
      "Migrasi dari script biasa ke Docker banyak yang harus dipelajari dari nol — containerization, volume mounting, environment variables yang aman. Membangun sistem heartbeat monitoring yang akurat juga tricky karena dua service berjalan di container terpisah dengan PID namespace yang berbeda-beda.",
    result:
      "Sistem sekarang berjalan production-grade — otomatis restart kalau ada masalah, dan tim bisa cek status kapan saja lewat command Discord `-status` atau `-log` tanpa perlu akses server. Data order masuk real-time, duplikasi nol, dan tidak perlu ada yang memantau manual lagi.",
    impact: ["95% lebih cepat", "0 duplikasi", "Auto-restart via Docker", "Monitoring via Discord bot"],
    testimonial: {
      quote:
        "Dulu mindahin data itu nyita waktu dan sering ada yang dobel, ujung-ujungnya admin harus nombok. Sekarang datanya masuk sendiri, dan kalau mau cek jalan apa nggak tinggal chat bot-nya aja di Discord.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
  {
    slug: "sigmacro",
    name: "SigMacro | Automation Tool",
    category: "Desktop Automation",
    tagline: "Tools desktop yang mengotomatisasi login ribuan akun dengan gerakan mouse humanized.",
    githubUrl: "https://github.com/cuakproject/SigMacro",
    tech: ["AutoHotkey v2", "Image Recognition", "Bezier Curve Algorithm"],
    problem:
      "Proses login dan manajemen backup code untuk ratusan akun dilakukan manual — klik satu per satu, copy paste berulang. Selain itu, logout Xbox di Roblox juga harus dilakukan manual lewat beberapa langkah setting yang berulang setiap kali ganti akun. Volume setinggi ini bikin cara manual jadi lambat dan rawan human error.",
    solution:
      "Saya membangun tools desktop dengan GUI menggunakan AutoHotkey v2 yang mengotomatisasi seluruh alur login, backup code, dan logout Xbox dalam satu aplikasi. Dilengkapi image recognition dengan toleransi warna yang bisa dikonfigurasi biar tetap akurat meski tampilan berubah, gerakan mouse pakai kurva Bezier biar terlihat natural, dan visual region picker yang memudahkan kalibrasi ulang koordinat layar tanpa harus edit file konfigurasi manual.",
    challenge:
      "Belajar AutoHotkey v2 dari nol, implementasi image recognition yang akurat di berbagai kondisi layar, dan yang paling susah adalah bikin mouse movement yang benar-benar terlihat manusiawi biar tidak terdeteksi sebagai automation. Menambahkan visual region picker juga butuh effort tersendiri — harus bikin overlay GUI yang bisa menangkap koordinat layar secara akurat dan menyimpannya otomatis ke file konfigurasi.",
    result:
      "Proses yang sebelumnya diklik satu per satu sekarang jalan otomatis — admin tinggal klik sekali dan pantau. Dilengkapi juga statistik sesi, auto-update, dan settings dialog biar bisa dikonfigurasi tanpa edit file manual. Tools paling powerful yang saya buat, memangkas 90% kerja manual.",
    impact: ["90% lebih cepat", "Login + Xbox logout otomatis", "Auto-update built-in"],
    testimonial: {
      quote:
        "Yang tadinya harus klik-klik manual terus buat login banyak akun, sekarang tinggal klik sekali dan dibiarkan jalan sendiri. Beda banget rasanya.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
  {
    slug: "swannhub",
    name: "SwannHub | Login Automation",
    category: "Backend Automation",
    tagline: "Server yang memotong waktu proses login dari 3 menit jadi 1 menit per akun.",
    githubUrl: "https://github.com/ditsune/SwannHub",
    tech: ["Node.js", "Express", "Playwright"],
    problem:
      "Roblox mengharuskan login via web sebelum bisa diakses di Microsoft Store. Proses ini manual dan berulang untuk setiap akun. Dengan volume akun tinggi setiap shift, ini jadi bottleneck nyata — satu akun butuh 3 menit, dikali puluhan akun per shift.",
    solution:
      "Saya bangun server Express yang memakai Playwright untuk mengotomatisasi proses login di browser, dengan worker terpisah yang menangani logika login sendiri — jadi server utama tetap ringan dan gampang di-maintain.",
    challenge:
      "Eksekusi ide ini yang paling susah dari semua project yang pernah saya buat. Browser automation punya banyak edge case, dan saya sampai begadang berhari-hari membenarkan error satu per satu.",
    result:
      "Waktu proses per akun turun dari 3 menit jadi 1 menit. Untuk volume puluhan akun per shift, penghematan waktunya signifikan.",
    impact: ["3 menit → 1 menit", "Worker terpisah", "Automated browser control"],
    testimonial: {
      quote:
        "Dari dulu pengen ada tools buat ini tapi ga ada yang bisa bikin. Semenjak ada SwannHub, yang tadinya harus login manual satu-satu sekarang tinggal drop akunnya dan ditungguin hasilnya.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
  {
    slug: "sigmadots",
    name: "SigmaDOTS | Chrome Extension",
    category: "Browser Extension",
    tagline: "Ekstensi yang mengotomatisasi workflow di tiga platform sekaligus.",
    githubUrl: "https://github.com/ditsune/sigmadots-nokey",
    tech: ["JavaScript", "Chrome Extension Manifest V3", "Service Worker"],
    problem:
      "Ada banyak task kecil yang berulang di tiga platform berbeda — logout Xbox di Roblox butuh beberapa langkah manual, tidak ada shortcut login cepat, copy data di Google Sheets harus manual satu per satu, dan generate invoice juga masih dikerjakan manual dari data yang ada di sheet. Kecil sendiri-sendiri, tapi dikalikan ratusan kali sehari jadi sangat melelahkan.",
    solution:
      "Saya membangun Chrome extension Manifest V3 yang nambahin utilitas langsung di tiga platform: Roblox (quick-access button, login helper, 2SV helper, manajemen Xbox), Google Sheets (auto-copy, generate invoice otomatis dari data transaksi, notifikasi toast), dan Mayoblox (bantuan workflow order). Ditambah fitur export/import settings biar konfigurasi bisa dipindah antar device dengan mudah.",
    challenge:
      "Belajar arsitektur Manifest V3 dengan service worker, implementasi Chrome Storage dan Cookies API dengan aman, dan mikirin rate limiting biar tidak spam ke sistem yang diotomasi. Menambahkan fitur generate invoice juga perlu logika parsing data sheet yang cukup rumit karena formatnya harus tetap konsisten dengan invoice yang biasa dibuat manual.",
    result:
      "Task-task kecil yang dulu makan banyak klik sekarang jadi satu klik atau otomatis sepenuhnya — termasuk pembuatan invoice yang sebelumnya makan waktu karena harus disusun manual. Kumulatifnya, ekstensi ini memangkas 90% effort untuk task repetitif harian di tiga platform sekaligus.",
    impact: ["90% lebih cepat", "3 platform terintegrasi", "Generate invoice otomatis"],
    testimonial: {
      quote:
        "Yang paling berasa itu logout Xbox — dulu harus buka setting, scroll, klik sana sini. Sekarang satu klik dari home page. Fitur invoice otomatis juga ngebantu banget, gak perlu susun manual lagi.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
  {
    slug: "mayopass",
    name: "Mayopass | Gamepass & Reseller Tools",
    category: "Admin Tools",
    tagline: "Kalkulator harga Gift Gamepass dan manajemen reseller berbasis web.",
    liveUrl: "https://mayopass.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayopass",
    tech: ["Node.js", "MongoDB", "Vercel Serverless"],
    problem:
      "Menghitung harga Gift Gamepass dan mengelola data reseller dilakukan manual — dan sering salah hitung. Salah hitung berarti admin harus nombok selisihnya.",
    solution:
      "Saya membangun web app dengan backend serverless yang terintegrasi database MongoDB. Ada tab terpisah untuk Gift Gamepass, Reseller, dan Tools tambahan — semua kalkulasi jadi instan dan konsisten.",
    challenge:
      "Belajar setup MongoDB dan serverless function dari nol, serta bikin logic kalkulasi yang handle berbagai skenario harga tanpa celah untuk salah hitung.",
    result:
      "Tidak ada lagi salah hitung. Proses yang tadinya manual dan rawan error sekarang selesai dalam detik dengan hasil yang selalu akurat.",
    impact: ["85% lebih cepat", "0 salah hitung", "Serverless architecture"],
    testimonial: {
      quote:
        "Hitung harga manual itu sering banget salah, ujung-ujungnya bingung sendiri. Sekarang tinggal input di Mayopass, langsung keluar hasilnya. Ga pernah salah lagi.",
      author: "Rekan Tim Operasional, Mayoblox",
    },
  },
];
