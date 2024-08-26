import React from 'react';

import MainParagraph from '@site/src/components/MainParagraph';
import PT2APITopParagraph from '@site/src/components/PT2APITopParagraph';
import urls from "@site/src/URLs/urls.json";
import Link from "@docusaurus/Link";
import Admonition from '@theme/Admonition';
export default function Layout_7_ManageTransactions({section, ShopifyCase}) {

    return (
        <div>
            <MainParagraph />
            <hr/>
            <PT2APITopParagraph section={section} />
            This article is dedicated to walking you through how to manage/control the already existing transactions (as
            a result of all of the previous steps) and what are the available actions to perform on them
            through {section} integration type as shown below:
            <br/><br/>
            <Admonition type="warning">
                Through out the article we will use the transaction types clarified in our <Link
                to={urls['What_tran_type']['link']}>{urls['What_tran_type']['title']}</Link> solution article.
            </Admonition>

            {ShopifyCase === undefined ? '' :
            <Admonition type="warning">
                Note that all of the follow-up transactions for Our Shopify Plugin MUST be done through your Shopify
                admin panel, attempting to perform any follow-up transactions through our APIs upon any Shopify
                transaction will be declined.
            </Admonition>
            }

        </div>
    );
}