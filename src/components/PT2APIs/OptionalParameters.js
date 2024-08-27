import React from 'react';

import CodeBlock from "../../theme/CodeBlock";
import Highlight from "@site/src/components/Highlight";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import urls from "@site/src/URLs/urls.json";
import Link from "@docusaurus/core/lib/client/exports/Link";
export default function OptionalParameters() {
    return (
        <table className="three-row">
            <tr>
                <th>Parameter</th>
                <th>Data Type</th>
                <th>Min</th>
                <th>Max</th>
                <th>Required</th>
            </tr>
            <tr>
                <td rowSpan="3"><CodeBlock>return</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>255 Characters (Valid URL)</td>
                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>The return URL is the URL that PayTabs will redirect the customer to after he finishes the payment process (whether it's authenticated or not). It will redirect the customer with a POST response that is sent with the client/cardholder redirection through his browser containing the basic transaction information once the payment process ends (whether the customer cancels, paid, or failed to pay). It depends on the customer's actions, which means if the customer closes the browser right after the payment without waiting to be redirected back to your system, you will not receive this response.<br/> <Link
                        to={urls['Return_URL_vs_Callback_URL']['link']}>{urls['Return_URL_vs_Callback_URL']['title']}</Link> <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "return": "https://example.com/order/10001"
}`}
                    </CodeBlock>
                </td>
            </tr>
            <tr>
                <td rowSpan="3"><CodeBlock>callback</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>255 Characters (Valid URL)</td>
                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>The callback response is a server-to-server POST response that is sent (to a pre-defined HTTPS URL) with the full detailed transaction information once the payment process has ended (whether the customer cancels, paid, or failed to pay). It does not depend on the customer's actions; the response will be sent anyway. <Link
                        to={urls['Return_URL_vs_Callback_URL']['link']}>{urls['Return_URL_vs_Callback_URL']['title']}</Link> <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "callback": "https://www.example.com/notifications"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>hide_shipping</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="BOOLEAN" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates whether to hide shipping and billing information or not from the payment page. <br/>Note: The customer details are still required and must be passed in case any of the details are missing or passed with invalid values; the hide_shipping option will be ignored, and the cardholder will be required to enter any of the missing details on the payment page. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.  </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "hide_shipping": true
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>customer_details</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="Object" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates the customer details for this payment. If provided, the payment page will be prefilled with the provided data.  <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.  </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "customer_details": {
        "name": "first last",
        "email": "email@domain.com",
        "phone": "0522222222",
        "street1": "address street",
        "city": "dubai",
        "state": "du",
        "country": "AE",
        "zip": "12345"
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>shipping_details</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="Object" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates the shipping details for this payment. If provided, the payment page will be prefilled with the provided data. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "name": "first last",
        "email": "email@domain.com",
        "phone": "0522222222",
        "street1": "address street",
        "city": "dubai",
        "state": "du",
        "country": "AE",
        "zip": "12345"
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.name
shipping_details.name`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>3</center>
                </td>
                <td>
                    <center>128</center>
                </td>
                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "name": "first last",
    },
    "customer_details": {
        "name": "first last",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.email  
shipping_details.email`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    <center>Valid email format</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "email": "email@domain.com",
    },
    "customer_details": {
        "email": "email@domain.com",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.phone  
shipping_details.phone `}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    <center>Valid number + country code prefix</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "phone": "0522222222",
    },
    "customer_details": {
        "phone": "0522222222",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.street1  
shipping_details.street1`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>3</center>
                </td>
                <td>
                    <center>128</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "street1": "address street",
    },
    "customer_details": {
        "street1": "address street",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.city  
shipping_details.city`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>3</center>
                </td>
                <td>
                    <center>128</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "city": "Riyadh",
    },
    "customer_details": {
        "city": "Riyadh",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.state  
shipping_details.state`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>2</center>
                </td>
                <td>
                    <center>2</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "state": "SA",
    },
    "customer_details": {
        "state": "SA",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.country  
shipping_details.country`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    <center>ISO 3166-1 alpha-2 codes (two-letter country codes)</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "country": "SA",
    },
    "customer_details": {
        "country": "SA",
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`customer_details.zip  
shipping_details.zip`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    <center>Valid zip code</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "shipping_details": {
        "zip": "12345"
    },
    "customer_details": {
        "zip": "12345"
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>framed</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="BOOLEAN" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates whether to preview the payment page within the current check page instead of redirection or not. <br></br>If ✔, preview the redirect URL sent in the response in {'<iframe>'} HTML tag, which will preview the whole payment page within this frame. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "framed":true
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>framed_return_top</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="BOOLEAN" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates whether to reload the whole page on redirections or just reload the current frame. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "framed_return_top": true
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>framed_return_parent</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="BOOLEAN" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates whether to reload the main base (could be div or another iFrame tag) that contained the payment page framed element. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "framed_return_parent": true
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>paypage_lang</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    <center>Either <code>en</code> or <code>ar</code></center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Indicates the payment page displaying language. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "paypage_lang": "en"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>user_defined</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="Object" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>For more customizations, you can pass to the Transaction API request your own "user-defined fields" up to 9 fields, and accordingly, you would receive those fields in the callback response. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "user_defined": {
        "udf1": "UDF1 Test",
        "udf2": "UDF2 Test",
        "udf3": "UDF3 Test",
        "udf4": "UDF4 Test",
        "udf5": "UDF5 Test",
        "udf6": "UDF6 Test",
        "udf7": "UDF7 Test",
        "udf8": "UDF8 Test",
        "udf9": "UDF9 Test"
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>user_defined.udf1</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>1</center>
                </td>
                <td>
                    <center>255</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">

                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "user_defined": {
        "udf1": "UDF1 Test"
    }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>card_discounts</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="Array of objects"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>To provide discounts for specific customers.<Link
                        to={'#'}>Transactions With Card Discounts</Link> <br/>To know more about this parameter
                    please <Link to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "card_discounts":[
        {
            "discount_cards":"41111,520000",
            "discount_amount": "30.00",
            "discount_title": "30.00 SAR discount on 
                cards starts with 41111, 520000"
        },
        {
            .....
        }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`card_discounts.
[].discount_cards`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>provide a comma-separated list of card prefixes (usually first 6, can be up to first 11)  <br/>To know more about this parameter
                    please <Link to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "card_discounts":[
        {
            "discount_cards":"41111,520000"
        }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`card_discounts.
[].discount_amount`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="DECIMAL"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>0.01</center>
                </td>
                <td>
                    <center>9999999999.99</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>The actual discount should be deducted from the cart_amount. <br/>To know more about this parameter
                    please <Link to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "card_discounts":[
        {
            "discount_amount": "30.00",
        }
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>{`card_discounts.
[].discount_title`}</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>Description of the discount that will be displayed for the customer on the hosted payment page. <br/>To know more about this parameter
                    please <Link to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "card_discounts":[
        {
            "discount_title": "30.00 SAR discount
                on cards starts with 41111, 520000"
        }
}`}
                    </CodeBlock>
                </td>
            </tr>

            <tr>
                <td rowSpan="3"><CodeBlock>card_filter</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>To know more about this parameter please <Link to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "card_filter": "41111,400000,5200000,549838"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>card_filter_title</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>To know more about this parameter please <Link to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "card_filter_title": "Only accept cards start with 41111,400000"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>tokenise</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    Pass one of the following list:
                    <br/>2 => <code>Hex32</code>
                    <br/>3 => <code>AlphaNum20</code>
                    <br/>4 => <code>Digit22</code>
                    <br/>5 => <code>Digit16</code>
                    <br/>6 => <code>AlphaNum32</code>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>The tokenization format the generated token should follow. <Link to={'#'}>Token Based Transactions (Recurring)</Link>.<br/> To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "tokenise": 2,
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>show_save_card</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="BOOLEAN"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>For showing the “save this card” option on the payment page.<br/> To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "show_save_card": 1
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_min</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="DECIMAL"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>0.01</center>
                </td>
                <td>
                    <center>9999999999.99</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span><br/> To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "cart_min":5
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_max</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="DECIMAL"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>0.01</center>
                </td>
                <td>
                    <center>9999999999.99</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span><br/> To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'}>
                        {`{
    "cart_max":500
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>payment_methods</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2">
                    Pass one or more of the following list: <code>"creditcard"</code> <code>"amex"</code>
                    <code>"mada"</code> <code>"urpay"</code> <code>"unionpay"</code> <code>"stcpay"</code>
                    <code>"valu"</code> <code>"aman"</code> <code>"meezaqr"</code> <code>"omannet"</code>
                    <code>"knet"</code> <code>"knetdebit"</code> <code>"knetcredit</code> <code>"applepay"</code>
                    <code>"samsungpay"</code>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span><br/>To initiate the payment page with one or more specific payment methods, which should be configured first in your profile. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "payment_methods": [
        "applepay",
        "valu",
        "creditcard",
        "-meeza"
        ]

}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_max</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="DECIMAL"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>0.01</center>
                </td>
                <td>
                    <center>9999999999.99</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span><br/> To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "cart_max":500
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>token</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span><br/>Valid token. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "token": "2C4652BD67A3EF30C6B390F9668175B9"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>tran_ref</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING"
                                                             color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>-</center>
                </td>
                <td>
                    <center>-</center>
                </td>

                <td style={{color: 'rgb(173 14 14)', textAlign: 'center'}}>❌</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span><br/>Valid transaction reference. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.
                </span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock language={'json'} >
                        {`{
    "tran_ref": "TST2234701408580"
}`}
                    </CodeBlock>
                </td>
            </tr>
        </table>
    )
        ;
}