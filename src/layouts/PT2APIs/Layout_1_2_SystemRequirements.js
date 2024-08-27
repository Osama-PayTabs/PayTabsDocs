import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/core/lib/client/exports/Link";
import urls from "@site/src/URLs/urls.json";

export default function Layout_1_2_SystemRequirements({section, ShopifyCase}) {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div>
            <p>{siteConfig.title} provides you with a collection of API endpoints which used to process all payments, regardless of if they are through either your own payment pages, the managed payment pages, or if you are using the hosted payment pages.</p>
            <p>Since you're using {siteConfig.title} API endpoints, most of the logic is handled by the {siteConfig.title} since it's the endpoints' provider, so to start integrating our PT2 API endpoints smoothly with your system, the ONLY requirement is to have a <Link to={urls['paytabs_site']['link']} > {siteConfig.title} </Link>merchant account relative to your country.</p>
        </div>
    );
}