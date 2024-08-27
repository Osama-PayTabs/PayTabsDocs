import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/core/lib/client/exports/Link";

export default function Layout_1_3_SetupActivateUpgradeIntegrationMethod({section, ShopifyCase}) {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div>
            <p>{siteConfig.title} provides you with a collection of API endpoints which used to process all payments, regardless of if they are through either your own payment pages, the managed payment pages, or if you are using the hosted payment pages.</p>
            <p>In this article, we walk you through the basics you need to set up the environment to integrate with our APIs. Since we are handling API requests only, all that you need to start integrating is any API client platform to manage your requests, and you will be ready to go.</p>
            <p>As all requests are made using server-to-server calls with JSON format data. All of the requests MUST NOT be used through a browser. Hence, all you need is to use any HTTP client agent that you prefer, such as <Link to={'https://curl.se/'}>cURL</Link>, <Link to={'https://www.postman.com/'}>Postman</Link>, Rest client, or any other suitable HTTP client agent.</p>
        </div>
    );
}