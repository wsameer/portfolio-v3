import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'assets/thumbnail/thumbnail.png';
import {
  url,
  defaultDescription,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'data/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.state}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
      "${socialLinks.github}",
      "${socialLinks.linkedin}",
      "${socialLinks.instagram}",
      "${socialLinks.youtube}",
      "${socialLinks.google}"
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />

      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.google} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
