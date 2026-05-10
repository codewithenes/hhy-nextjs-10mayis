interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HHY Group",
  alternateName: "HHY Group A.Ş.",
  url: "https://hhygroup.com",
  logo: "https://hhygroup.com/images/hhy-logo-w.png",
  description: "HHY Group is a vertically integrated food manufacturer based in Türkiye, specializing in private label chocolate, nuts, protein bars, and snack production for global B2B partners.",
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    streetAddress: "106th Street No: 24, Saray District",
    addressLocality: "Kahramankazan",
    addressRegion: "Ankara",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-539-231-1271",
    contactType: "sales",
    email: "merhaba@hhygroup.com",
    availableLanguage: ["English", "Turkish"],
  },
  sameAs: [
    "https://www.facebook.com/people/HHY-GROUP/100089685473504/",
    "https://tr.linkedin.com/company/hhy-group-ofc",
    "https://www.instagram.com/hhygrouptr/",
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HHY Group",
  image: "https://hhygroup.com/images/hhy-group-building.png",
  "@id": "https://hhygroup.com",
  url: "https://hhygroup.com",
  telephone: "+90-539-231-1271",
  address: {
    "@type": "PostalAddress",
    streetAddress: "106th Street No: 24, Saray District",
    addressLocality: "Kahramankazan",
    addressRegion: "Ankara",
    postalCode: "06980",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "22:00",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HHY Group",
  url: "https://hhygroup.com",
  description: "Global private label food manufacturer — chocolate, nuts, protein bars, snack production.",
  publisher: {
    "@type": "Organization",
    name: "HHY Group",
  },
};

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const privateLabelServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Label & OEM Food Manufacturing",
  provider: {
    "@type": "Organization",
    name: "HHY Group",
  },
  description: "End-to-end private label food manufacturing: chocolate, nuts, protein bars, snack products. BRC, ISO, HACCP certified. From concept to shelf-ready delivery.",
  areaServed: "Worldwide",
  serviceType: "Private Label Manufacturing",
};

export function createArticleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    author: {
      "@type": "Organization",
      name: "HHY Group",
    },
    publisher: {
      "@type": "Organization",
      name: "HHY Group",
      logo: {
        "@type": "ImageObject",
        url: "https://hhygroup.com/images/hhy-logo-w.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
