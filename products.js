const products = [
    // Gelinlikler
    {
        "id": 1,
        "name": "Venüs",
        "category": "gelinlik",
        "image": "galeri/model1/OMER4406.JPG",
        "gallery": [
            "galeri/model1/OMER4422.JPG",
            "galeri/model1/OMER4461.JPG",
            "galeri/model1/OMER4448.JPG",
            "galeri/model1/OMER4455.JPG"
        ],
        "attributes": { "style": "Modern romantik", "color": "Beyaz", "detail": " taş ve inci işlemeli" },
        "badge": "Yeni",
        "description": "Swarovski taşlar, kristaller ve incilerle elde işlenen bu özel korse, bohem kesimiyle modern bir zarafet sunuyor. İnci askılarıyla tamamlanan bu eşsiz parça, en özel anlarınıza ışıltı katmak için tasarlandı."
    },
    {
        "id": 2,
        "name": "İnci tanesi",
        "category": "gelinlik",
        "image": "galeri/model2/OMER4487.JPG",
        "gallery": [
            "galeri/model2/OMER4507.JPG",
            "galeri/model2/OMER4470.JPG",
            "galeri/model2/OMER4469.JPG",
            "galeri/model2/OMER4474.JPG"
        ],
        "attributes": { "style": "romantik ve sofistike", "color": "Beyaz", "detail": "Dantel ve inci işlemeli" },
        "description": "Satenin pürüzsüz dokusu, dantel işlemeler ve inci detaylarla buluşuyor. Romantik korse kesimiyle sofistike bir silüet yaratan bu özel parça, zarafetin en saf halini sunuyor."
    },
    {
        "id": 3,
        "name": "Ayşenur",
        "category": "gelinlik",
        "image": "galeri/model3/OMER4187.JPG",
        "gallery": [
            "galeri/model3/OMER4142.JPG",
            "galeri/model3/OMER4169.JPG",
            "galeri/model3/OMER4183.JPG",
            "galeri/model3/OMER4145.JPG"
        ],
        "attributes": { "style": "modern prenses", "color": "Beyaz", "detail": "Savoriski taş ve kasnak işlemeli" },
        "description": "Korse kesimin asaletini Swarovski taş ve el yapımı kasnak işlemeleriyle buluşturduk. Modern bir prenses duruşu sergilemek isteyenler için iddialı, ışıltılı ve benzersiz."
    },
    {
        "id": 4,
        "name": "Elsera",
        "category": "gelinlik",
        "image": "galeri/model4/OMER4219.JPG",
        "gallery": [
            "galeri/model4/OMER4243.JPG",
            "galeri/model4/OMER4191.JPG",
            "galeri/model4/OMER4234.JPG",
            "galeri/model4/OMER4193.JPG"
        ],
        "attributes": { "style": "modern prensen", "color": "Beyaz", "detail": "Özel taş işleme" },
        "badge": "Popüler",
        "description": "Straplez korse bedenin kusursuz formu, simli pile etekle buluşuyor. Özel taş işlemeleriyle zenginleştirilen bu tasarım, modern bir prenses ihtişamını her adımda hissettiriyor."
    },
    {
        "id": 5,
        "name": "İrem",
        "category": "gelinlik",
        "image": "galeri/model5/OMER4575.JPG",
        "gallery": [
            "galeri/model5/OMER4658.JPG",
            "galeri/model5/OMER4630.JPG",
            "galeri/model5/OMER4614.JPG",
            "galeri/model5/OMER4541.JPG"
        ],
        "attributes": { "style": "Romantik ve asil modern", "color": "Beyaz", "detail": "İnci ve kristal el işlemeli" },
        "badge": "Özel",
        "description": "İnci ve kristal el işlemeleriyle hayat bulan Fransız danteli, dekolte yaka ve düşük omuz kollarla buluşuyor. Modern prenses eteğiyle birleşen bu tasarım, asil ve romantik bir duruş sunuyor."
    },
    {
        "id": 6,
        "name": "Tuğçenur",
        "category": "gelinlik",
        "image": "galeri/model6/OMER4128.JPG",
        "gallery": [
            "galeri/model6/OMER4124.JPG",
            "galeri/model6/OMER4125.JPG",
            "galeri/model6/OMER4130.JPG",
            "galeri/model6/OMER4141.JPG"
        ],
        "attributes": { "style": "Şık ve iddialı", "color": "Beyaz", "detail": "nci ve kristal işlemeli" },
        "description": "Zarif kol detayları ve modern motiflerle yeniden yorumlanan bu tasarım; inci ve kristal işlemeleriyle ışıldıyor. Şık, iddialı ve duruşuyla hayranlık uyandıran bir asalet."
    },
    {
        "id": 7,
        "name": "Sia Sultan",
        "category": "gelinlik",
        "image": "galeri/model11/OMER5578.JPG",
        "gallery": [
            "galeri/model11/OMER5618.JPG",
            "galeri/model11/OMER5637.JPG",
            "galeri/model11/OMER5592.JPG",
            "galeri/model11/OMER5612.JPG"
        ],
        "attributes": { "style": "Sade ve iddalı ", "color": "Beyaz", "detail": "inci taş işlemeli" },
        "description": "Kadife kumaşın asaletini, inci ve taşlarla bezenmiş özel korse bedeniyle buluşturduk. Çan kesim formunu tamamlayan taş işlemeli uzun ve parlak özel duvağıyla, sade ama bir o kadar iddialı bir duruş."
    },
    {
        "id": 8,
        "name": "Ayşe sultan",
        "category": "gelinlik",
        "image": "galeri/model14/IMG_6475.JPG.jpeg",
        "gallery": [
            "galeri/model14/IMG_4670.JPG.jpeg",
            "galeri/model14/IMG_6480.JPG.jpeg",
            "galeri/model14/IMG_6483.JPG.jpeg",
            "galeri/model14/IMG_6581.JPG.jpeg"
        ],
        "attributes": { "style": "Işıltılı ve iddialı ", "color": "Beyaz", "detail": "Kristal işlemeli " },
        "description": "Drape sanatının kristal saçaklarla buluştuğu asil bir silüet. Kristal işlemeli, uzun ve havalı duvağıyla tamamlanan bu tasarım, her adımda ışıldayan iddialı bir duruş sunuyor."
    },
    {
        "id": 9,
        "name": "Galya",
        "category": "gelinlik",
        "image": "galeri/model16/IMG_6400.JPG.jpeg",
        "gallery": [
            "galeri/model16/IMG_6397.JPG.jpeg",
            "galeri/model16/IMG_6399.JPG.jpeg",
            "galeri/model16/IMG_6401.JPG.jpeg",
            "galeri/model16/IMG_6398.JPG.jpeg"
        ],
        "attributes": { "style": "Modern ve asil", "color": "Beyaz", "detail": "inci taş işlemeli" },
        "description": "Fransız dantelinin inci ve kristal ışıltısıyla buluştuğu bu tasarım, özel kesim pelerini ve İspanyol kol detaylarıyla hareketleniyor. Modern kesimiyle asaletini her adımda hissettiren, büyüleyici bir silüet."
    },
    {
        "id": 10,
        "name": "Anastasia",
        "category": "gelinlik",
        "image": "galeri/model17/IMG_5579.JPG.jpeg",
        "gallery": [
            "galeri/model17/IMG_5591.JPG.jpeg",
            "galeri/model17/IMG_5582.JPG.jpeg",
            "galeri/model17/IMG_5590.JPG.jpeg",
            "galeri/model17/IMG_5597.JPG.jpeg"
        ],
        "attributes": { "style": "Romantik ve asil", "color": "Pembe", "detail": "İnci askı" },
        "description": "İnci askıların naif dokunuşu, kusursuz büstiyer korse kalıbıyla buluşuyor. Geçmişin romantizmini günümüzün asil duruşuyla birleştiren, zamansız bir şıklık."
    },
    {
        "id": 11,
        "name": "Esma",
        "category": "gelinlik",
        "image": "galeri/model15/OMER4847.JPG",
        "gallery": [
            "galeri/model15/OMER4863.JPG",
            "galeri/model15/OMER4888.JPG",
            "galeri/model15/OMER4870.JPG",
            "galeri/model15/OMER4882.JPG"
        ],
        "attributes": { "style": "Sade ve şık", "color": "Pembe", "detail": "Sade" },
        "description": "Satenin pürüzsüz dokusu, bedeni kusursuzca saran romantik korse detaylarıyla buluşuyor. Sade çizgilerin iddialı bir duruşla birleştiği, asil bir silüet."
    },
    {
        "id": 12,
        "name": "Flora",
        "category": "gelinlik",
        "image": "galeri/model18/OMER4670.JPG",
        "gallery": [
            "galeri/model18/OMER4724.JPG",
            "galeri/model18/OMER4705.JPG",
            "galeri/model18/OMER4741.JPG",
            "galeri/model18/OMER4732.JPG"
        ],
        "attributes": { "style": "Bohem & zarif", "color": "Pembe", "detail": "3d çiçekler kış tüyleri" },
        "description": "Doğadan ilham alan 3D çiçekler ve kış tüylerinin romantik birleşimi. Düşük omuz detayıyla omuzlarınıza zarafet katan bu Helen model, bohem stilin en asil halini yansıtıyor."
    },


    // kınalıklar
    {
        "id": 13,
        "name": "Alev",
        "category": "kinalik",
        "image": "galeri/model7/OMER4934.JPG",
        "gallery": [
            "galeri/model7/OMER4918.JPG",
            "galeri/model7/OMER4894.JPG",
            "galeri/model7/OMER4896.JPG",
            "galeri/model7/OMER4961.JPG"
        ],
        "attributes": { "style": "Prenses", "color": "Kırmızı", "detail": "taş işlemeli" },
        "badge": "Yeni",
        "description": "Satenin asaletini, göz alıcı taş işlemeli korse detayıyla buluşturduk. Stil prenses kesimiyle klasik ve moderni harmanlayan, her ışıkta parlayan ihtişamlı bir duruş."
    },
    {
        "id": 14,
        "name": "Alara",
        "category": "kinalik",
        "image": "galeri/model8/OMER4972.JPG",
        "gallery": [
            "galeri/model8/OMER4986.JPG",
            "galeri/model8/OMER5002.JPG",
            "galeri/model8/OMER4964.JPG",
            "galeri/model8/OMER4995.JPG"
        ],
        "attributes": { "style": "Prenses", "color": "Kırmızı", "detail": "işlemeli fransız danteli" },
        "description": "El işlemeli Fransız dantelinin detaylarda gizli şıklığı. Düşük omuzlu dantel kollar ve görkemli prenses kesim ile romantizmin en asil hali."
    },
    {
        "id": 15,
        "name": "Saray sultanı",
        "category": "kinalik",
        "image": "galeri/model9/OMER5036.JPG",
        "gallery": [
            "galeri/model9/OMER5027.JPG",
            "galeri/model9/OMER5007.JPG",
            "galeri/model9/OMER5036.JPG",
            "galeri/model9/OMER5020.JPG"
        ],
        "attributes": { "style": "İddialı ve çarpıcı", "color": "Kırmızı", "detail": "Işıltılı inci ve boncuk işlemeli " },
        "description": "İnci ve boncuk el işçiliğinin en iddialı hali. Hareketli saçak omuzlar ve geceyi kolaylaştıran demonte kuyruk detayıyla, hem görkemli bir giriş hem de özgürce eğlenebileceğiniz çarpıcı bir şıklık."
    },
    {
        "id": 16,
        "name": "Galya",
        "category": "kinalik",
        "image": "galeri/model13/IMG_6706.jpeg",
        "gallery": [
            "galeri/model13/IMG_6699.jpeg",
            "galeri/model13/IMG_6702.jpeg",
            "galeri/model13/IMG_6711.jpeg",
            "galeri/model13/IMG_6699.jpeg"
        ],
        "attributes": { "style": "ihtişamlı ve prenses", "color": "Kırmızı", "detail": "kasnak işleme" },
        "description": "Kasnak işlemenin ince detayları ve omuzlardaki iddialı vurgular. Prenses kesimin ihtişamıyla buluşan bu model, fark yaratmak isteyenlerin vazgeçilmezi olacak."
    },

    // Aksesuarlar â€” gallery yok (tek ana fotograf)
    {
        "id": 17,
        "name": "Gül Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.07 (1).jpeg",
        "attributes": { "type": "Çiçek", "color": "Pembe" },
        "badge": "Yeni",
        "description": "Zarif pembe gül buketimizle özel gününüzü taçlandırın."
    },

    {
        "id": 18,
        "name": "Beyaz ÅakayÄ±k",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.07 (2).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "description": "Saf beyaz ÅŸakayÄ±klardan oluşan romantik buket."
    },
    {
        "id": 19,
        "name": "Gelin Çiçeği",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.07.jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "badge": "Popüler",
        "description": "Klasik gelin çiçeği, zarif ve şık tasarım."
    },
    {
        "id": 20,
        "name": "Lavanta Demeti",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (1).jpeg",
        "attributes": { "type": "Çiçek", "color": "Mor" },
        "description": "Doğal lavanta demetinden oluşan rustik buket."
    },
    {
        "id": 21,
        "name": "Orkide Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (10).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "badge": "Özel",
        "description": "Egzotik orkidelerden oluşan lüks gelin buketi."
    },
    {
        "id": 22,
        "name": "Papatya Aranjmanı",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (11).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "description": "Taze papatyalarla hazırlanmış doğal aranjman."
    },
    {
        "id": 23,
        "name": "Kır Çiçekleri",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (12).jpeg",
        "attributes": { "type": "Çiçek", "color": "Karışık" },
        "description": "Renkli kır çiçeklerinden oluşan bohem tarzı buket."
    },
    {
        "id": 24,
        "name": "Zambak Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (2).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "badge": "Yeni",
        "description": "Saf beyaz zambakların zarif uyumuyla hazırlanan buket."
    },
    {
        "id": 25,
        "name": "Ortanca Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (3).jpeg",
        "attributes": { "type": "Çiçek", "color": "Mavi" },
        "description": "Mavi ortancalarla hazırlanmÄ±ÅŸ romantik buket."
    },
    {
        "id": 26,
        "name": "Mini Buket",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (4).jpeg",
        "attributes": { "type": "Çiçek", "color": "Pembe" },
        "description": "Küçük ve sevimli mini gelin buketi."
    },
    {
        "id": 27,
        "name": "ÅakayÄ±k GÃ¼l",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (5).jpeg",
        "attributes": { "type": "Çiçek", "color": "Pembe" },
        "badge": "Popüler",
        "description": "ÅakayÄ±k gÃ¼llerin büyüleyici güzelliğiyle hazırlanan buket."
    },
    {
        "id": 28,
        "name": "Kasımpatı Demeti",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (7).jpeg",
        "attributes": { "type": "Çiçek", "color": "Sarı" },
        "description": "Sonbahar temalÄ± kasÄ±mpatÄ± demeti."
    },
    {
        "id": 29,
        "name": "Lale Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (8).jpeg",
        "attributes": { "type": "Çiçek", "color": "Kırmızı" },
        "description": "Kırmızı lalelerin tutkulu güzelliğiyle hazırlanan buket."
    },
    {
        "id": 30,
        "name": "Yasemin Demeti",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08 (9).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "description": "Mis kokulu yasemin demetinden oluşan zarif buket."
    },
    {
        "id": 31,
        "name": "Gerbera Aranjmanı",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.08.jpeg",
        "attributes": { "type": "Çiçek", "color": "Turuncu" },
        "badge": "Yeni",
        "description": "Canlı renkli gerberalardan oluşan neşeli aranjman."
    },
    {
        "id": 32,
        "name": "Kamelya Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (1).jpeg",
        "attributes": { "type": "Çiçek", "color": "Pembe" },
        "description": "Zarif kamelya Ã§iÃ§eklerinden oluşan lÃ¼ks buket."
    },
    {
        "id": 33,
        "name": "Manolya Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (10).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "badge": "Özel",
        "description": "BÃ¼yÃ¼k manolya Ã§iÃ§ekleriyle hazırlanan gösterişli buket."
    },
    {
        "id": 34,
        "name": "Sümbül Demeti",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (11).jpeg",
        "attributes": { "type": "Çiçek", "color": "Mor" },
        "description": "Bahar kokulu sÃ¼mbÃ¼l demetinden oluşan taze buket."
    },
    {
        "id": 35,
        "name": "Anemon Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (2).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "description": "Siyah merkezli beyaz anemonlardan zarif buket."
    },
    {
        "id": 36,
        "name": "Lisyantus Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (3).jpeg",
        "attributes": { "type": "Çiçek", "color": "Lila" },
        "badge": "Popüler",
        "description": "Lila lisyantusların romantik uyumuyla hazırlanan buket."
    },
    {
        "id": 37,
        "name": "Çiçek Tacı",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (4).jpeg",
        "attributes": { "type": "Çiçek", "color": "Karışık" },
        "description": "DoÄŸal Ã§iÃ§eklerden hazırlanmÄ±ÅŸ gelin saç tacÄ±."
    },
    {
        "id": 38,
        "name": "Ranunkulus Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (5).jpeg",
        "attributes": { "type": "Çiçek", "color": "Pembe" },
        "description": "Katmerli ranunkulusların büyüleyici gÃ¼zelliÄŸi."
    },
    {
        "id": 39,
        "name": "Frezya Demeti",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (6).jpeg",
        "attributes": { "type": "Çiçek", "color": "Sarı" },
        "description": "Mis kokulu frezyalardan oluşan zarif demet."
    },
    {
        "id": 40,
        "name": "Gelincik Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (7).jpeg",
        "attributes": { "type": "Çiçek", "color": "Kırmızı" },
        "badge": "Yeni",
        "description": "Kızıl gelinciklerden oluşan doğal ve romantik buket."
    },
    {
        "id": 41,
        "name": "Erengül Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (8).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "description": "Zarif erengüllerden hazırlanan klasik gelin buketi."
    },
    {
        "id": 42,
        "name": "Kardelen Buketi",
        "category": "aksesuar",
        "image": "galeri/cicek/WhatsApp Image 2026-02-18 at 14.23.09 (9).jpeg",
        "attributes": { "type": "Çiçek", "color": "Beyaz" },
        "description": "Naif kardelenlerden oluşan minimalist gelin buketi."
    }
];


