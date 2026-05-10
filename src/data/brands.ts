export interface BrandContent {
  name: string;
  category: string;
  headline: string;
  description: string;
  about: string;
  content: string[];
  capabilities: string[];
}

export interface Brand {
  slug: string;
  logo: string;
  banner: string;
  website: string;
  en: BrandContent;
  tr: BrandContent;
}

export const BRANDS: Brand[] = [
  {
    slug: "hhy-agro",
    logo: "/images/logos/brands/hhy-agro-.png",
    banner: "/images/agricultural-areas.webp",
    website: "",
    en: {
      name: "HHY Agro",
      category: "Agricultural Operations",
      headline: "Agricultural strength connected to traceable food production.",
      description: "HHY Agro is HHY Group's agricultural operations brand, supporting walnut, olive, almond, and seedless grape production with traceable raw material supply for food manufacturing and export.",
      about: "HHY Agro connects HHY Group's agricultural operations with its wider food production ecosystem. The brand supports large-scale farmland management, raw material planning, traceable agricultural supply, and farm-to-factory coordination for food manufacturing, nut processing, snack production, and export-oriented private label projects.",
      content: [
        "HHY Agro represents the agricultural foundation behind HHY Group's production ecosystem. Its operations support long-term supply security, agricultural raw material planning, and closer control between farmland, processing facilities, and finished food production.",
        "The brand is connected to large-scale agricultural areas in Kula and Kalecik, with a focus on high-volume walnuts, olives, almonds, and seedless grapes. This agricultural base strengthens HHY Group's ability to support traceable nut supply, snack production, private label food manufacturing, and export-ready raw material programs.",
        "For B2B customers, HHY Agro is important because private label and OEM food projects depend on stable sourcing, reliable quality, and predictable planning. By connecting agriculture with chocolate, snack, and nut processing operations, HHY Group can offer a stronger supply story from raw material to finished product.",
      ],
      capabilities: ["Walnuts", "Olives", "Almonds", "Seedless grapes"],
    },
    tr: {
      name: "HHY Agro",
      category: "Tarımsal Operasyonlar",
      headline: "İzlenebilir gıda üretimine bağlı tarımsal güç.",
      description: "HHY Agro, HHY Group'un tarımsal operasyon markasıdır; gıda üretimi ve ihracatı için izlenebilir ham madde tedariki ile ceviz, zeytin, badem ve çekirdeksiz üzüm üretimini destekler.",
      about: "HHY Agro, HHY Group'un tarımsal operasyonlarını daha geniş gıda üretim ekosistemiyle birleştirir. Marka; büyük ölçekli tarım arazisi yönetimini, ham madde planlamasını, izlenebilir tarımsal tedariği ve gıda imalatı, kuruyemiş işleme, atıştırmalık üretimi ve ihracat odaklı private label projeleri için tarladan fabrikaya koordinasyonu destekler.",
      content: [
        "HHY Agro, HHY Group'un üretim ekosisteminin arkasındaki tarımsal temeli temsil eder. Operasyonları; uzun vadeli tedarik güvenliğini, tarımsal ham madde planlamasını ve tarım arazileri, işleme tesisleri ve bitmiş gıda üretimi arasında daha sıkı kontrolü destekler.",
        "Marka, Kula ve Kalecik'teki büyük ölçekli tarım alanlarına bağlıdır ve yüksek hacimli ceviz, zeytin, badem ve çekirdeksiz üzüm odaklıdır. Bu tarımsal taban, HHY Group'un izlenebilir kuruyemiş tedariğini, atıştırmalık üretimini, private label gıda imalatını ve ihracata hazır ham madde programlarını destekleme yeteneğini güçlendirir.",
        "B2B müşterileri için HHY Agro önemlidir çünkü private label ve OEM gıda projeleri; istikrarlı kaynak sağlama, güvenilir kalite ve öngörülebilir planlamaya bağlıdır. Tarımı çikolata, atıştırmalık ve kuruyemiş işleme operasyonlarıyla birleştiren HHY Group, ham maddeden bitmiş ürüne kadar daha güçlü bir tedarik hikayesi sunabilir.",
      ],
      capabilities: ["Ceviz", "Zeytin", "Badem", "Çekirdeksiz Üzüm"],
    }
  },
  {
    slug: "ender-chocolate",
    logo: "/images/logos/brands/ender-chocolate.svg",
    banner: "/images/chocolate-production-oem-private-label.webp",
    website: "https://endercikolata.com",
    en: {
      name: "Ender Chocolate",
      category: "Chocolate Manufacturing",
      headline: "Industrial chocolate know-how for retail, export, and private label production.",
      description: "Ender Chocolate is HHY Group's chocolate manufacturing brand for private label, OEM confectionery, chocolate bars, filled chocolates, wafers, coated products, and export-ready retail production.",
      about: "Ender Chocolate is HHY Group's dedicated chocolate manufacturing brand, created for scalable confectionery production, private label chocolate projects, and OEM snack development. The brand brings together industrial chocolate know-how, recipe adaptation, packaging readiness, and export-oriented production planning for retailers, distributors, importers, and confectionery brands that need dependable manufacturing capacity.",
      content: [
        "As a private label chocolate manufacturer, Ender Chocolate supports the full path from product brief to finished goods. Projects can include chocolate bars, filled chocolates, molded products, coated wafers, compound chocolate products, and retail-ready confectionery formats designed for supermarket chains, distributors, and regional brand owners.",
        "The brand is especially relevant for B2B buyers searching for OEM chocolate production, custom chocolate formulation, chocolate wafer manufacturing, and scalable confectionery supply from Turkiye. Production planning is built around repeatable recipes, consistent packaging specifications, batch traceability, and quality controls required by modern retail and export channels.",
        "Ender Chocolate also gives partners flexibility when developing new product ranges. Whether the need is a value-focused retail product, a premium filled chocolate line, a wafer-based snack, or a chocolate-coated product for private label shelves, HHY Group's production infrastructure helps turn the concept into a commercially ready product.",
      ],
      capabilities: ["Chocolate bars", "Filled chocolates", "Wafers", "Coated products"],
    },
    tr: {
      name: "Ender Çikolata",
      category: "Çikolata Üretimi",
      headline: "Perakende, ihracat ve private label üretimi için endüstriyel çikolata uzmanlığı.",
      description: "Ender Çikolata; private label, OEM şekerleme, tablet çikolatalar, dolgulu çikolatalar, gofretler, kaplamalı ürünler ve ihracata hazır perakende üretimi için HHY Group'un çikolata üretim markasıdır.",
      about: "Ender Çikolata, ölçeklenebilir şekerleme üretimi, private label çikolata projeleri ve OEM atıştırmalık geliştirme için oluşturulmuş HHY Group'un özel çikolata üretim markasıdır. Marka; güvenilir üretim kapasitesine ihtiyaç duyan perakendeciler, distribütörler, ithalatçılar ve şekerleme markaları için endüstriyel çikolata uzmanlığını, reçete adaptasyonunu, paketleme hazırlığını ve ihracat odaklı üretim planlamasını bir araya getirir.",
      content: [
        "Bir private label çikolata üreticisi olarak Ender Çikolata, ürün brief'inden bitmiş ürüne kadar tüm yolu destekler. Projeler; süpermarket zincirleri, distribütörler ve bölgesel marka sahipleri için tasarlanmış tablet çikolataları, dolgulu çikolataları, kalıplanmış ürünleri, kaplamalı gofretleri, kokolin ürünleri ve perakendeye hazır şekerleme formatlarını içerebilir.",
        "Marka, özellikle Türkiye'den OEM çikolata üretimi, özel çikolata formülasyonu, çikolatalı gofret imalatı ve ölçeklenebilir şekerleme tedariği arayan B2B alıcıları için uygundur. Üretim planlaması; modern perakende ve ihracat kanallarının gerektirdiği tekrarlanabilir reçeteler, tutarlı paketleme özellikleri, parti izlenebilirliği ve kalite kontrolleri etrafında inşa edilmiştir.",
        "Ender Çikolata ayrıca yeni ürün yelpazesi geliştirirken ortaklarına esneklik sağlar. İhtiyaç ister uygun fiyatlı bir perakende ürünü, ister premium dolgulu bir çikolata serisi, ister gofret bazlı bir atıştırmalık veya private label rafları için çikolata kaplı bir ürün olsun; HHY Group'un üretim altyapısı konseptin ticari olarak hazır bir ürüne dönüşmesine yardımcı olur.",
      ],
      capabilities: ["Tablet Çikolatalar", "Dolgulu Çikolatalar", "Gofretler", "Kaplamalı Ürünler"],
    }
  },
  {
    slug: "sn4ck",
    logo: "/images/logos/brands/snack-bant-logo.avif",
    banner: "/images/sn4ck-cashew-photo.webp",
    website: "",
    en: {
      name: "SN4CK",
      category: "Protein Bars & Snack Products",
      headline: "Modern snack and protein bar formats for private label and retail growth.",
      description: "SN4CK is HHY Group's modern snack and protein bar brand for private label protein bars, OEM snack products, nut-based bars, chocolate-coated bars, and on-the-go retail formats.",
      about: "SN4CK is HHY Group's modern snack brand created around protein bars, snack bars, nut-based formats, chocolate-coated bars, and on-the-go retail products. The brand is positioned for customers looking for private label protein bar manufacturing, OEM snack development, nutrition-led product concepts, and flexible retail-ready formats for modern consumer channels.",
      content: [
        "SN4CK is structured for modern snack consumption, especially products that need a clear value proposition such as protein bars, nut-based snack bars, chocolate-coated bars, and practical on-the-go products. It supports retailers, importers, and distributors looking for export-ready private label snack ranges.",
        "The brand is relevant for buyers searching for protein bar OEM production, private label snack bars, custom snack formulation, and scalable manufacturing for nutrition-led products. HHY Group can support product development around texture, coating, flavor, ingredient profile, packaging, and target price point.",
        "SN4CK can be adapted for different retail strategies, including everyday protein bars, indulgent chocolate-coated bars, nut and fruit snack bars, functional snack concepts, and value-driven multipack formats. The goal is to give partners a flexible platform for launching snack products with consistent quality and commercial shelf appeal.",
      ],
      capabilities: ["Protein bars", "Snack bars", "Nut-based snacks", "On-the-go formats"],
    },
    tr: {
      name: "SN4CK",
      category: "Protein Barlar ve Atıştırmalık Ürünler",
      headline: "Private label ve perakende büyümesi için modern atıştırmalık ve protein bar formatları.",
      description: "SN4CK; private label protein barlar, OEM atıştırmalık ürünler, kuruyemiş bazlı barlar, çikolata kaplı barlar ve pratik perakende formatları için HHY Group'un modern atıştırmalık ve protein bar markasıdır.",
      about: "SN4CK; protein barlar, atıştırmalık barlar, kuruyemiş bazlı formatlar, çikolata kaplı barlar ve pratik perakende ürünleri etrafında oluşturulmuş HHY Group'un modern atıştırmalık markasıdır. Marka; private label protein bar imalatı, OEM atıştırmalık geliştirme, beslenme odaklı ürün konseptleri ve modern tüketici kanalları için esnek, perakendeye hazır formatlar arayan müşteriler için konumlandırılmıştır.",
      content: [
        "SN4CK, özellikle protein barlar, kuruyemiş bazlı atıştırmalık barlar, çikolata kaplı barlar ve pratik ürünler gibi net bir değer teklifine ihtiyaç duyan ürünler olmak üzere modern atıştırmalık tüketimi için yapılandırılmıştır. İhracata hazır private label atıştırmalık serileri arayan perakendecileri, ithalatçıları ve distribütörleri destekler.",
        "Marka; protein bar OEM üretimi, private label atıştırmalık barlar, özel atıştırmalık formülasyonu ve beslenme odaklı ürünler için ölçeklenebilir üretim arayan alıcılar için uygundur. HHY Group; doku, kaplama, aroma, içerik profili, paketleme ve hedef fiyat noktası etrafında ürün geliştirmeyi destekleyebilir.",
        "SN4CK; günlük protein barlar, keyifli çikolata kaplı barlar, kuruyemiş ve meyve barları, fonksiyonel atıştırmalık konseptleri ve değer odaklı çoklu paket formatları dahil olmak üzere farklı perakende stratejilerine uyarlanabilir. Amaç, ortaklara tutarlı kalite ve ticari raf cazibesi ile atıştırmalık ürünleri piyasaya sürmek için esnek bir platform sunmaktır.",
      ],
      capabilities: ["Protein Barlar", "Atıştırmalık Barlar", "Kuruyemiş Bazlı Atıştırmalıklar", "Pratik Formatlar"],
    }
  },
  {
    slug: "dedem-kuruyemis",
    logo: "/images/logos/brands/dedem-kuruyemis-logo.png",
    banner: "/images/dedem-kuruyemis-gorsel.webp",
    website: "",
    en: {
      name: "Dedem Kuruyemis",
      category: "Nuts & Dried Fruits",
      headline: "Nuts and dried fruit expertise shaped for everyday consumer demand.",
      description: "Dedem Kuruyemis is HHY Group's nuts and dried fruits brand, supported by industrial nut processing, roasting, seasoning, packaging, private label snack production, and export-ready retail formats.",
      about: "Dedem Kuruyemis represents HHY Group's experience in nuts, dried fruits, roasting, seasoning, and consumer-ready snack packaging. The brand is positioned for retail shelves, wholesale channels, private label nut projects, and OEM snack production where consistent flavor, freshness, packaging quality, and reliable supply are essential.",
      content: [
        "Dedem Kuruyemis is built around high-demand snack categories such as raw nuts, roasted nuts, seasoned nuts, dried fruits, mixed nut packs, and coated snack products. It connects HHY Group's nut processing facility with retail packaging capability for customers that need shelf-ready products and repeatable supply.",
        "For private label and OEM buyers, the brand demonstrates HHY Group's ability to manage nut processing from raw material preparation to roasting, seasoning, packaging, labeling, and export documentation. This makes Dedem Kuruyemis relevant for supermarket private label programs, distributor snack ranges, and regional retail brands looking for dependable nut and dried fruit manufacturing.",
        "The product direction can be adapted for different market needs, including traditional roasted nut selections, flavored nut mixes, dried fruit combinations, chocolate-coated nut products, sauced nuts, and everyday snack formats. Each range can be developed with packaging specifications, portion sizes, and retail positioning in mind.",
      ],
      capabilities: ["Roasted nuts", "Seasoned nuts", "Dried fruits", "Retail packs"],
    },
    tr: {
      name: "Dedem Kuruyemiş",
      category: "Kuruyemiş ve Kuru Meyveler",
      headline: "Günlük tüketici talebine göre şekillendirilmiş kuruyemiş ve kuru meyve uzmanlığı.",
      description: "Dedem Kuruyemiş; endüstriyel kuruyemiş işleme, kavurma, soslama, paketleme, private label atıştırmalık üretimi ve ihracata hazır perakende formatlarıyla desteklenen HHY Group'un kuruyemiş ve kuru meyve markasıdır.",
      about: "Dedem Kuruyemiş, HHY Group'un kuruyemiş, kuru meyve, kavurma, soslama ve tüketiciye hazır atıştırmalık paketleme konusundaki tecrübesini temsil eder. Marka; tutarlı lezzet, tazelik, paketleme kalitesi ve güvenilir tedarikin temel olduğu perakende rafları, toptan satış kanalları, private label kuruyemiş projeleri ve OEM atıştırmalık üretimi için konumlandırılmıştır.",
      content: [
        "Dedem Kuruyemiş; çiğ kuruyemişler, kavrulmuş kuruyemişler, soslu kuruyemişler, kuru meyveler, karışık kuruyemiş paketleri ve kaplamalı atıştırmalık ürünler gibi yüksek talep gören atıştırmalık kategorileri etrafında inşa edilmiştir. HHY Group'un kuruyemiş işleme tesisini, rafa hazır ürünlere ve tekrarlanabilir tedariğe ihtiyaç duyan müşteriler için perakende paketleme yeteneğiyle birleştirir.",
        "Private label ve OEM alıcıları için marka, HHY Group'un ham madde hazırlığından kavurmaya, soslamadan paketlemeye, etiketlemeden ihracat belgelerine kadar kuruyemiş işlemeyi yönetme yeteneğini gösterir. Bu, Dedem Kuruyemiş'i süpermarket private label programları, distribütör atıştırmalık serileri ve güvenilir kuruyemiş ve kuru meyve imalatı arayan bölgesel perakende markaları için uygun hale getirir.",
        "Ürün yönü; geleneksel kavrulmuş kuruyemiş seçenekleri, aromalı kuruyemiş karışımları, kuru meyve kombinasyonları, çikolata kaplı kuruyemiş ürünleri, soslu kuruyemişler ve günlük atıştırmalık formatları dahil olmak üzere farklı pazar ihtiyaçlarına göre uyarlanabilir.",
      ],
      capabilities: ["Kavrulmuş Kuruyemişler", "Soslu Kuruyemişler", "Kuru Meyveler", "Perakende Paketler"],
    }
  },
  {
    slug: "cerezshop",
    logo: "/images/logos/brands/cerezshop-logo.avif",
    banner: "/images/products-detail.jpg",
    website: "https://cerezshop.com",
    en: {
      name: "Cerezshop",
      category: "Nuts, Freeze-Dried Fruits & Snacks",
      headline: "Consumer snack variety across nuts, fruits, coated products, and daily treats.",
      description: "Cerezshop is HHY Group's consumer snack brand for nuts, freeze-dried fruits, dried fruits, chocolate-coated snacks, private label snack ranges, and retail-ready everyday products.",
      about: "Cerezshop brings HHY Group's snack expertise into a consumer-facing range of nuts, freeze-dried fruits, dried fruits, chocolate-coated products, and everyday snack selections. The brand is built for variety, convenience, private label snack development, and reliable retail supply across both traditional nut categories and modern snack formats.",
      content: [
        "Cerezshop brings together classic nut categories and modern snack products under one consumer-facing brand. It is suitable for markets that need variety, practical pack sizes, attractive retail presentation, and product lines that can move across online, supermarket, specialty snack, and distributor channels.",
        "For private label and OEM snack projects, Cerezshop shows how HHY Group can combine nuts, dried fruits, freeze-dried fruits, chocolate-coated snacks, and mixed snack concepts in retail-ready packaging. The brand direction is useful for buyers looking for flexible snack product development rather than a single narrow category.",
        "Cerezshop can support product concepts around raw nuts, roasted nuts, premium dried fruit selections, freeze-dried fruit snacks, chocolate-coated nuts, mixed snack pouches, giftable packs, and everyday consumer formats. Product ranges can be adapted for local taste preferences, packaging formats, and export requirements.",
      ],
      capabilities: ["Nuts", "Freeze-dried fruits", "Dried fruits", "Coated snacks"],
    },
    tr: {
      name: "Çerezshop",
      category: "Kuruyemiş, Freeze-Dried Meyveler ve Atıştırmalıklar",
      headline: "Kuruyemiş, meyve, kaplamalı ürünler ve günlük ikramlarda tüketici atıştırmalık çeşitliliği.",
      description: "Çerezshop; kuruyemişler, freeze-dried (dondurularak kurutulmuş) meyveler, kuru meyveler, çikolata kaplı atıştırmalıklar, private label atıştırmalık serileri ve rafa hazır günlük ürünler için HHY Group'un tüketici atıştırmalık markasıdır.",
      about: "Çerezshop, HHY Group'un atıştırmalık uzmanlığını; kuruyemişler, freeze-dried meyveler, kuru meyveler, çikolata kaplı ürünler ve günlük atıştırmalık seçeneklerinden oluşan tüketici odaklı bir ürün yelpazesine taşır. Marka; çeşitlilik, kolaylık, private label atıştırmalık geliştirme ve hem geleneksel kuruyemiş kategorilerinde hem de modern atıştırmalık formatlarında güvenilir perakende tedariki için inşa edilmiştir.",
      content: [
        "Çerezshop, klasik kuruyemiş kategorilerini ve modern atıştırmalık ürünlerini tüketici odaklı tek bir marka altında birleştirir. Çeşitliliğe, pratik paket boyutlarına, çekici perakende sunumuna ve çevrimiçi, süpermarket, özel atıştırmalık ve distribütör kanallarında hareket edebilen ürün gruplarına ihtiyaç duyan pazarlar için uygundur.",
        "Private label ve OEM atıştırmalık projeleri için Çerezshop; HHY Group'un kuruyemişleri, kuru meyveleri, freeze-dried meyveleri, çikolata kaplı atıştırmalıkları ve karışık atıştırmalık konseptlerini perakendeye hazır paketlemede nasıl birleştirebileceğini gösterir. Marka yönü, tek bir dar kategori yerine esnek atıştırmalık ürün geliştirme arayan alıcılar için faydalıdır.",
        "Çerezshop; çiğ kuruyemişler, kavrulmuş kuruyemişler, premium kuru meyve seçenekleri, freeze-dried meyve atıştırmalıkları, çikolata kaplı kuruyemişler, karışık atıştırmalık poşetleri, hediyelik paketler ve günlük tüketici formatları etrafındaki ürün konseptlerini destekleyebilir.",
      ],
      capabilities: ["Kuruyemişler", "Freeze-dried Meyveler", "Kuru Meyveler", "Kaplamalı Atıştırmalıklar"],
    }
  },
];

export function getBrandBySlug(slug: string) {
  return BRANDS.find((brand) => brand.slug === slug);
}
