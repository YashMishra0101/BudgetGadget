import React from "react";

// Phone Images
import m1 from "../assets/13.png";
import m2 from "../assets/14.png";
import m3 from "../assets/14plus.png";
import m4 from "../assets/15.png";

// Laptop Images
import p1 from "../assets/airm1.jpg";
import p2 from "../assets/prom1.jpg";
import p3 from "../assets/prom1pro.jpg";
import p4 from "../assets/prom1pro16.jpg";

// Watches
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";

// Graphics card
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";

// Processors
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import k3 from "../assets/k3.jpg";
import k4 from "../assets/k4.jpg";

// Ipad
import x1 from "../assets/x1.jpg";
import x2 from "../assets/x2.jpg";
import x3 from "../assets/x3.jpg";
import x4 from "../assets/x4.jpg";
import { useParams } from "react-router";
import Footer from "../component/Footer";

const products = [
  {
    img: m1,
    title: "Iphone 13",
    id: 1,
    amazon:
      "https://www.amazon.in/Apple-iPhone-13-512-GB/dp/B09V4KHL1B/ref=sr_1_1_sspa?crid=WPKT8EK93MM&dib=eyJ2IjoiMSJ9.qdj4Y3A3_fgvqmTme-CrnjliKaOdwFHLzrg0lIQWApCCIVl1kzyFJf2Z-3HkVcL46ybMq7s3Jjxl6cU7bsXbG3WhHZsh_rXgabDCVT6betIiESr1a1ecmuuK7ZrVMoaPh5BuPGAJ_x6a0TpB4Qi8gI54-W2ewHuUkegGEAjsW87URsTTXVTUNhZPDYh1Ag1UV9lR6tYzFhSCZP2GmPSsdRXH1qagyFu1Rcvi6iD3X-8.zRkjisgRAW2JUZ9DM-IAPtO-UqwvhCIMUke0iyo8Vzo&dib_tag=se&keywords=iphone+13+green&qid=1712948216&sprefix=iphone+13+gree%2Caps%2C294&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    flipkart:
      "https://www.flipkart.com/apple-iphone-13-green-128-gb/p/itm18a55937b2607?pid=MOBGC9VGSU9DWGJZ&lid=LSTMOBGC9VGSU9DWGJZUXUVYB&marketplace=FLIPKART&q=iphone+13+green+color&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=f9172b8a-2b60-4a4f-ac0b-79dd2a92cd2c.MOBGC9VGSU9DWGJZ.SEARCH&ppt=sp&ppn=sp&ssid=0wdw0llads0000001712948188394&qH=f060f3c7d8abaa10",
    price: "62,800",
    rating: 3.5,
    description: `15 cm (6.1-inch) Super Retina XDR display
		Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
		Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
		12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
		A15 Bionic chip for lightning-fast performance`,
  },
  {
    img: m2,
    title: "Iphone 14",
    id: 2,
    amazon:
      "https://www.amazon.in/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_1_sspa?crid=2LLLA8BTX8PS7&dib=eyJ2IjoiMSJ9.IFiw0WS2EEx8MDuaqWuZqOiKUzWq2VRnIX2H_cMY5xp95rdZr_CDlVfXrDsZZEL5PDu-7KJFK4IUJB2s7NZA4dyCvmKwu6d8yc2zxdBHIinJ0MilrKs13tQoQ6oGEsAoE9MtncVa1eSweMUwY1bFdToHVU6Phjx8KLM1qX6Oekc8ktApPW0B7HQFrwhSN6EPSwTK2Dm4PfPzHSREsXghceK6yFFtEHKbU9eAaNjHSGg.0XI6Mrrz_evbE7uDADzosqaMtv_rBAnk4X2J-T60m5I&dib_tag=se&keywords=iphone+14+green&qid=1712948248&sprefix=iphone+14+green%2Caps%2C523&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    flipkart:
      "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=iphone+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=15a64000-bc4c-494b-b8d3-463a2ea6f2ee.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=g3xbq3v2sg0000001712948270199&qH=860f3715b8db08cd",
    price: "62,800",
    rating: 3.5,
    description: `15.40 cm (6.1-inch) Super Retina XDR display
		Advanced camera system for better photos in any light
		Cinematic mode now in 4K Dolby Vision up to 30 fps
		Action mode for smooth, steady, handheld videos
		Vital safety technology — Crash Detection calls for help when you can’t
		All-day battery life and up to 20 hours of video playback
		Industry-leading durability features with Ceramic Shield and water resistance`,
  },
  {
    img: m3,
    title: "Iphone 14 Plus",
    id: 3,
    amazon:
      "https://www.amazon.in/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_2_sspa?crid=1HVASKKY19N2V&dib=eyJ2IjoiMSJ9.c8R_PPdvTSPNK-MunDjJvaOzLXEaAtkRYjqUaA5evSOAwJMBiTlUUJUNZM_bnab28dNljc3h151pu98U9XVBJOd25ywL0MYm515ZB4BBXJzDSjLhPXUYbQ4IOM0zn1dFsgPq9JbHat4BC8UxqVGR-Gf1zZiwTt96avuYVv26o-3lZOGQ6JRW-KiFMUvP5_YMVHEJm7mwL-dYwO-rn2P4nEUSdDBTghjwKXLVcXClL_I.J2z2oy9h1lpfAyKVFEhszzvWDXFLXwf79U83SXazjAA&dib_tag=se&keywords=iphone+14+plus&qid=1712948301&sprefix=iphone+14+plus%2Caps%2C446&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    flipkart:
      "https://www.flipkart.com/apple-iphone-14-plus-blue-128-gb/p/itmac8385391b02b?pid=MOBGHWFHUYWGB5F2&lid=LSTMOBGHWFHUYWGB5F2XIJVA7&marketplace=FLIPKART&q=iphone+14+plus&store=tyy%2F4io&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&fm=Search&iid=ff6e8d31-4c9e-453e-a576-79cec87de144.MOBGHWFHUYWGB5F2.SEARCH&ppt=sp&ppn=sp&ssid=rbstld3u7k0000001712948325057&qH=70897fd4f67467a5",
    price: "72,200",
    rating: 3.5,
    description: `15.40 cm (6.1-inch) Super Retina XDR display
		Advanced camera system for better photos in any light
		Cinematic mode now in 4K Dolby Vision up to 30 fps
		Action mode for smooth, steady, handheld videos
		Vital safety technology — Crash Detection calls for help when you can’t
		All-day battery life and up to 20 hours of video playback
		Industry-leading durability features with Ceramic Shield and water resistance`,
  },
  {
    img: m4,
    title: "Iphone 15",
    id: 4,
    amazon:
      "https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX3TW6X/ref=sr_1_7?crid=2RXQXHVFOLPC6&dib=eyJ2IjoiMSJ9.8-aKrERwPzdGyJWfWOa56Gj_2Dcms8p6tnd2jXAI_PR6YYmEpHxp1ek5oho5l2JwGhXGfOYZfq84YAK8MIW2g8EJxFNluIQneY__A6MK-7PJKO1ViW2azpiLKtFAY8MldKMXZ6HGLBdY2sukDSmtx9CfHo6oNRmth0Ud3wGROX-eHv0-ngYvx1XA6bgNd-cmJ0RBjFuiG5BpzmWz05HBj7r0ryOfBWi4Eb2XX05ye1s.DT6p9BVtOcIvqjb7ZKVOJUVWj_cvRXEjK2oa40ttTcs&dib_tag=se&keywords=iphone+15&qid=1712948407&sprefix=iphone+15%2Caps%2C576&sr=8-7",
    flipkart:
      "https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5MHAHWI&marketplace=FLIPKART&q=ihpne+15&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=742cd745-2855-42dc-a9c9-c017c93341e2.MOBGTAGPNMZA5PU5.SEARCH&ppt=pp&ppn=pp&ssid=01t1q08efk0000001712948376418&qH=f9a4a5bb6aecadd8",
    price: "73,900",
    rating: 3.5,
    description: `DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.
		INNOVATIVE DESIGN — iPhone 15 features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass 
		`,
  },

  {
    img: p1,
    title: "Apple MacBook Air M1",
    id: 9,
    amazon:
      "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3C6FBPF/ref=sr_1_2_sspa?crid=UP6KN9J2WG2Y&dib=eyJ2IjoiMSJ9.pazAXfnBT4FVL_q_Y3uSioZtslgH-dUyXJ3Gr4_xgc3l5KqlGiaQ3jFlQochcxUbbgjNlWTiEJfoWk7YmuNDMSaNJtyQdq-5tD8epXcuiLOPdu6_4d9j7UNzU09V2k5-0niSYzuuza9LmMfVb9jH0PyuAXpsjczH8d22ASz99nY14caanhGcODSzmBomRrub8WW97kSzW1WRkd3rBgcV0AH4UnQHZ01SpvTjWUMb1JE.tQHJGFN496XSnypVNrnzB2zx0afsOX83TTlOEp5Z8rQ&dib_tag=se&keywords=Apple+MacBook+Air+M1&qid=1712950697&sprefix=apple+macbook+air+m1%2Caps%2C243&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    flipkart:
      "https://www.flipkart.com/apple-2022-macbook-air-m2-8-gb-256-gb-ssd-mac-os-monterey-mly33hn-a/p/itm0946c05e6335c?pid=COMGFB2GMCRXZG85&lid=LSTCOMGFB2GMCRXZG855GPGWQ&marketplace=FLIPKART&q=Apple+MacBook+Air+M1&store=6bo%2Fb5g&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=3dbc212d-8e18-432c-baf3-40395e43ce13.COMGFB2GMCRXZG85.SEARCH&ppt=pp&ppn=pp&ssid=joq014dm800000001712950660187&qH=edc5156cca3ce9c3",
    price: "91,990",
    rating: 3.5,
    description: `STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.
		SUPERCHARGED BY M2 – Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.
		UP TO 18 HOURS OF BATTERY LIFE – Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.
		BIG, BEAUTIFUL DISPLAY – The 34.46-centimetre (13.6-inch) Liquid Retina display features over 500 nits of brightness, P3 wide colour and support for one billion colours for vibrant images and incredible detail.
		ADVANCED CAMERA AND AUDIO – Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio.`,
  },
  {
    img: p2,
    title: "Apple MacBook Pro M1",
    id: 10,
    amazon:
      "https://www.amazon.in/Apple-MacBook-14-inch-10%E2%80%91core-Unified/dp/B0CM5R4FP5/ref=sr_1_3?crid=3AJANPPK7YV0W&dib=eyJ2IjoiMSJ9.pazAXfnBT4FVL_q_Y3uSilxbsDQWUpRZFBK2MDLb_spc2v268LfCqlmzt-igUQ0YgPSwq75c_dwiFeEGqi0y_OkW8omgCFmMvEJg6r_JEzHtfx5GECzGDa9PqCLR0tI-Suw9SChoGjWbvAOxd4zIJvnsqiWiwM4KWPPvs7zPmMoAv-9HfruN7XEhfW_nHe3rUuxfKqIwH72WLfwkoOFpzfEqrdG5ev3_UYObpiCQ4BE.sNJoorS-VKuQxX2R4gwCYwNgMo9UAS68mfgeIODGTz8&dib_tag=se&keywords=Apple+MacBook+Pro+M1&qid=1712950605&sprefix=apple+macbook+pro+m1%2Caps%2C248&sr=8-3",
    flipkart:
      "https://www.flipkart.com/apple-2023-macbook-pro-m3-8-gb-512-gb-ssd-macos-sonoma-mtl73hn-a/p/itmcd041a34ee857?pid=COMGUTX8HH4XNDZ7&lid=LSTCOMGUTX8HH4XNDZ7T9BEEP&marketplace=FLIPKART&q=Apple+MacBook+Pro+M1&store=6bo%2Fb5g&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=2d37da6f-0c75-46aa-96ba-872c4eddbe78.COMGUTX8HH4XNDZ7.SEARCH&ppt=sp&ppn=sp&ssid=hba0z9hxvk0000001712950635424&qH=be2b8382a6207fd2",
    price: "1,59,790",
    rating: 3.5,
    description: `SUPERCHARGED BY M3 — With an 8-core CPU and 10-core GPU using hardware-accelerated ray tracing, the Apple M3 chip can help you blaze through everyday multitasking and take on pro projects like editing thousands of photos or 4K video.
		UP TO 22 HOURS OF BATTERY LIFE — Go all day thanks to the power-efficient design of Apple silicon. MacBook Pro delivers the same exceptional performance whether it’s running on battery or plugged in.
		RESPONSIVE UNIFIED MEMORY AND STORAGE — Up to 24GB of unified memory makes everything you do fast and fluid. Up to 2TB of superfast SSD storage launches apps and opens files in an instant.
		BRILLIANT PRO DISPLAY — The 35.97 cm (14.2″) Liquid Retina XDR display features Extreme Dynamic Range; 1,000 nits of sustained brightness for stunning HDR content; up to 600 nits of brightness for SDR content; and pro reference modes for doing your best work on the go.`,
  },
  {
    img: p3,
    title: "Apple MacBook Pro M1 Pro",
    id: 11,
    amazon:
      "https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5XSG8Z/ref=sr_1_2?crid=1I09LH0R1B0XW&dib=eyJ2IjoiMSJ9.gsO3F84_ZX7rynhXXuMDMUyuC7Z8sCKOQAIqcjZRLJSwcEd9EOacHFGYSIWn2yZXiyhp4RrJ9Ft_7Le74YeX-HiTeHvUh0te4_C_kMqnGnGICsNGUX2_701rzAvzmkIpspgR4ZXFeu6EjuA8dj-yhrqTBEmJEK3pXlV3BuFKOKAhMJ6f-II19yG6xOel10PzAi591S_B1SKooi6sGypIbA.4lltldRrlup_AyF_U9vHGlJH9XfBzxySPVWUjW09dqU&dib_tag=se&keywords=Apple+MacBook+Pro+M1+Pro&qid=1712950579&sprefix=apple+macbook+pro+m1+pro%2Caps%2C228&sr=8-2",
    flipkart:
      "https://www.flipkart.com/apple-2021-macbook-pro-m1-16-gb-1-tb-ssd-mac-os-monterey-mkgq3hn-a/p/itm475603293be45?pid=COMG7X7HX4NNCVEN&lid=LSTCOMG7X7HX4NNCVENIJOXDZ&marketplace=FLIPKART&q=Apple+MacBook+Pro+M1+Pro&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=712f1da0-fa82-4337-b11a-37701ab517c5.COMG7X7HX4NNCVEN.SEARCH&ppt=pp&ppn=pp&ssid=j32xt6si340000001712950542401&qH=af166a77c98581cb",
    price: "2,34,990",
    rating: 3.5,
    description: `All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
		Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
		Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
		Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.`,
  },
  {
    img: p4,
    title: "Apple MacBook Pro M1 16 Inch",
    id: 12,
    amazon:
      "https://www.amazon.in/Apple-MacBook-16-inch-12%E2%80%91core-18%E2%80%91core/dp/B0CM5QWD5Q/ref=sr_1_2?crid=HITFDINZ1ILF&dib=eyJ2IjoiMSJ9.qmJXsZPI80kauq2GQTDsTY-4m25AFVnpo1_amRQ6e22kC4x06-uEx5xg3AIsvv0PmVRpthwS3g4ZU5sirSP1AXV-fEvcX9or7OKGEDSrfdJyKvRkS6iZPeIC9blhcd-VVDe9C3uYyfJr4FMnLbryqA.bnRTxOYFtCZxkKhtNmSror2KTUXoAgmr7nUkDGtS8BY&dib_tag=se&keywords=Apple+MacBook+Pro+M1+16+Inch&qid=1712950391&sprefix=apple+macbook+pro+m1+16+inch%2Caps%2C230&sr=8-2",
    flipkart:
      "https://www.flipkart.com/apple-2023-macbook-pro-m3-18-gb-512-gb-ssd-macos-sonoma-mrw13hn-a/p/itm66c670dc3367b?pid=COMGUTX8NYVKRXTF&lid=LSTCOMGUTX8NYVKRXTFOQKB7R&marketplace=FLIPKART&q=Apple+MacBook+Pro+M1+16+Inch&store=6bo%2Fb5g&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=dc5fd7a0-75b8-4c6a-ba98-684258c2617e.COMGUTX8NYVKRXTF.SEARCH&ppt=hp&ppn=homepage&ssid=aepijfweq80000001712950508137&qH=5dfbb9808d978bbc",
    price: "2,89,900",
    rating: 3.5,
    description: `SUPERCHARGED BY M3 PRO OR M3 MAX — The Apple M3 Pro chip, with a 12-core CPU and 18-core GPU using hardware-accelerated ray tracing, delivers amazing performance for demanding workflows like manipulating gigapixel panoramas or compiling millions of lines of code. M3 Max, with an up to 16-core CPU and up to 40-core GPU, drives extreme performance for the most advanced workflows like rendering intricate 3D content or developing transformer models with billions of parameters.
		UP TO 22 HOURS OF BATTERY LIFE — Go all day thanks to the power-efficient design of Apple silicon. MacBook Pro delivers the same exceptional performance whether it’s running on battery or plugged in.
		RESPONSIVE UNIFIED MEMORY AND STORAGE — Up to 36GB (M3 Pro) or up to 128GB (M3 Max) of unified memory makes everything you do fast and fluid. Up to 4TB (M3 Pro) or up to 8TB (M3 Max) of superfast SSD storage launches apps and opens files in an instant.`,
  },
  {
    img: w1,
    title: "Apple Watch SE",
    id: 8,
    amazon:
      "https://www.amazon.in/Apple-Cellular-Smartwatch-Midnight-Detection/dp/B0CHY4BYG4/ref=sr_1_3?crid=QYVTU5G37485&dib=eyJ2IjoiMSJ9.z9vXaEHp6NxO6XEdO0vZTLv0k5fMiP1MTVwFDCHDGQz_sI-leANZaoZKrWkM0DwijkoEwgdxIeu_1FaD5jmiONY7TVz0pY2xIPjo3Svx-YRxtAYtDoTgPPgduaZjbK6_ia84fN1vHw4uDeZxTS6iR18q0RF9jVSKLCFsXFyu-hMusQ4hDW7rHelMia_aO5DZQMZVKmUTlu2VeQ_UQKNa3m-5gu2E77sVwU2TK54fBmY.uaZ9Mkw2M0ZSqGcXNJVZ9_VsjgzEx_JltwtK9g38Neo&dib_tag=se&keywords=watches+digital+apple&qid=1712991250&sprefix=watches+digital+appl%2Caps%2C324&sr=8-3",
    price: "35,199",
    rating: 3.5,
    flipkart:
      "https://www.flipkart.com/apple-watch-se-mydp2hn-a-40-mm-space-grey-aluminium-case-black-sport-band/p/itm0408d9bfea3ea",
    description: `WHY APPLE WATCH SE — All the essentials to help you be motivated and active, keep connected, track your health, and stay safe. The Smart Stack and redesigned apps in watchOS 10 help you see more information at a glance. With features like Crash Detection and enhanced workout metrics, Apple Watch SE is a better value than ever.
		CARBON NEUTRAL — Apple Watch SE (2nd generation) paired with the latest Sport Loop is carbon neutral.
		CELLULAR CONNECTIVITY—Send a text, make a call, and stream music and podcasts without your iPhone nearby. Add a cellular plan to stay connected in more places than ever.`,
  },
  {
    img: w2,
    title: "Apple Watch SE (2nd Gen)",
    id: 5,
    price: "23,900",
    rating: 3.5,
    amazon:
      "https://www.amazon.in/Apple-Watch-Starlight-Aluminium-Sport/dp/B0BDKHY1HH/ref=sr_1_4?crid=QYVTU5G37485&dib=eyJ2IjoiMSJ9.z9vXaEHp6NxO6XEdO0vZTLv0k5fMiP1MTVwFDCHDGQz_sI-leANZaoZKrWkM0DwijkoEwgdxIeu_1FaD5jmiONY7TVz0pY2xIPjo3Svx-YRxtAYtDoTgPPgduaZjbK6_ia84fN1vHw4uDeZxTS6iR18q0RF9jVSKLCFsXFyu-hMusQ4hDW7rHelMia_aO5DZQMZVKmUTlu2VeQ_UQKNa3m-5gu2E77sVwU2TK54fBmY.uaZ9Mkw2M0ZSqGcXNJVZ9_VsjgzEx_JltwtK9g38Neo&dib_tag=se&keywords=watches%2Bdigital%2Bapple&qid=1712991250&sprefix=watches%2Bdigital%2Bappl%2Caps%2C324&sr=8-4&th=1",
    flipkart:
      "https://www.flipkart.com/apple-watch-se-gps-2nd-gen-heart-rate-monitor-crash-detection-sleep-tracking/p/itmfc1475f362c97?pid=SMWGHWZ2Z8RJ537V&lid=LSTSMWGHWZ2Z8RJ537VWF6LVE&marketplace=FLIPKART&q=Apple+Watch+SE+%282nd+Gen%29&store=ajy%2Fbuh&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=57761b15-7feb-4d88-9347-242046a71926.SMWGHWZ2Z8RJ537V.SEARCH&ppt=hp&ppn=homepage&ssid=6u62051htc0000001712991802452&qH=cee473c7f620fd40",
    description: `WHY APPLE WATCH SE — All the essentials to help you monitor your fitness, keep connected, track your health and stay safe. Now up to 20% faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever.
		EASILY CUSTOMISABLE — Available in a range of sizes and colours, with dozens of straps to choose from and watch faces with complications tailored to whatever you’re into.`,
  },
  {
    title: "Samsung Galaxy Fit3",
    id: 6,
    img: w3,
    price: "10,999",
    rating: 3.5,
    amazon:
      "https://www.amazon.in/Galaxy-Watch4-Classic-4-6cm-Black/dp/B09DG7YQR1/ref=sr_1_4?crid=CPVMV364O4SQ&dib=eyJ2IjoiMSJ9.Q7TNlquARCSMWMy6EAFOvbfnbxDbHaD1R6XbC2S_lGTg0_GHWmV2wy0n7qJbtCLXwCfA-QbDD9bEw1uzcC6ZI-74A04erCC6TirWNJRWfvUxJdrDLc60rE6-bXTH2hAkC60QdAa6G5WcutAlmqWrBKomVKEIBVJYmqEJFrfubgX9ePxQmaPmlTLAlEhWMqsLUqbfZOWY08HlPG3e6wHMU4v6et4hg6fS20tlwT_9R0Y.rebGzq7uKn3xK2PzymFks6HO6lrktT834IzGUCNvQfQ&dib_tag=se&keywords=samsung%2Bwatch&qid=1712992057&sprefix=samsung%2Bwatc%2Caps%2C301&sr=8-4&th=1",
    flipkart:
      "https://www.flipkart.com/samsung-watch-4-classic-lte-46mm-super-amoled-calling-body-composition-tracking/p/itmb34d6e24a0d47?pid=SMWG664GRZ3VKANY&lid=LSTSMWG664GRZ3VKANYHY9PR4&marketplace=FLIPKART&q=samsung+watches&store=ajy&spotlightTagId=BestsellerId_ajy&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=6c0ba0ad-78b0-4453-a320-6d699e38ae97.SMWG664GRZ3VKANY.SEARCH&ppt=sp&ppn=sp&ssid=8y6qxjxd8w0000001712992178866&qH=b568c5967473948e",
    description: `Compatible with Android Only
		Large AMOLED Display with 2.5D Curved Glass & Aluminum Body
		Up to 13-day Battery Backup with Fast Charging (65% in 30min)
		Comprehensive Health & Fitness Tracking powered by Samsung Health App
		Advanced Sleep Coaching, SpO2, HR & Stress Monitoring
		5ATM & IP68 Dust & Water Resistant`,
  },
  {
    title: "Samsung Galaxy Fit3",
    id: 7,
    img: w4,
    price: "4,999",
    rating: 3.5,
    amazon:
      "https://www.amazon.in/Samsung-Aluminium-Comprehensive-Tracking-Charging/dp/B0CVN3NK42/ref=sr_1_5?crid=CPVMV364O4SQ&dib=eyJ2IjoiMSJ9.Q7TNlquARCSMWMy6EAFOvbfnbxDbHaD1R6XbC2S_lGTg0_GHWmV2wy0n7qJbtCLXwCfA-QbDD9bEw1uzcC6ZI-74A04erCC6TirWNJRWfvUxJdrDLc60rE6-bXTH2hAkC60QdAa6G5WcutAlmqWrBKomVKEIBVJYmqEJFrfubgX9ePxQmaPmlTLAlEhWMqsLUqbfZOWY08HlPG3e6wHMU4v6et4hg6fS20tlwT_9R0Y.rebGzq7uKn3xK2PzymFks6HO6lrktT834IzGUCNvQfQ&dib_tag=se&keywords=samsung%2Bwatch&qid=1712992057&sprefix=samsung%2Bwatc%2Caps%2C301&sr=8-5&th=1",
    flipkart:
      "https://www.flipkart.com/samsung-galaxy-fit3-amoled-display-aluminium-body-upto-13day-battery-5atm-ip68/p/itm5ff5ff1899ffb?pid=SMWGY6YRYKY3GXQU&lid=LSTSMWGY6YRYKY3GXQURNE9WV&marketplace=FLIPKART&q=samsung+watches&store=ajy&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=6c0ba0ad-78b0-4453-a320-6d699e38ae97.SMWGY6YRYKY3GXQU.SEARCH&ppt=sp&ppn=sp&qH=b568c5967473948e",
    description: `Compatible with Android Only
		Large AMOLED Display with 2.5D Curved Glass & Aluminum Body
		Up to 13-day Battery Backup with Fast Charging (65% in 30min)
		Comprehensive Health & Fitness Tracking powered by Samsung Health App
		Advanced Sleep Coaching, SpO2, HR & Stress Monitoring
		5ATM & IP68 Dust & Water Resistant`,
  },
  {
    img: g1,
    id: 17,
    title: "Gigabyte GeForce RTX 4060",
    price: "33,499",
    rating: 3.5,
    description: `Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace architechture, and full ray tracing
		4th Generation Tensor Cores: Up to 4x performance with DLSS 3
		3rd Generation RT Cores: Up to 2x ray tracing performance
		Powered by GeForce RTX 4060
		Integrated with 8GB GDDR6 128-bit memory interface`,
    amazon:
      "https://www.amazon.in/Gigabyte-Graphics-WINDFORCE-GV-N4060GAMING-OC-8GD/dp/B0C8KQRH32/ref=sr_1_3?crid=2X94I61NHSCIO&dib=eyJ2IjoiMSJ9.l8dcHOIJA_H5yld6_UJ0Mk3qdIoPOIHGjOJRrrEyHG2vNNLF7OfEWlb0VQHA1FYUq4jCS6IoZNdhTADunRs74-3I6WEZOrFL2BgfXBoFwFX62vQzsS7vkcNkiHqoJ_lHMUqK6gCQs0pji8JqPr6u0tRs6cxOy0N-QT0kNgQV69k09eeVhdNXbMCYx_zBVhJmIipsDlhhbfsIBr8RZ4ciktiyk5W-zc-ldruvYORPkck.a7cmhA1Q5l-VKCGaGNpdq7F5dHDYMN3XzsKG26ct3YU&dib_tag=se&keywords=graphics+card&qid=1712996364&sprefix=graphics%2Caps%2C250&sr=8-3",
    flipkart:
      "https://www.flipkart.com/asus-nvidia-dual-geforce-rtx-4060-oc-8gb-gddr6-gaming-graphics-card-8-gb/p/itmc7593e4de9d87?pid=GRCGSYFGMA3NY4SG&lid=LSTGRCGSYFGMA3NY4SGRPAC91&marketplace=FLIPKART&q=rtx+4060+graphics+card&store=6bo%2Fg0i&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&fm=search-autosuggest&iid=8c6fb45f-67ab-43e6-93f8-3149973c8400.GRCGSYFGMA3NY4SG.SEARCH&ppt=sp&ppn=sp&ssid=zpb30vhopc0000001712996600940&qH=b87c13bc29ec90e1",
  },
  {
    img: g2,
    id: 18,
    title: "GIGABYTE NVIDIA GeForce RTX 3060",
    price: "26,299",
    rating: 3.5,
    description: `Graphics Processing : GeForce RTX 3060
		Core Clock : 1792 MHz (Reference Card: 1777 MHz); CUDA Cores : 3584
		Memory Clock : 15000 MHz; Memory Size : 12 GB
		Memory Type : GDDR6; Memory Bus : 192 bit; Memory Bandwidth (GB/sec) : 360 GB/s
		Card Bus : PCI-E 4.0 x 16; Digital max resolution : 7680x4320
		Multi-view : 4; PCB Form : ATX
		DirectX : 12 Ultimate; OpenGL : 4.6`,
    amazon:
      "https://www.amazon.in/GIGABYTE-WINDFORCE-pci_e_x16-Graphics-GV-N3060WF2OC-12GD/dp/B0BNP2CMXM/ref=sr_1_4?crid=2X94I61NHSCIO&dib=eyJ2IjoiMSJ9.l8dcHOIJA_H5yld6_UJ0Mk3qdIoPOIHGjOJRrrEyHG2vNNLF7OfEWlb0VQHA1FYUq4jCS6IoZNdhTADunRs74-3I6WEZOrFL2BgfXBoFwFX62vQzsS7vkcNkiHqoJ_lHMUqK6gCQs0pji8JqPr6u0tRs6cxOy0N-QT0kNgQV69k09eeVhdNXbMCYx_zBVhJmIipsDlhhbfsIBr8RZ4ciktiyk5W-zc-ldruvYORPkck.a7cmhA1Q5l-VKCGaGNpdq7F5dHDYMN3XzsKG26ct3YU&dib_tag=se&keywords=graphics+card&qid=1712996364&sprefix=graphics%2Caps%2C250&sr=8-4",
    flipkart:
      "https://www.flipkart.com/zotac-nvidia-rtx-3060-twin-edge-12-gb-gddr6-graphics-card/p/itmc48ee108e6aa6?pid=GRCGBSMQHA6E2AB3&lid=LSTGRCGBSMQHA6E2AB3Z6QHRC&marketplace=FLIPKART&q=rtx+3060+graphics+card&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=7f496852-71c0-4d75-9a0f-00dc08400651.GRCGBSMQHA6E2AB3.SEARCH&ppt=sp&ppn=sp&ssid=jkjgquzrkg0000001712996738112&qH=40de720dd43be960",
  },
  {
    img: g3,
    id: 19,
    title: "ASRock RX570 PGE Radeon RX 570",
    price: "12,999",
    rating: 3.5,
    description: `ASRock Striped Axial Fan
		Support 8K Resolution
		Graphic Outputs: 3 DisplayPort, 1 HDMI
		8 GB GDDR5, 1270 MHz / 7000 MHz`,
    amazon:
      "https://www.amazon.in/ASRock-RX570-PGE-Graphics-pci_e_x16/dp/B0CKLC312K/ref=sr_1_6?crid=2X94I61NHSCIO&dib=eyJ2IjoiMSJ9.l8dcHOIJA_H5yld6_UJ0Mk3qdIoPOIHGjOJRrrEyHG2vNNLF7OfEWlb0VQHA1FYUq4jCS6IoZNdhTADunRs74-3I6WEZOrFL2BgfXBoFwFX62vQzsS7vkcNkiHqoJ_lHMUqK6gCQs0pji8JqPr6u0tRs6cxOy0N-QT0kNgQV69k09eeVhdNXbMCYx_zBVhJmIipsDlhhbfsIBr8RZ4ciktiyk5W-zc-ldruvYORPkck.a7cmhA1Q5l-VKCGaGNpdq7F5dHDYMN3XzsKG26ct3YU&dib_tag=se&keywords=graphics+card&qid=1712996364&sprefix=graphics%2Caps%2C250&sr=8-6",
    flipkart:
      "https://www.flipkart.com/asrock-amd-radeon-rx6600-cld-8-gb-gddr6-graphics-card/p/itmd6a0330a66127?pid=GRCGDUZM3URWGCGR&lid=LSTGRCGDUZM3URWGCGRJNUR7R&marketplace=FLIPKART&q=asrock+graphic+card+rx570&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=132090be-6f9d-4da9-8a02-76694680e819.GRCGDUZM3URWGCGR.SEARCH&ppt=sp&ppn=sp&ssid=fcpdvf085s0000001712996926008&qH=ae54440b667c0ac0",
  },
  {
    img: g4,
    id: 20,
    title: "Gigabyte GeForce RTX 4060",
    price: "31,940",
    rating: 3.5,
    description: `Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace architechture, and full ray tracing
		4th Generation Tensor Cores: Up to 4x performance with DLSS 3
		3rd Generation RT Cores: Up to 2x ray tracing performance
		Powered by GeForce RTX 4060
		Integrated with 8GB GDDR6 128-bit memory interface`,
    amazon:
      "https://www.amazon.in/Gigabyte-Graphics-WINDFORCE-GV-N4060GAMING-OC-8GD/dp/B0C8KQRH32/ref=sr_1_3?crid=2X94I61NHSCIO&dib=eyJ2IjoiMSJ9.l8dcHOIJA_H5yld6_UJ0Mk3qdIoPOIHGjOJRrrEyHG2vNNLF7OfEWlb0VQHA1FYUq4jCS6IoZNdhTADunRs74-3I6WEZOrFL2BgfXBoFwFX62vQzsS7vkcNkiHqoJ_lHMUqK6gCQs0pji8JqPr6u0tRs6cxOy0N-QT0kNgQV69k09eeVhdNXbMCYx_zBVhJmIipsDlhhbfsIBr8RZ4ciktiyk5W-zc-ldruvYORPkck.a7cmhA1Q5l-VKCGaGNpdq7F5dHDYMN3XzsKG26ct3YU&dib_tag=se&keywords=graphics+card&qid=1712996364&sprefix=graphics%2Caps%2C250&sr=8-3",
    flipkart:
      "https://www.flipkart.com/asus-nvidia-dual-geforce-rtx-4060-oc-8gb-gddr6-gaming-graphics-card-8-gb/p/itmc7593e4de9d87?pid=GRCGSYFGMA3NY4SG&lid=LSTGRCGSYFGMA3NY4SGRPAC91&marketplace=FLIPKART&q=rtx+4060+graphics+card&store=6bo%2Fg0i&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&fm=search-autosuggest&iid=8c6fb45f-67ab-43e6-93f8-3149973c8400.GRCGSYFGMA3NY4SG.SEARCH&ppt=sp&ppn=sp&ssid=zpb30vhopc0000001712996600940&qH=b87c13bc29ec90e1",
  },
  {
    title: "Intel Core I5 12400F 12 Gen",
    id: 21,
    img: k1,
    price: "12,999",
    rating: 3.5,
    description: `Intel Core i5 12400F Comes with 3 Years of warranty directly from Intel Brand.
		Both DDR5 RAM upto 4800 Mhz and DDR4 RAM upto 3200 Mhz are supported according to specific motherboard compatibility
		ðŸ’¨ Intel Core i5 12400F uses base power of 65W and maximum power consumption of 180W.`,
    amazon:
      "https://www.amazon.in/Intel-Generation-Desktop-Processor-Warranty/dp/B09MDFH5HY/ref=sr_1_4?crid=2YB8Z2HF865YG&dib=eyJ2IjoiMSJ9.WvzwQLZhXzFw9yLpDuMH9YfQbiKRfY5JUSyHOjpMnrzx1bQGPk2B1sqVbZtKBvbddT5VVqjZ3yMGvmqtfa5HCPPnwRsia8zooQF2NMvcl5Cgkq2SpVrcZ3TNYh9qPCCRYPAQUTkcplSMXBnUA0AyimJpzQvleTSQAuYy74XBFSjgG8DkV4uQeSftV8EkfOONwYomkiMheGVJjM1igraWeW6EcyIO9aI9wrX4bwVtDGk.-JBfQqoCyXo64NLJ2lbGkoBiiuBXt-0bUoWvRtWkh4M&dib_tag=se&keywords=processors&qid=1712998409&sprefix=processors%2Caps%2C255&sr=8-4&th=1",
    flipkar:
      "https://www.flipkart.com/intel-i5-12500-4-6-ghz-upto-lga1700-socket-6-cores-12-threads-desktop-processor/p/itm54cf56079dae6?pid=PSRGCVGB7YHCZUPG&lid=LSTPSRGCVGB7YHCZUPGU500AQ&marketplace=FLIPKART&q=i5processor&store=6bo&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=35511b20-4dac-419a-ad18-4b4ab0e1743f.PSRGCVGB7YHCZUPG.SEARCH&ppt=sp&ppn=sp&ssid=ftyfzwe1og0000001712998835323&qH=ce62f122a6e50e1c",
  },
  {
    title: "Intel Core i7-13700K Desktop Processor ",
    id: 22,
    img: k2,
    price: "36,999",
    rating: 3.5,
    description: `Intel Core i7-13700K Processor (30M Cache- up to 5.40 GHz)`,
    amazon:
      "https://www.amazon.in/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5/ref=sr_1_1?crid=2YB8Z2HF865YG&dib=eyJ2IjoiMSJ9.WvzwQLZhXzFw9yLpDuMH9YfQbiKRfY5JUSyHOjpMnrzx1bQGPk2B1sqVbZtKBvbddT5VVqjZ3yMGvmqtfa5HCPPnwRsia8zooQF2NMvcl5Cgkq2SpVrcZ3TNYh9qPCCRYPAQUTkcplSMXBnUA0AyimJpzQvleTSQAuYy74XBFSjgG8DkV4uQeSftV8EkfOONwYomkiMheGVJjM1igraWeW6EcyIO9aI9wrX4bwVtDGk.-JBfQqoCyXo64NLJ2lbGkoBiiuBXt-0bUoWvRtWkh4M&dib_tag=se&keywords=processors&qid=1712998409&sprefix=processors%2Caps%2C255&sr=8-1&th=1",
    flipkar:
      "https://www.flipkart.com/intel-i7-12700k-5-ghz-upto-lga1700-socket-12-cores-20-threads-desktop-processor/p/itma33b829624b71?pid=PSRG96VG62CYXHH4&lid=LSTPSRG96VG62CYXHH4QWPJ9U&marketplace=FLIPKART&q=i7+process&store=4rr%2Fkm5%2Fbmp&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=c788a7f0-08f7-4bc8-b220-17c6933e47f8.PSRG96VG62CYXHH4.SEARCH&ppt=sp&ppn=sp&ssid=lx8ivqb9g00000001712998780482&qH=50460ae8fd50a248",
  },
  {
    title: "Intel® Core™ i9-14900K ",
    id: 23,
    img: k3,

    price: "41,599",
    rating: 3.5,
    description: `Game without compromise. Play harder and work smarter with Intel Core 14th Gen processors
		24 cores (8 P-cores + 16 E-cores) and 32 threads. Integrated Intel UHD Graphics 770 included
		Leading max clock speed of up to 6.0 GHz gives you smoother game play, higher frame rates, and rapid responsiveness
		Compatible with Intel 600-series (with potential BIOS update) or 700-series chipset-based motherboards
		DDR4 and DDR5 platform support cuts your load times and gives you the space to run the most demanding games`,
    amazon:
      "https://www.amazon.in/i9-14900K-Desktop-Processor-Integrated-Graphics/dp/B0CGJDKLB8/ref=sr_1_3?crid=2YB8Z2HF865YG&dib=eyJ2IjoiMSJ9.WvzwQLZhXzFw9yLpDuMH9YfQbiKRfY5JUSyHOjpMnrzx1bQGPk2B1sqVbZtKBvbddT5VVqjZ3yMGvmqtfa5HCPPnwRsia8zooQF2NMvcl5Cgkq2SpVrcZ3TNYh9qPCCRYPAQUTkcplSMXBnUA0AyimJpzQvleTSQAuYy74XBFSjgG8DkV4uQeSftV8EkfOONwYomkiMheGVJjM1igraWeW6EcyIO9aI9wrX4bwVtDGk.-JBfQqoCyXo64NLJ2lbGkoBiiuBXt-0bUoWvRtWkh4M&dib_tag=se&keywords=processors&qid=1712998409&sprefix=processors%2Caps%2C255&sr=8-3&th=1",
    flipkar:
      "https://www.flipkart.com/intel-i9-12900kf-5-2-ghz-upto-lga1700-socket-16-cores-24-threads-desktop-processor/p/itm35b967f4d39fa?pid=PSRG96VGBSXXYZFW&lid=LSTPSRG96VGBSXXYZFWCTINAK&marketplace=FLIPKART&q=i9&store=6bo%2Fg0i%2F17w&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=7f4d39e2-c89e-4d91-84d4-5d5f970a054b.PSRG96VGBSXXYZFW.SEARCH&ppt=sp&ppn=sp&ssid=3vfdpyh2uo0000001712998678968&qH=115f46b6059d202a",
  },
  {
    title: "Intel® Core i3-12100 Processor",
    id: 24,
    img: k4,
    price: "9,799",
    rating: 3.5,
    description: `Intel Core i3-12100 Processor 12M Cache, up to 4.30 GHz
		It ensures a hassle-free usage
		It is durable and long lasting.`,
    amazon:
      "https://www.amazon.in/Intel%C2%AE-CoreTM-i3-12100-Processor-Cache/dp/B09MDDX29R/ref=sr_1_2?crid=2YB8Z2HF865YG&dib=eyJ2IjoiMSJ9.WvzwQLZhXzFw9yLpDuMH9YfQbiKRfY5JUSyHOjpMnrzx1bQGPk2B1sqVbZtKBvbddT5VVqjZ3yMGvmqtfa5HCPPnwRsia8zooQF2NMvcl5Cgkq2SpVrcZ3TNYh9qPCCRYPAQUTkcplSMXBnUA0AyimJpzQvleTSQAuYy74XBFSjgG8DkV4uQeSftV8EkfOONwYomkiMheGVJjM1igraWeW6EcyIO9aI9wrX4bwVtDGk.-JBfQqoCyXo64NLJ2lbGkoBiiuBXt-0bUoWvRtWkh4M&dib_tag=se&keywords=processors&qid=1712998409&sprefix=processors%2Caps%2C255&sr=8-2",
    flipkar:
      "https://www.flipkart.com/processsor-ultra-3-4-ghz-lga-1155-core-i3-3240-3rd-generation-h61-motherboard-refurbished-processor/p/itm10137a7983b59?pid=PSRG7FWZPHBPQEZQ&lid=LSTPSRG7FWZPHBPQEZQSSQUQR&marketplace=FLIPKART&q=i3+processsor&store=6bo%2Fg0i%2F17w&srno=s_1_18&otracker=search&otracker1=search&fm=Search&iid=c1f10b8f-10d6-43b3-b1e6-5cb948952f32.PSRG7FWZPHBPQEZQ.SEARCH&ppt=sp&ppn=sp&qH=5e496b51dceb9ac6",
  },
  {
    img: x1,
    title: "Apple iPad (10th Generation)",
    id: 30,
    amazon:
      "https://www.amazon.in/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJMGXLYZ/ref=sr_1_3?crid=1PUNBSWXI23PT&dib=eyJ2IjoiMSJ9.Wl6yiURAgXmt4JZCZkt9-WR32oatKq7GPklYTv9n3X0ZXGRqdS7dzoTV73jjyy3bKA1ZA7J9ddQb8tdtnYC1jdd2u00ZPjNFjZvvUjV7MjL97K_JoiUJ4ULkRawu0Uz23WbR4sVJ8BoRLzn_ypsi-oDjt8vIe8hf-U4GXfl2eXD8oD3LGIAmoZDKd8WNp7XQrkMFG3Cubm0eo4I6jM9kXGCqXFij7-g40dzmNWP1N8c.Yxhcs_W7CKEV6JwKgs-ke6C3hH8-g8VzKR8O2DPwR4Q&dib_tag=se&keywords=ipad&qid=1712998884&sprefix=ipa%2Caps%2C239&sr=8-3",
    flipkart:
      "https://www.flipkart.com/apple-ipad-10th-gen-64-gb-rom-10-9-inch-wi-fi-only-blue/p/itm5d7707aeb1a78?pid=TABGJ6XUUNYTFDYH&lid=LSTTABGJ6XUUNYTFDYHVYBX7S&marketplace=FLIPKART&q=ipad+10+gen&store=tyy%2Fhry&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=2cbf8fd9-b56e-4ef4-b24f-360af04f6394.TABGJ6XUUNYTFDYH.SEARCH&ppt=hp&ppn=homepage&ssid=pgitgxid4w0000001712999159460&qH=8e4882d98822c710",
    price: "36,900",
    rating: 3.5,
    description: `WHY IPAD — Colourfully reimagined and more versatile than ever, iPad is great for the things you do every day. With an all-screen design, 27.69 cm (10.9″) Liquid Retina display, powerful A14 Bionic chip, superfast Wi-Fi and four gorgeous colours, iPad delivers a powerful way to create, stay connected and get things done.
		iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. iPad comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.`,
  },
  {
    img: x2,
    title: "Apple iPad Pro 12.9",
    id: 31,
    amazon:
      "https://www.amazon.in/Apple-12-9-inch-iPad-Pro-Wi-Fi-Cellular/dp/B0BJMD4X36/ref=sr_1_2_sspa?crid=1PUNBSWXI23PT&dib=eyJ2IjoiMSJ9.Wl6yiURAgXmt4JZCZkt9-WR32oatKq7GPklYTv9n3X0ZXGRqdS7dzoTV73jjyy3bKA1ZA7J9ddQb8tdtnYC1jdd2u00ZPjNFjZvvUjV7MjL97K_JoiUJ4ULkRawu0Uz23WbR4sVJ8BoRLzn_ypsi-oDjt8vIe8hf-U4GXfl2eXD8oD3LGIAmoZDKd8WNp7XQrkMFG3Cubm0eo4I6jM9kXGCqXFij7-g40dzmNWP1N8c.Yxhcs_W7CKEV6JwKgs-ke6C3hH8-g8VzKR8O2DPwR4Q&dib_tag=se&keywords=ipad&qid=1712998884&sprefix=ipa%2Caps%2C239&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    flipkart:
      "https://www.flipkart.com/apple-ipad-pro-4th-gen-128-gb-rom-11-0-inch-wi-fi-only-space-grey/p/itm7682cf40aa16e?pid=TABGJ6XUF5KQK7UG&lid=LSTTABGJ6XUF5KQK7UG22XR8S&marketplace=FLIPKART&q=ipad+pro&store=tyy&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=9c3c0e2b-c6f8-4221-a8ce-b9f6855a34ba.TABGJ6XUF5KQK7UG.SEARCH&ppt=pp&ppn=pp&ssid=q24zd4g9yo0000001712999270165&qH=03e7257babd850e9",
    price: "1,57,900",
    rating: 3.5,
    description: `WHY IPAD PRO — iPad Pro is the ultimate iPad experience, with the astonishing performance of the M2 chip, superfast Wi-Fi and 5G, and next-generation Apple Pencil experience. Plus powerful productivity features in iPadOS.
		iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.`,
  },
  {
    img: x3,  
    title: "Apple iPad Air (5th Generation)",
    id: 32,
    amazon:
      "https://www.amazon.in/Apple-iPad-Air-10-9-inch-27-69-Wi-Fi/dp/B09V471196/ref=sr_1_5?crid=1PUNBSWXI23PT&dib=eyJ2IjoiMSJ9.Wl6yiURAgXmt4JZCZkt9-WR32oatKq7GPklYTv9n3X0ZXGRqdS7dzoTV73jjyy3bKA1ZA7J9ddQb8tdtnYC1jdd2u00ZPjNFjZvvUjV7MjL97K_JoiUJ4ULkRawu0Uz23WbR4sVJ8BoRLzn_ypsi-oDjt8vIe8hf-U4GXfl2eXD8oD3LGIAmoZDKd8WNp7XQrkMFG3Cubm0eo4I6jM9kXGCqXFij7-g40dzmNWP1N8c.Yxhcs_W7CKEV6JwKgs-ke6C3hH8-g8VzKR8O2DPwR4Q&dib_tag=se&keywords=ipad&qid=1712998884&sprefix=ipa%2Caps%2C239&sr=8-5",
    flipkart:
      "https://www.flipkart.com/apple-ipad-air-5th-gen-256-gb-rom-10-9-inch-wi-fi-only-purple/p/itm57e12e91a14fc?pid=TABGCA2KKVAJGQSE&lid=LSTTABGCA2KKVAJGQSE3AIURT&marketplace=FLIPKART&q=pple+iPad+Air+%285th+Generation%29%3A&store=tyy%2Fhry&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=083fbceb-122c-46b4-b0e3-7a9bcb4b2027.TABGCA2KKVAJGQSE.SEARCH&ppt=sp&ppn=sp&ssid=ep4ys2yudc0000001712999345195&qH=39d37cea8522d0c5",
    price: "54,990",
    rating: 3.5,
    description: `WHY IPAD AIR — Serious performance in a thin and light design. With an immersive 27.69 cm (10.9″) Liquid Retina display and the amazing performance of the M1 chip, iPad Air is a creative and gaming powerhouse. Featuring Touch ID, advanced cameras, superfast Wi-Fi 6 and a USB-C connector.
		iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. iPad Air comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.`,
  },
  {
    img: x4,
    title: "Apple iPad Pro 11",
    id: 33,
    amazon:
      "https://www.amazon.in/Apple-11-inch-iPad-Pro-Wi-Fi-256GB/dp/B0BJMN52CS/ref=sr_1_8?crid=1PUNBSWXI23PT&dib=eyJ2IjoiMSJ9.Wl6yiURAgXmt4JZCZkt9-WR32oatKq7GPklYTv9n3X0ZXGRqdS7dzoTV73jjyy3bKA1ZA7J9ddQb8tdtnYC1jdd2u00ZPjNFjZvvUjV7MjL97K_JoiUJ4ULkRawu0Uz23WbR4sVJ8BoRLzn_ypsi-oDjt8vIe8hf-U4GXfl2eXD8oD3LGIAmoZDKd8WNp7XQrkMFG3Cubm0eo4I6jM9kXGCqXFij7-g40dzmNWP1N8c.Yxhcs_W7CKEV6JwKgs-ke6C3hH8-g8VzKR8O2DPwR4Q&dib_tag=se&keywords=ipad&qid=1712998884&sprefix=ipa%2Caps%2C239&sr=8-8",
    flipkart:
      "https://www.flipkart.com/apple-ipad-pro-4th-gen-128-gb-rom-11-0-inch-wi-fi-only-space-grey/p/itm7682cf40aa16e?pid=TABGJ6XUF5KQK7UG&lid=LSTTABGJ6XUF5KQK7UG22XR8S&marketplace=FLIPKART&q=Apple+iPad+Pro+11%E2%80%B3+%284th+Generation%29%3A+&store=tyy%2Fhry&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=4d111556-0c87-4a26-a607-603e321cfb70.TABGJ6XUF5KQK7UG.SEARCH&ppt=pp&ppn=pp&ssid=cdby4f9hq80000001712999417395&qH=121f2d9ed8b6a021",
    price: "89,900",
    rating: 3.5,
    description: `WHY IPAD PRO — iPad Pro is the ultimate iPad experience, with the astonishing performance of the M2 chip, superfast wireless connectivity and next-generation Apple Pencil experience. Plus powerful productivity features in iPadOS.
		iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.`,
  },
];

const SingleProduct = () => {
  let { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <>
      <div className="bg-[#111827] py-16 text-white">
        {product ? (
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center ">
            <div>
              <img
                src={product.img}
                className="h-72 md:h-96 rounded-xl"
                alt={product.title}
              />
            </div>
            <div>
              <h2 className="font-bold text-3xl">{product.title}</h2>
              <p className="text-lg mt-3">Price: {product.price}</p>
              <p className="text-lg mt-3">Rating: {product.rating}</p>
              <p className="w-[500px]  mt-3">
                Description: {product.description}
              </p>
              <div className="flex flex-col gap-2 mt-5">
                <button className="text-[#111827] bg-white py-2 px-6 rounded-md">
                  <a href={product.amazon} target="_blank">
                    Get it on Amazon
                  </a>
                </button>
                <button className="text-[#111827] bg-white py-2 rounded-md">
                  <a href={product.flipkart} target="_blank">
                    Get it on Flipkart
                  </a>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center md:text-3xl text-xl ">Product not found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
