import React, { useEffect, useState, useCallback } from "react";
import {
  Button,
  Card,
  Page,
  Autocomplete,
  Icon,
  Form,
  FormLayout,
  TextField,
  Checkbox,
  LegacyStack,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import SupportFooter from "../shared/components/SupportFooter";
import { SearchMinor } from "@shopify/polaris-icons";
import customStyles from "../shared/styles/CustomStyles.css";
import { CouponCodeEmpty, CouponCodeEmptyMobile } from "../shared/assets";

export function links() {
  return [{ rel: "stylesheet", href: customStyles }];
}

export default function CreateCoupon() {
  const [topFiveCoupons, setTopFiveCoupons] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [couponActive, setCouponActive] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  // To make coupon Enabled or not
  const handleChange = useCallback(
    (newChecked) => setCouponActive(newChecked),
    []
  );

  // Handle Form submissions
  //   const handleSubmit = useCallback((event) => {

  //     event.preventDefault();
  //     setSaveLoading(true);

  //     const data = {
  //       "gid": id,
  //       "title": title,
  //       "subtitle": subtitle,
  //       "status": couponActive ? 'Active' : 'Deactivate'
  //     };

  //     // Make the fetch POST request
  //     fetch('/api/coupon/add', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         // Handle the response data
  //         setSaveLoading(false);
  //         navigate("/CouponCode")
  //       })
  //       .catch((error) => {
  //         // Handle any error that occurred during the request
  //         setSaveLoading(false);
  //         console.error('Error submitting form:', error);
  //       });

  //   }, [id, title, subtitle, couponActive]);

  const handleSubmit = () => {
    console.log("====================================");
    console.log("submit");
    console.log("====================================");
  };

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value === selectedItem;
        });
        return (
          matchedOption && {
            value: matchedOption.value,
            label: matchedOption.label,
            summery: matchedOption.summery,
            id: matchedOption.id,
          }
        );
      });

      setSelectedOptions(selected);
      setInputValue(selectedValue[0].value || "");

      // Updating the coupon value
      setID(selectedValue[0].id || "");
      setTitle(selectedValue[0].value || "");
      setSubtitle(selectedValue[0].summery || "");
    },
    [options]
  );
  const textField = (
    <Autocomplete.TextField
      //   onChange={updateText}
      label="Discount Coupon Code"
      value={inputValue}
      placeholder="Search within the coupons created on Shopify Dashboard."
      autoComplete="off"
      prefix={<Icon source={SearchMinor} />}
    />
  ); 

  return (
    <Page
      backAction={{ content: "Coupon list", url: "/app/couponcode" }}
      title="Create coupon"
    >
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <Card sectioned>
            <Autocomplete
              options={options}
              selected={selectedOptions}
              onSelect={updateSelection}
              textField={textField}
              loading={searchLoading}
            />
          </Card>
          <Card sectioned>
            <LegacyStack vertical spacing="loose" fill>
              <TextField
                value={title}
                // onChange={handleTitleChange}
                label="Discount Coupon Title"
                type="text"
                autoComplete="off"
                placeholder="FREE10"
                helpText={
                  <span>
                    You can create a coupon title to attract customers
                    attention.
                  </span>
                }
              />
              <TextField
                value={subtitle}
                // onChange={handleSubtitleChange}
                label="Discount Coupon Subtitle"
                type="text"
                autoComplete="off"
                placeholder="E.g. get flat 10% off"
                helpText={
                  <span>
                    You can add brief description for customer understanding.
                  </span>
                }
              />
              <Checkbox
                label="Coupon available for customer usage"
                helpText={
                  <span>
                    Clicking this will make the coupon visible for customers to
                    use.
                  </span>
                }
                checked={couponActive}
                // onChange={handleChange}
              />
            </LegacyStack>
          </Card>

          <div className="text-right">
            {" "}
            <Button primary submit loading={saveLoading}>
              Save
            </Button>
          </div>
        </FormLayout>
      </Form>
      <SupportFooter />
    </Page>
  );
}
