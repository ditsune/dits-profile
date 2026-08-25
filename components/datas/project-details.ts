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
      "Saya dan teman-teman butuh cara mencatat pengeluaran yang gampang dipakai bareng-bareng, tapi tetap privat — data masing-masing orang tidak boleh kelihatan sama yang lain. Aplikasi catatan keuangan yang ada kebanyakan single-user atau data-nya cuma disimpan di localStorage yang gampang hilang.",
    solution:
      "Saya membangun web app fullstack pakai Next.js dan Supabase. Setiap orang bisa signup sendiri, dan datanya otomatis terpisah lewat Row Level Security di level database — bukan cuma dibatasi di tampilan aplikasi. Ada halaman Beranda, Wawasan dengan donut chart, Transaksi dengan kalender, dan Akun untuk tracking net worth dan target tabungan. Aplikasinya juga PWA, jadi bisa di-install di HP kayak aplikasi native.",
    challenge:
      "Ini project pertama saya yang beneran pakai autentikasi dan keamanan data multi-user secara serius. Belajar Row Level Security dari nol — gimana caranya mastiin satu user beneran tidak bisa akses data user lain, bukan cuma disembunyikan di UI tapi diblokir di level database. Juga belajar setup PWA biar bisa jalan mulus di HP.",
    result:
      "Aplikasi yang bisa dipakai bareng-bareng dengan aman — data tiap orang beneran terpisah dan terlindungi. Saldo dihitung real-time dari transaksi jadi tidak akan pernah nyasar. Project ini yang paling nunjukin kemampuan saya di luar tools ops — beneran fullstack app dengan auth dan database security yang proper.",
    impact: ["Multi-user dengan RLS", "PWA installable", "Real-time balance"],
  },
  {
    slug: "mayo-chart",
    name: "Mayo Chart | Sales Dashboard",
    category: "Internal Dashboard",
    tagline: "Dashboard yang menggabungkan data dari 3 sumber jadi satu visualisasi real-time.",
    liveUrl:
      "https://script.google.com/macros/s/AKfycbypBvGxHYkmxz--KsGJfOEjwwb2ssf2_Df4YBxbaoGISuBoArO_4ABfAgKQBvEA1s97/exec",
    githubUrl: "https://github.com/cuakproject/mayo-chart",
    tech: ["Google Apps Script", "Chart.js", "HTML", "JavaScript"],
    problem:
      "Rekap penjualan dan performa admin harus dihitung manual dari 3 sumber berbeda: Website, Telegram, dan Reseller. Buka satu-satu, hitung, salin, hitung ulang — lama dan sering salah. Angka yang harusnya jadi acuan malah jadi sumber debat karena beda cara hitung.",
    solution:
      "Saya membangun dashboard berbasis Google Apps Script yang otomatis narik data dari ketiga sumber sekaligus. Ada filter periode fleksibel, tab terpisah untuk lihat data gabungan atau per sumber, ranking admin per tim, sampai podium top 3 item terjual dengan visualisasi donut chart.",
    challenge:
      "Yang paling susah adalah mikirin logika baca data yang konsisten padahal format tiap sheet sedikit beda-beda. Juga harus bikin sistem alias nama biar satu admin yang ditulis beda-beda di tiap sheet tetap kehitung sebagai orang yang sama. Selain itu mikirin UI/UX biar tetap simpel walau datanya kompleks.",
    result:
      "Rekap yang dulu makan waktu lama dan rawan salah sekarang selesai dalam hitungan detik. Pilih bulan, klik hitung, semua data keluar akurat — tidak ada lagi beda hasil karena semua orang lihat data dari sumber yang sama.",
    impact: ["95% lebih cepat", "3 sumber data terintegrasi", "0 salah hitung"],
    testimonial: {
      quote:
        "Rekap yang dulu makan waktu lama dan sering beda-beda hasilnya, sekarang tinggal buka dashboard, pilih bulan, langsung keliatan semua datanya. Akurat dan cepet.",
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
      "Data order dari Telegram dan web harus dipindahkan manual ke Google Sheets setiap shift, dan proses manual ini sering menghasilkan duplikasi order yang bikin admin harus nombok. Versi awal juga masih jalan di terminal biasa — kalau PC restart atau terminal ke-close gak sengaja, prosesnya berhenti tanpa ada yang sadar.",
    solution:
      "Saya membangun dua pipeline otomatis (Telegram dan Web) yang jalan sebagai container Docker terpisah dengan auto-restart kalau crash atau PC di-restart. Sistem pakai checkpoint berbasis ID biar tidak ada data dobel, dan sekarang ada bot Discord yang bisa dicek statusnya langsung lewat command chat — tidak perlu buka server buat tau prosesnya masih jalan atau tidak.",
    challenge:
      "Migrasi dari script biasa ke Docker itu banyak yang harus dipelajari dari nol — containerization, volume mounting, environment variables yang aman. Bikin sistem heartbeat monitoring yang akurat juga tricky karena dua service jalan di container terpisah dengan PID namespace yang beda-beda.",
    result:
      "Sistem sekarang jalan production-grade — otomatis restart kalau ada masalah, dan tim bisa cek status kapan aja lewat command Discord `-status` atau `-log` tanpa perlu akses server. Data order masuk real-time, duplikasi nol, dan tidak perlu ada yang mantau manual lagi.",
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
      "Proses login dan manajemen backup code untuk ratusan akun dilakukan manual — klik satu per satu, copy paste berulang. Volume setinggi ini bikin cara manual jadi lambat dan rawan human error.",
    solution:
      "Saya membangun tools desktop dengan GUI menggunakan AutoHotkey v2 yang mengotomatisasi seluruh alur login dan backup code. Dilengkapi image recognition dengan toleransi warna yang bisa dikonfigurasi biar tetap akurat meski tampilan berubah, dan gerakan mouse pakai kurva Bezier biar terlihat natural, bukan kayak bot.",
    challenge:
      "Belajar AutoHotkey v2 dari nol, implementasi image recognition yang akurat di berbagai kondisi layar, dan yang paling susah adalah bikin mouse movement yang benar-benar terlihat manusiawi biar tidak terdeteksi sebagai automation.",
    result:
      "Proses yang sebelumnya diklik satu per satu sekarang jalan otomatis — admin tinggal klik sekali dan pantau. Dilengkapi juga statistik sesi, auto-update, dan settings dialog biar bisa dikonfigurasi tanpa edit file manual. Tools paling powerful yang saya buat, memangkas 90% kerja manual.",
    impact: ["90% lebih cepat", "Login otomatis", "Auto-update built-in"],
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
    tech: ["Node.js", "Express", "Puppeteer"],
    problem:
      "Roblox mengharuskan login via web sebelum bisa diakses di Microsoft Store. Proses ini manual dan berulang untuk setiap akun. Dengan volume akun tinggi setiap shift, ini jadi bottleneck nyata — satu akun butuh 3 menit, dikali puluhan akun per shift.",
    solution:
      "Saya membangun server Express yang pakai Puppeteer untuk mengotomatisasi proses login di browser, dengan worker terpisah yang menangani logika login sendiri — jadi server utama tetap ringan dan gampang di-maintain.",
    challenge:
      "Eksekusi ide ini yang paling susah dari semua project yang pernah saya buat. Puppeteer punya banyak edge case, dan saya sampai begadang berhari-hari benerin error satu per satu.",
    result:
      "Waktu proses per akun turun dari 3 menit jadi 1 menit. Untuk volume puluhan akun per shift, penghematan waktunya signifikan banget.",
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
      "Ada banyak task kecil yang berulang di tiga platform berbeda — logout Xbox di Roblox butuh beberapa langkah manual, tidak ada shortcut login cepat, dan copy data di Google Sheets harus manual satu per satu. Kecil sendiri-sendiri, tapi dikalikan ratusan kali sehari jadi sangat melelahkan.",
    solution:
      "Saya membangun Chrome extension Manifest V3 yang nambahin utilitas langsung di tiga platform: Roblox (quick-access button, login helper, 2SV helper, manajemen Xbox), Google Sheets (auto-copy, notifikasi toast), dan Mayoblox (bantuan workflow order).",
    challenge:
      "Belajar arsitektur Manifest V3 dengan service worker, implementasi Chrome Storage dan Cookies API dengan aman, dan mikirin rate limiting biar tidak spam ke sistem yang diotomasi.",
    result:
      "Task-task kecil yang dulu makan banyak klik sekarang jadi satu klik atau otomatis sepenuhnya. Kumulatifnya, ekstensi ini memangkas 90% effort untuk task repetitif harian di tiga platform sekaligus.",
    impact: ["90% lebih cepat", "3 platform terintegrasi", "Manifest V3"],
    testimonial: {
      quote:
        "Yang paling berasa itu logout Xbox — dulu harus buka setting, scroll, klik sana sini. Sekarang satu klik dari home page. Hal kecil tapi ngaruh banget kalau dilakukan ratusan kali sehari.",
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