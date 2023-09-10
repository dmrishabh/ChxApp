import React, { useState, useCallback } from "react";
import { json } from "@remix-run/node";
import { useLoaderData, Link, useNavigate } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import { Tabs, LegacyCard, Card, Layout, Page } from "@shopify/polaris";
import IntroCard from "../shared/components/IntroCard";
import SupportFooter from "../shared/components/SupportFooter";
import {
  CouponBlockVideo,
  PaymentReorderBlockVideo,
  BannerBlockVideo,
  FreebieDiscount,
  PrepaidDiscount,
  DiscountBlocker,
} from "../shared/assets";
import "../shared/styles/CustomStyles.css";

const FUNCTION_ID_PREPAID_DISCOUNT = "1864d648-b879-4e3a-9116-0c4d1a8f0203";
const FUNCTION_ID_FREEBIE_DISCOUNT = "64f8d556-703b-42bb-9759-9f2b29f29580";
const prePaidDiscountPath =
  "/prepaid-discount/" + FUNCTION_ID_PREPAID_DISCOUNT + "/new";
const freebieDiscountPath =
  "/freebie-product/" + FUNCTION_ID_FREEBIE_DISCOUNT + "/new";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    [],
  );
  const tabs = [
    {
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Sales',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'accepts-marketing-1',
      content: 'Content',
      panelID: 'accepts-marketing-content-2',
    },
    {
      id: 'repeat-customers-1',
      content: 'Form fields',
      panelID: 'repeat-customers-content-1',
    },
    {
      id: 'prospects-1',
      content: 'Utility',
      panelID: 'prospects-content-1',
    },
    {
      id: 'prospects-1',
      content: 'Functions',
      panelID: 'prospects-content-2',
    },
  ];
  return (
    <Page>
      <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
        <LegacyCard.Section title={tabs[selectedTab].content}>
          <p>Tab {selectedTab} selected</p>
        </LegacyCard.Section>
      </Tabs>
      <Layout>
        <Layout.Section oneThird>
          <IntroCard
            title="Single Click Discounts"
            description="Show discount coupons from the Shopify coupons list to be directly applied on the checkout page."
            videoSource={CouponBlockVideo}
            buttonText="Configure coupon"
            path="/app/couponcode"
          />
        </Layout.Section>

        <Layout.Section oneThird>
          <IntroCard
            title="Checkout Banners"
            description="Apply multiple promotional banners across different checkout stages to enhance customer experience."
            videoSource={BannerBlockVideo}
            buttonText="Know more"
            path="/app/checkoutbanner"
          />
        </Layout.Section>
        {/* 
        <Layout.Section oneThird>
          <IntroCard
            title="Payment Gateway Reorder"
            description="Provides flexibility by enabling merchants to rearrange the sequence of payment gateways"
            buttonText="Rearrange now"
            videoSource={PaymentReorderBlockVideo}
            path="/payment-reorder"
          />
        </Layout.Section>

        <Layout.Section oneThird>
          <IntroCard
            title="Product discount blocker"
            description="Remove discounts from the cart if non-discountable products are present. Works only on discount coupons."
            buttonText="Know more"
            imageSource={DiscountBlocker}
            path="/productDiscountBlocker"
          />
        </Layout.Section>
        <Layout.Section oneThird>
          <IntroCard
            title="Prepaid discount"
            description="Treat your customers with exclusive discounts as a reward for every online payment purchase."
            buttonText="Configure discount"
            imageSource={PrepaidDiscount}
            path={prePaidDiscountPath}
          />
        </Layout.Section>
        <Layout.Section oneThird>
          <IntroCard
            title="Add a free gift to a product."
            description="Elevate your shopping experience with the ability to effortlessly add a complimentary gift to your purchase."
            buttonText="Create freebie"
            imageSource={FreebieDiscount}
            path={freebieDiscountPath}
          />
        </Layout.Section> */}
      </Layout>
      <SupportFooter />
    </Page>
  );
}
