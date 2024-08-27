import React from 'react';

import CodeBlock from "../../theme/CodeBlock";
import Highlight from "@site/src/components/Highlight";
import urls from "@site/src/URLs/urls.json";
import Link from "@docusaurus/core/lib/client/exports/Link";
export default function RequiredParameters() {
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
                <td rowSpan="3"><CodeBlock>profile_id</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="INT" color="var(--ifm-color-primary-darkest)"/></td>
                <td colSpan="2">Accept only valid profile number</td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4">
                    <span>The merchant Profile ID you can get from your PayTabs dashboard. For more information please check our <Link
                        to={urls['how-to-find-mid']['link']}>{urls['how-to-find-mid']['title']}</Link> solution article.<br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
    "profile_id": 987654
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3">
                    <CodeBlock>tran_type</CodeBlock>
                </td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2"><p>Valid string from this enum list:</p> <code>sale</code> <code>auth</code>
                    <code>void</code> <code>release</code> <code>capture</code> <code>refund</code>
                    <code>register</code>
                </td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4" style={{verticalAlign: 'top'}}>
                    <span>the identification of the type of the transaction. To know more about these types please check our <Link
                        to={urls['What_tran_type']['link']}>{urls['What_tran_type']['title']}</Link> solution article.<br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
    "tran_type": "sale"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>tran_class</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colSpan="2"><p>Valid string from this list</p> <code>ecom</code> <code>recurring</code>
                    <code>moto</code>
                </td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4" style={{verticalAlign: 'top'}}>
                    <span>the identification of the category/class this transaction will follow, such as eCommerce, Recurring, etc. To know more about these types please check our <Link
                        to={urls['What_tran_class']['link']}>{urls['What_tran_class']['title']}</Link> solution article. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
     "tran_class": "ecom"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_id</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>1</center>
                </td>
                <td>
                    <center>64</center>
                </td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4" style={{verticalAlign: 'top'}}>
                    <span>Indicates the cart/order id at the merchant end to easily relate the transaction to. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
     "cart_id": "CART#10001"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_description</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>1</center>
                </td>
                <td>
                    <center>128</center>
                </td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4" style={{verticalAlign: 'top'}}>
                    <span>
Indicates the cart/order description at the merchant end to easily relate the transaction to. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
     "cart_description": "Description of the items/services"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_currency</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="STRING" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td colspan="2">
                    Valid string from the following list: <code>SAR</code> <code>AED</code> <code>BHD</code>
                    <code>EGP</code> <code>EUR</code> <code>GBP</code> <code>HKD</code> <code>IDR</code> <code>INR</code> <code>IQD</code> <code>JOD</code> <code>JPY</code> <code>KWD</code> <code>MAD</code> <code>OMR</code> <code>PKR</code> <code>QAR</code> <code>USD</code>
                    <br /> Accepts both upper- and lower-case characters


                </td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4" style={{verticalAlign: 'top'}}>
                    <span>
Indicates the transaction currency, which the customer will be charged with. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
     "cart_currency": "SAR"
}`}
                    </CodeBlock>
                </td>
            </tr>


            <tr>
                <td rowSpan="3"><CodeBlock>cart_amount</CodeBlock></td>
                <td style={{textAlign: 'center'}}><Highlight text="DECIMAL" color="var(--ifm-color-primary-darkest)"/>
                </td>
                <td>
                    <center>0.01</center>
                </td>
                <td>
                    <center>9999999999.99</center>
                </td>
                <td style={{color: 'var(--ifm-color-primary-darkest)', textAlign: 'center'}}>&#x2714;</td>
            </tr>
            <tr>
                <td colSpan="4" style={{verticalAlign: 'top'}}>
                    <span>Indicates the amount of the  transaction the customer is about to be charged Both min and max values are subjected to the merchant transaction limits. <br/>To know more about this parameter please <Link
                        to={'#'}>click here</Link>.</span>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                    <CodeBlock>
                        {`{
     "cart_amount": 500
}`}
                    </CodeBlock>
                </td>
            </tr>
        </table>
    );
}