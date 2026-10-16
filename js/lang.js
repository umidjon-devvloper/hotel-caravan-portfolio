(function() {
  /* ---------------------------------------------------------------------
     Caravan Plaza — language switcher.

     English is the SOURCE language: every page is written in English in the
     HTML, so the site is English by default, with no JavaScript needed and
     no flash of another language. This file only translates that English
     into Uzbek or Russian when the visitor picks UZ or RU.

     To add or fix a phrase: use the exact English string as the key.
     --------------------------------------------------------------------- */

  var DEFAULT_LANG = 'en';
  var LANGS = ['en', 'ru', 'uz'];

  var T = {
    "About": { uz: "Haqida", ru: "О нас" },
    "Services": { uz: "Xizmatlar", ru: "Услуги" },
    "Rooms": { uz: "Xonalar", ru: "Номера" },
    "Gallery": { uz: "Galereya", ru: "Галерея" },
    "Reviews": { uz: "Sharhlar", ru: "Отзывы" },
    "Contact": { uz: "Aloqa", ru: "Контакты" },
    "Book Now": { uz: "Band qilish", ru: "Забронировать" },
    "Contact Us": { uz: "Bog'lanish", ru: "Связаться" },
    "Learn More": { uz: "Batafsil", ru: "Подробнее" },
    "Bukhara, Uzbekistan": { uz: "Buxoro, O'zbekiston", ru: "Бухара, Узбекистан" },
    "5-star hotel": { uz: "5 yulduzli mehmonxona", ru: "5-звёздочный отель" },
    "A blend of modern comfort and traditional hospitality in Bukhara, the ancient city of the Great Silk Road": { uz: "Buyuk Ipak Yo'lining qadimiy shahri Buxoroda joylashgan zamonaviy qulayliklar va an'anaviy mehmondo'stlik uyg'unligi", ru: "Сочетание современного комфорта и традиционного гостеприимства в древнем городе Бухара на Великом Шёлковом пути" },
    "Google rating": { uz: "Google reyting", ru: "Рейтинг Google" },
    "Photos": { uz: "Suratlar", ru: "Фото" },
    "Service": { uz: "Xizmat", ru: "Сервис" },
    "About the hotel": { uz: "Mehmonxona haqida", ru: "Об отеле" },
    "Comfort and tradition in the heart of Bukhara": { uz: "Buxoro qalbidagi qulaylik va an'ana", ru: "Комфорт и традиции в сердце Бухары" },
    "Caravan Plaza is located in the historic centre of Bukhara, on Khodja Nurobobod Street. The hotel combines modern comforts with traditional Uzbek hospitality.": { uz: "Caravan Plaza Buxoro shahrining tarixiy markazida, Xo'ja Nurobobod ko'chasida joylashgan. Mehmonxona zamonaviy qulayliklar bilan an'anaviy o'zbek mehmondo'stligini uyg'unlashtirgan.", ru: "Caravan Plaza расположен в историческом центре Бухары, на улице Ходжа Нуробобод. Отель сочетает современный комфорт с традиционным узбекским гостеприимством." },
    "Rooms have air conditioning, central heating, a private bathroom, a king-size bed, a safe and a writing desk. A telephone, television, free Wi-Fi and other modern conveniences are provided for guests.": { uz: "Xonalarda konditsioner, markaziy isitish tizimi, vannaxona, Kingsize karavot, seyflar va yozuv stoli mavjud. Telefon, televizor, bepul Wi-Fi va boshqa zamonaviy qulayliklar mehmonlarga taqdim etiladi.", ru: "В номерах есть кондиционер, центральное отопление, ванная комната, кровать King-size, сейф и письменный стол. Гостям предоставляются телефон, телевизор, бесплатный Wi-Fi и другие современные удобства." },
    "Bathrooms are equipped with a shower, bath, hairdryer, bathrobe and toiletries. Family rooms and non-smoking rooms are available.": { uz: "Vannaxonalarda dush, vanna, fen, xalat va gigiena vositalari bilan jihozlangan. Oilaviy xonalar va chekish taqiqlangan xonalar mavjud.", ru: "Ванные комнаты оснащены душем, ванной, феном, халатом и туалетными принадлежностями. Доступны семейные номера и номера для некурящих." },
    "Amenities and services": { uz: "Qulayliklar va xizmatlar", ru: "Удобства и услуги" },
    "Free breakfast": { uz: "Bepul nonushta", ru: "Бесплатный завтрак" },
    "Breakfast is served every morning with traditional and modern dishes": { uz: "Har kuni ertalabki an'anaviy va zamonaviy taomlar bilan nonushta taqdim etiladi", ru: "Каждое утро подаётся завтрак с традиционными и современными блюдами" },
    "Free Wi-Fi": { uz: "Bepul Wi-Fi", ru: "Бесплатный Wi-Fi" },
    "High-speed internet is available in all rooms and common areas": { uz: "Barcha xonalarda va umumiy joylarda tezkor internet aloqasi mavjud", ru: "Высокоскоростной интернет доступен во всех номерах и общих зонах" },
    "Air conditioning": { uz: "Konditsioner", ru: "Кондиционер" },
    "Air conditioning and central heating are installed in all rooms": { uz: "Barcha xonalarda havo konditsioneri va markaziy isitish tizimi o'rnatilgan", ru: "Во всех номерах установлены кондиционер и центральное отопление" },
    "Safety deposit box": { uz: "Xavfsizlik seyfi", ru: "Сейф" },
    "Every room has a safety deposit box for your personal belongings": { uz: "Har bir xonada shaxsiy buyumlaringiz uchun xavfsizlik seyfi mavjud", ru: "В каждом номере есть сейф для ваших личных вещей" },
    "King-size bed": { uz: "Kingsize karavot", ru: "Кровать King-size" },
    "Comfortable king-size beds and extra beds on request": { uz: "Qulay Kingsize karavotlar va so'rov bo'yicha qo'shimcha o'rinlar", ru: "Удобные кровати King-size и дополнительные места по запросу" },
    "Bathroom": { uz: "Vannaxona", ru: "Ванная комната" },
    "Equipped with a shower, bath, hairdryer, bathrobe and toiletries": { uz: "Dush, vanna, fen, xalat va gigiena vositalari bilan jihozlangan", ru: "Оснащена душем, ванной, феном, халатом и туалетными принадлежностями" },
    "Our rooms": { uz: "Bizning xonalar", ru: "Наши номера" },
    "Luxe rooms": { uz: "Luxe xonalar", ru: "Номера Люкс" },
    "Luxuriously furnished rooms — comfortable rest and a memorable stay": { uz: "Hashamatli jihozlangan xonalar — qulay dam olish va unutilmas turar joy tajribasi", ru: "Роскошно обставленные номера — комфортный отдых и незабываемые впечатления" },
    "Luxuriously furnished rooms — comfortable rest and an unforgettable experience": { uz: "Hashamatli jihozlangan xonalar — qulay dam olish va unutilmas tajriba", ru: "Роскошно обставленные номера — комфортный отдых и незабываемые впечатления" },
    "A luxurious room with two separate beds. Furnished with modern furniture, a television and a work desk.": { uz: "Ikkita alohida karavotli hashamatli xona. Zamonaviy mebel, televizor va ish stoli bilan jihozlangan.", ru: "Роскошный номер с двумя отдельными кроватями. Современная мебель, телевизор и рабочий стол." },
    "A luxurious room with two separate beds. Furnished with modern furniture, a television and a work desk. An ideal place for rest and for work.": { uz: "Ikkita alohida karavotli hashamatli xona. Zamonaviy mebel, televizor va ish stoli bilan jihozlangan. Dam olish va ish uchun ideal joy.", ru: "Роскошный номер с двумя отдельными кроватями. Современная мебель, телевизор и рабочий стол. Идеальное место для отдыха и работы." },
    "A premium-class twin room. Provided with air conditioning, a LED TV and a spacious living area.": { uz: "Premium darajadagi twin xona. Konditsioner, LED TV va keng yashash maydoni bilan ta'minlangan.", ru: "Номер твин премиум-класса. Кондиционер, LED-телевизор и просторная жилая зона." },
    "A premium-class twin room. Provided with air conditioning, a LED TV and a spacious living area. The finest quality and comfort.": { uz: "Premium darajadagi twin xona. Konditsioner, LED TV va keng yashash maydoni bilan ta'minlangan. Eng yaxshi sifat va qulaylik.", ru: "Номер твин премиум-класса. Кондиционер, LED-телевизор и просторная жилая зона. Лучшее качество и комфорт." },
    "A luxurious room with a wide king-size bed. Equipped with a balcony, a lounge area and natural light.": { uz: "Keng Kingsize karavotli hashamatli xona. Balkon, oromgoh va tabiiy yorug'lik bilan jihozlangan.", ru: "Роскошный номер с широкой кроватью King-size. Балкон, зона отдыха и естественное освещение." },
    "A luxurious room with a wide king-size bed. Equipped with a balcony, a lounge area and natural light. Ideal for a romantic trip.": { uz: "Keng Kingsize karavotli hashamatli xona. Balkon, oromgoh va tabiiy yorug'lik bilan jihozlangan. Romantik sayohat uchun ideal.", ru: "Роскошный номер с широкой кроватью King-size. Балкон, зона отдыха и естественное освещение. Идеально для романтической поездки." },
    "A twin room with a balcony, and the chance to take in the beautiful views of Bukhara.": { uz: "Balkonli ikkita karavotli xona. Buxoroning go'zal manzarasini tomosha qilish imkoniyati.", ru: "Номер с двумя кроватями и балконом. Возможность любоваться прекрасными видами Бухары." },
    "A twin room with a balcony, and the chance to take in the beautiful views of Bukhara. A wonderful spot for morning coffee.": { uz: "Balkonli ikkita karavotli xona. Buxoroning go'zal manzarasini tomosha qilish imkoniyati. Ertalabki qahva uchun ajoyib joy.", ru: "Номер с двумя кроватями и балконом. Возможность любоваться прекрасными видами Бухары. Прекрасное место для утреннего кофе." },
    "Luxe Twin Balcony": { uz: "Luxe Twin Balkon", ru: "Люкс Твин Балкон" },
    "Luxe Balcony": { uz: "Luxe Balkon", ru: "Люкс Балкон" },
    "Balcony": { uz: "Balkon", ru: "Балкон" },
    "King-size": { uz: "Kingsize", ru: "King-size" },
    "View": { uz: "Manzara", ru: "Вид" },
    "Beautiful view": { uz: "Go'zal manzara", ru: "Прекрасный вид" },
    "Safe": { uz: "Seyf", ru: "Сейф" },
    "Breakfast": { uz: "Nonushta", ru: "Завтрак" },
    "Reception": { uz: "Reception", ru: "Ресепшн" },
    "Hotel views": { uz: "Mehmonxona ko'rinishlari", ru: "Виды отеля" },
    "The finest views of our hotel": { uz: "Mehmonxonamizning eng yaxshi ko'rinishlari", ru: "Лучшие виды нашего отеля" },
    "All photos": { uz: "Barcha suratlar", ru: "Все фото" },
    "Courtyard": { uz: "Hovli", ru: "Двор" },
    "Courtyard view": { uz: "Hovli manzarasi", ru: "Вид на двор" },
    "Restaurant": { uz: "Restoran", ru: "Ресторан" },
    "Bedroom": { uz: "Yotoqxona", ru: "Спальня" },
    "Interior": { uz: "Interyer", ru: "Интерьер" },
    "Exterior": { uz: "Tashqi ko'rinish", ru: "Внешний вид" },
    "Guest reviews": { uz: "Mehmonlar fikri", ru: "Отзывы гостей" },
    "Based on Google reviews": { uz: "Google sharhlar asosida", ru: "На основе отзывов Google" },
    "Reviews from our guests on Google and Tripadvisor": { uz: "Google va Tripadvisor asosida mehmonlarimiz fikrlari", ru: "Отзывы наших гостей на Google и Tripadvisor" },
    "122 reviews": { uz: "122 sharh", ru: "122 отзыва" },
    "Based on 122 reviews": { uz: "122 sharh asosida", ru: "На основе 122 отзывов" },
    "The hotel is very good, the rooms are spacious and clean. The staff are kind and ready to help. The breakfast is excellent!": { uz: "Mehmonxona juda yaxshi, xonalar keng va toza. Xodimlar mehribon va yordamga tayyor. Nonushta ajoyib!", ru: "Отель очень хороший, номера просторные и чистые. Персонал приветливый и готов помочь. Завтрак отличный!" },
    "The hotel is very good, the rooms are spacious and clean. The staff are kind and ready to help. The breakfast is excellent! I recommend it to anyone coming to Bukhara.": { uz: "Mehmonxona juda yaxshi, xonalar keng va toza. Xodimlar mehribon va yordamga tayyor. Nonushta ajoyib! Buxoroga kelganlar uchun tavsiya etaman.", ru: "Отель очень хороший, номера просторные и чистые. Персонал приветливый и готов помочь. Завтрак отличный! Рекомендую всем, кто приезжает в Бухару." },
    "A good place, located in the centre of Bukhara. The service is at a good level.": { uz: "Yaxshi joy, Buxoro shahrining markazida joylashgan. Xizmat ko'rsatish yaxshi darajada.", ru: "Хорошее место, расположено в центре Бухары. Обслуживание на хорошем уровне." },
    "A good place, located in the centre of Bukhara. The service is at a good level. Price and quality match.": { uz: "Yaxshi joy, Buxoro shahrining markazida joylashgan. Xizmat ko'rsatish yaxshi darajada. Narx va sifat mos keladi.", ru: "Хорошее место, расположено в центре Бухары. Обслуживание на хорошем уровне. Цена соответствует качеству." },
    "A great hotel. The rooms are clean and the service is excellent. The breakfast is very good too. I recommend it!": { uz: "Zo'r mehmonxona. Xonalar toza, xizmat a'lo darajada. Nonushta ham juda yaxshi. Tavsiya etaman!", ru: "Отличный отель. Номера чистые, обслуживание превосходное. Завтрак тоже очень хороший. Рекомендую!" },
    "Swapping your phone numbers around for one another": { uz: "Telefon raqamlaringizni almashtirgani bilan almashtirib qo'yishlar", ru: "Меняют ваши телефонные номера местами" },
    "Experience it for yourself": { uz: "O'zingiz ham tajriba qiling", ru: "Испытайте сами" },
    "Caravan Plaza — the best choice in Bukhara": { uz: "Caravan Plaza — Buxoroda eng yaxshi tanlov", ru: "Caravan Plaza — лучший выбор в Бухаре" },
    "Book a room": { uz: "Xonani band qilish", ru: "Забронировать номер" },
    "Get in touch": { uz: "Biz bilan bog'laning", ru: "Свяжитесь с нами" },
    "Get in touch — we are glad to help": { uz: "Biz bilan bog'laning — sizga yordam berishdan xursandmiz", ru: "Свяжитесь с нами — мы рады помочь" },
    "Information": { uz: "Ma'lumotlar", ru: "Информация" },
    "Address": { uz: "Manzil", ru: "Адрес" },
    "Bukhara, Bukhara Region": { uz: "Buxoro, Buxoro Viloyati", ru: "Бухара, Бухарская область" },
    "Uzbekistan": { uz: "O'zbekiston", ru: "Узбекистан" },
    "Phone": { uz: "Telefon", ru: "Телефон" },
    "Working hours": { uz: "Ish vaqti", ru: "Время работы" },
    "24 hours / 7 days": { uz: "24 soat / 7 kun", ru: "24 часа / 7 дней" },
    "Reception always open": { uz: "Reception doim ochiq", ru: "Ресепшн всегда открыт" },
    "How to get here": { uz: "Qanday yetib kelish mumkin", ru: "Как добраться" },
    "From the airport": { uz: "Aeroportdan", ru: "Из аэропорта" },
    "15 minutes by taxi from Bukhara airport": { uz: "Buxoro aeroportidan taksi bilan 15 daqiqa", ru: "15 минут на такси из аэропорта Бухары" },
    "From the railway station": { uz: "Vokzaldan", ru: "С вокзала" },
    "10 minutes by taxi from the railway station": { uz: "Temir yo'l vokzalidan taksi bilan 10 daqiqa", ru: "10 минут на такси от ж/д вокзала" },
    "From the centre": { uz: "Markazdan", ru: "Из центра" },
    "5 minutes on foot from Lyabi-Hauz": { uz: "Lyabi-Hovuzdan piyoda 5 daqiqa", ru: "5 минут пешком от Ляби-Хауза" },
    "A 5-star hotel in the historic centre of Bukhara. Hospitality in the spirit of the Silk Road.": { uz: "Buxoro shahrining tarixiy markazida joylashgan 5 yulduzli mehmonxona. Ipak Yo'li ruhidagi mehmondo'stlik.", ru: "5-звёздочный отель в историческом центре Бухары. Гостеприимство в духе Шёлкового пути." },
    "5-star": { uz: "5 yulduzli", ru: "5 звёзд" },
    "Pages": { uz: "Sahifa", ru: "Страницы" },
    "Room types": { uz: "Xona turlari", ru: "Типы номеров" },
    "Standard room": { uz: "Standart xona", ru: "Стандартный номер" },
    "Family room": { uz: "Oilaviy xona", ru: "Семейный номер" },
    "Khodja Nurobobod Str., Bukhara": { uz: "Khodja Nurobobod Str., Buxoro", ru: "ул. Ходжа Нуробобод, Бухара" },
    "Open 24/7": { uz: "24/7 ochiq", ru: "Открыто 24/7" },
    "© 2024 Caravan Plaza. All rights reserved.": { uz: "© 2024 Caravan Plaza. Barcha huquqlar himoyalangan.", ru: "© 2024 Caravan Plaza. Все права защищены." },
    "Privacy Policy": { uz: "Maxfiylik siyosati", ru: "Политика конфиденциальности" },
    "Terms of Use": { uz: "Foydalanish shartlari", ru: "Условия использования" },
    "Our story": { uz: "Bizning tarix", ru: "Наша история" },
    "A tradition of hospitality in the ancient spirit of the Silk Road": { uz: "Ipak Yo'lining qadimiy ruhidagi mehmondo'stlik an'anasi", ru: "Традиция гостеприимства в духе древнего Шёлкового пути" },
    "Star rating": { uz: "Yulduz darajasi", ru: "Категория" },
    "Number of rooms": { uz: "Xonalar soni", ru: "Количество номеров" },
    "Location": { uz: "Joylashuv", ru: "Расположение" },
    "In the centre of Bukhara": { uz: "Buxoroning markazida", ru: "В центре Бухары" },
    "The hotel is located in the historic centre of Bukhara, close to the famous Lyabi-Hauz complex. Ancient madrasas and mosques, bazaars and museums are all nearby.": { uz: "Mehmonxona Buxoro shahrining tarixiy markazida, mashhur Lyabi-Hovuz majmuasi yaqinida joylashgan. Atrofda qadimiy madrasa va masjidlar, bozorlar va muzeylar joylashgan.", ru: "Отель расположен в историческом центре Бухары, рядом со знаменитым комплексом Ляби-Хауз. Поблизости находятся древние медресе и мечети, базары и музеи." },
    "There are convenient transport connections to the airport and the railway station. An ideal base for exploring the city.": { uz: "Aeroport va temir yo'l vokzaliga qulay transport aloqasi mavjud. Shahar bo'ylab sayohat uchun ideal joylashuv.", ru: "Удобное транспортное сообщение с аэропортом и железнодорожным вокзалом. Идеальное расположение для поездок по городу." },
    "Why us": { uz: "Nima uchun biz", ru: "Почему мы" },
    "Reasons to choose us": { uz: "Bizni tanlash uchun sabablar", ru: "Причины выбрать нас" },
    "Traditional breakfast": { uz: "An'anaviy nonushta", ru: "Традиционный завтрак" },
    "A free daily breakfast of Uzbek and European dishes": { uz: "Har kuni bepul o'zbek va Yevropa taomlaridan tashkil topgan nonushta", ru: "Ежедневный бесплатный завтрак из узбекских и европейских блюд" },
    "Ideal location": { uz: "Ideal joylashuv", ru: "Идеальное расположение" },
    "Close to the historic centre, Lyabi-Hauz and the bazaars": { uz: "Tarixiy markaz, Lyabi-Hovuz va bozorlar yaqinida", ru: "Рядом с историческим центром, Ляби-Хаузом и базарами" },
    "Modern comfort": { uz: "Zamonaviy qulaylik", ru: "Современный комфорт" },
    "Wi-Fi, air conditioning, TV and every other modern fitting": { uz: "Wi-Fi, konditsioner, TV va boshqa barcha zamonaviy jihozlar", ru: "Wi-Fi, кондиционер, телевизор и все другие современные удобства" },
    "Amenities": { uz: "Qulayliklar", ru: "Удобства" },
    "All the modern amenities and services for our guests": { uz: "Mehmonlarimiz uchun barcha zamonaviy qulayliklar va xizmatlar", ru: "Все современные удобства и услуги для наших гостей" },
    "A breakfast of traditional Uzbek and modern European dishes every morning. Freshly baked bread, cream, butter and hot drinks.": { uz: "Har kuni ertalabki an'anaviy o'zbek va zamonaviy Yevropa taomlaridan tashkil topgan nonushta. Yangi pishirilgan non, qaymoq, sariyog' va issiq ichimliklar.", ru: "Каждое утро завтрак из традиционных узбекских и современных европейских блюд. Свежевыпеченный хлеб, сливки, масло и горячие напитки." },
    "High-speed internet in all rooms and common areas. A reliable connection for work and for rest.": { uz: "Barcha xonalar va umumiy joylarda tezkor internet aloqasi. Ish va dam olish uchun muammosiz ulanish.", ru: "Высокоскоростной интернет во всех номерах и общих зонах. Надёжное подключение для работы и отдыха." },
    "Air conditioning and central heating are installed in all rooms. A comfortable temperature in any season.": { uz: "Barcha xonalarda havo konditsioneri va markaziy isitish tizimi o'rnatilgan. Yilning har qanday faslida qulay harorat.", ru: "Во всех номерах установлены кондиционер и центральное отопление. Комфортная температура в любое время года." },
    "An electronic safety deposit box in every room for your personal belongings. Your valuables stay secure.": { uz: "Har bir xonada shaxsiy buyumlaringiz uchun elektron xavfsizlik seyfi. Qimmatbaho narsalaringiz xavfsiz.", ru: "В каждом номере электронный сейф для ваших личных вещей. Ваши ценности в безопасности." },
    "Comfortable king-size beds and extra beds on request. Soft, well-padded mattresses.": { uz: "Qulay Kingsize karavotlar va so'rov bo'yicha qo'shimcha o'rinlar. Yumaloq va yumshoq to'shaklar.", ru: "Удобные кровати King-size и дополнительные места по запросу. Мягкие комфортные матрасы." },
    "Bathrooms fully equipped with a shower, bath, hairdryer, bathrobe and toiletries.": { uz: "Dush, vanna, fen, xalat va gigiena vositalari bilan to'liq jihozlangan vannaxonalar.", ru: "Ванные комнаты, полностью оснащённые душем, ванной, феном, халатом и туалетными принадлежностями." },
    "Additional": { uz: "Qo'shimcha", ru: "Дополнительно" },
    "Additional services": { uz: "Qo'shimcha xizmatlar", ru: "Дополнительные услуги" },
    "Television": { uz: "Televizor", ru: "Телевизор" },
    "A LED TV in every room": { uz: "Har bir xonada LED TV", ru: "LED-телевизор в каждом номере" },
    "Internal and external calls": { uz: "Ichki va tashqi qo'ng'iroqlar", ru: "Внутренние и внешние звонки" },
    "Writing desk": { uz: "Yozuv stoli", ru: "Письменный стол" },
    "A comfortable place to work": { uz: "Ish uchun qulay joy", ru: "Удобное место для работы" },
    "Service day and night": { uz: "Kechayu kunduz xizmat", ru: "Обслуживание днём и ночью" },
    "Family rooms": { uz: "Oilaviy xonalar", ru: "Семейные номера" },
    "Spacious rooms for families": { uz: "Oilalar uchun keng xonalar", ru: "Просторные номера для семей" },
    "Bathrobe and slippers": { uz: "Xalat va shippak", ru: "Халат и тапочки" },
    "Available in every room": { uz: "Har bir xonada mavjud", ru: "Есть в каждом номере" },
    "Travel service": { uz: "Sayohat xizmati", ru: "Туристические услуги" },
    "Excursions and transport": { uz: "Ekskursiya va transport", ru: "Экскурсии и транспорт" },
    "Non-smoking": { uz: "Chekish taqiqlangan", ru: "Для некурящих" },
    "Clean-air rooms": { uz: "Toza havo xonalari", ru: "Номера со свежим воздухом" },
    "Email": { uz: "Email", ru: "Эл. почта" },
    "24/7 Reception": { uz: "24/7 Reception", ru: "Ресепшн 24/7" },
    "Luxe Twin": { uz: "Luxe Twin", ru: "Люкс Твин" },
    "Luxe King": { uz: "Luxe King", ru: "Люкс Кинг" },
    "Luxe Premium": { uz: "Luxe Premium", ru: "Люкс Премиум" },
    "Luxe Premium Twin": { uz: "Luxe Premium Twin", ru: "Люкс Премиум Твин" }
  };

  var TITLES = {
    "Caravan Plaza — Bukhara, Uzbekistan": { uz: "Caravan Plaza — Buxoro", ru: "Caravan Plaza — Бухара" },
    "About — Caravan Plaza": { uz: "Haqida — Caravan Plaza", ru: "О нас — Caravan Plaza" },
    "Services — Caravan Plaza": { uz: "Xizmatlar — Caravan Plaza", ru: "Услуги — Caravan Plaza" },
    "Rooms — Caravan Plaza": { uz: "Xonalar — Caravan Plaza", ru: "Номера — Caravan Plaza" },
    "Gallery — Caravan Plaza": { uz: "Galereya — Caravan Plaza", ru: "Галерея — Caravan Plaza" },
    "Reviews — Caravan Plaza": { uz: "Sharhlar — Caravan Plaza", ru: "Отзывы — Caravan Plaza" },
    "Contact — Caravan Plaza": { uz: "Aloqa — Caravan Plaza", ru: "Контакты — Caravan Plaza" }
  };

  var originals = [];

  function saveOriginals() {
    if (originals.length > 0) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    while (walker.nextNode()) {
      var n = walker.currentNode;
      var t = n.textContent.trim();
      if (t && T[t]) {
        originals.push({ node: n, orig: n.textContent, key: t });
      }
    }
  }

  function applyLang(lang) {
    saveOriginals();
    for (var i = 0; i < originals.length; i++) {
      var o = originals[i];
      if (lang === DEFAULT_LANG) {
        o.node.textContent = o.orig;
      } else if (T[o.key] && T[o.key][lang]) {
        o.node.textContent = o.orig.replace(o.key, T[o.key][lang]);
      }
    }

    var title = document.title.trim();
    if (lang !== DEFAULT_LANG && TITLES[title] && TITLES[title][lang]) {
      document.title = TITLES[title][lang];
    }

    document.documentElement.lang = lang;
  }

  function updateSwitcher(lang) {
    document.querySelectorAll('.lang-switch').forEach(function(sw) {
      sw.innerHTML = '';
      LANGS.forEach(function(l) {
        if (l === lang) {
          var s = document.createElement('span');
          s.textContent = l.toUpperCase();
          sw.appendChild(s);
        } else {
          var a = document.createElement('a');
          a.href = '#';
          a.textContent = l.toUpperCase();
          a.setAttribute('lang', l);
          a.addEventListener('click', function(e) {
            e.preventDefault();
            var newLang = this.textContent.trim().toLowerCase();
            try { localStorage.setItem('hotel-lang', newLang); } catch (err) {}
            location.reload();
          });
          sw.appendChild(a);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var lang = DEFAULT_LANG;
    try { lang = localStorage.getItem('hotel-lang') || DEFAULT_LANG; } catch (err) {}
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;
    if (lang !== DEFAULT_LANG) applyLang(lang);
    updateSwitcher(lang);
  });
})();
