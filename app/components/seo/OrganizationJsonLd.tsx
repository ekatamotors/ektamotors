const SITE_URL = "https://www.ekatamotors.com";

export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ekata Motors",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/organization-logo.png`,
    email: "sales@ekatamotors.com",
    telephone: "+977-970-5322342",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
