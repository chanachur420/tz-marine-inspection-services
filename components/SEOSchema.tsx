export default function SEOSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TZ Marine Inspection Services",
    image: [
      "https://tz-marine-inspection-services.netlify.app/images/container-ship-port.jpg"
    ],
    "@id": "https://tz-marine-inspection-services.netlify.app/#localbusiness",
    url: "https://tz-marine-inspection-services.netlify.app/",
    telephone: "+880-XXX-XXXXXXX",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Port Area",
      addressLocality: "Chattogram",
      postalCode: "4000",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3569,
      longitude: 91.7832,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
        ],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
      },
    ],
    servesCuisine: "Marine Surveying Services",
    areaServed: [
      {
        "@type": "Place",
        name: "Chattogram Seaport",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chattogram",
          addressCountry: "BD",
        },
      },
      {
        "@type": "Place",
        name: "Mongla Seaport",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mongla",
          addressCountry: "BD",
        },
      },
      {
        "@type": "Place",
        name: "Payra Seaport",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Payra",
          addressCountry: "BD",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TZ Marine Inspection Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Draft Survey",
          description: "Precise measurement of vessel's displacement and cargo weight",
        },
        {
          "@type": "Offer",
          name: "Bunker Inspection",
          description: "Quality and quantity verification of marine fuels",
        },
        {
          "@type": "Offer",
          name: "Container Survey",
          description: "Condition assessment of cargo containers",
        },
        {
          "@type": "Offer",
          name: "Hull Damage Assessment",
          description: "Inspection and reporting of vessel hull conditions",
        },
        {
          "@type": "Offer",
          name: "Pilotage Support",
          description: "Navigation assistance in port approaches",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessSchema, null, 2),
      }}
    />
  );
}