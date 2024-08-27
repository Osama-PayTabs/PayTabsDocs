import React from 'react';

import Admonition from '@theme/Admonition';
import CodeBlock from "../../theme/CodeBlock";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import urls from "@site/src/URLs/urls.json";
import Link from "@docusaurus/core/lib/client/exports/Link";
export default function RegionCautionNote() {
    return (
        <Admonition type="caution">
        <br/>
            <p>Please note that not using the proper endpoint URI {'{'}domain{'}'} will lead to authentication issues within your responses. To find the your proper domain you can read our <Link to={urls['what_is_my_region']['link']}>{urls['what_is_my_region']['title']}</Link> solution article.</p>
    <Tabs>
        <TabItem value="KSA" label="KSA" default>
            <CodeBlock>
                https://secure.paytabs.sa/payment/request
            </CodeBlock>
        </TabItem>
        <TabItem value="UAE" label="UAE">
            <CodeBlock>
                https://secure.paytabs.com/payment/request
            </CodeBlock>
        </TabItem>
        <TabItem value="Egypt" label="Egypt" >
            <CodeBlock>
                https://secure-egypt.paytabs.com/payment/request
            </CodeBlock>
        </TabItem>
        <TabItem value="Oman" label="Oman" >
            <CodeBlock>
                https://secure-oman.paytabs.com/payment/request
            </CodeBlock>
        </TabItem>
        <TabItem value="Jordan" label="Jordan" >
            <CodeBlock>
                https://secure-jordan.paytabs.com/payment/request
            </CodeBlock>
        </TabItem>
        <TabItem value="Global" label="Global" >
            <CodeBlock>
            https://secure-global.paytabs.com/payment/request
            </CodeBlock>
        </TabItem>
    </Tabs>
        </Admonition>
  );
}