import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Page,
  Layout,
  EmptyState,
  MediaCard,
  IndexTable,
  Badge,
  Link,
  SkeletonPage,
  SkeletonBodyText,
  Pagination,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import SupportFooter from "../shared/components/SupportFooter";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import customStyles from "../shared/styles/CustomStyles.css";
import { CouponCodeEmpty, CouponCodeEmptyMobile } from "../shared/assets";

export function links() {
  return [{ rel: "stylesheet", href: customStyles }];
}

export default function CouponCode() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const onActionHandler = () => {
    navigate("/app/createcoupon");
  }; 
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Page
      backAction={{ content: "App home", url: "/app" }}
      title="Single click discount coupons"
      subtitle="Show discount coupons from the Shopify coupons list to be directly applied on the checkout page"
      compactTitle
      primaryAction={
        <Button primary onClick={onActionHandler}>
          Create coupon
        </Button> 
      }
    >
      <Card>
        <div className="desktop-image">
          <img
            alt="Desktop empty state"
            width="100%"
            height="100%"
            style={{
              objectPosition: "center",
            }}
            src={CouponCodeEmpty}
          />
        </div>
      </Card>
      <SupportFooter />
    </Page>
  );
}
