// @ts-ignore
import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  reactExtension,
  BlockStack,
  InlineLayout,
  useTotalAmount,
  useSettings,
  Banner,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {

  const [currentProgress, setCurrentProgress] = useState("0%");
  const [gapBar, setGapBar] = useState("100%");
  const { target_amount } = useSettings();
  // const target_amount = "19950";
  const [showInfoBanner, setShowInfoBanner] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const { amount, currencyCode } = useTotalAmount();
  console.log(currentProgress, amount, target_amount);
  // Calculate the percentage completion
  // @ts-ignore
  const percentageCompletion = (amount / parseInt(target_amount)) * 100;

  // Update the currentProgress state when the amount or target_amount changes
  useEffect(() => {
    // Ensure that the percentage is between 0% and 100%
    const clampedPercentage = Math.min(Math.max(0, percentageCompletion), 100);
    console.log(100 - clampedPercentage, "clampedPercentage");
    const gapPercent = 100 - clampedPercentage;
    // Update currentProgress as a string with '%' symbol
    setCurrentProgress(`${clampedPercentage.toFixed(0)}%`);
    setGapBar(`${gapPercent.toFixed(0)}%`)
    // Check if the progress is 100% or greater and show the success banner
    if (clampedPercentage >= 100) {
      setShowSuccessBanner(true);
      setShowInfoBanner(false); // Hide the info banner
    } else {
      setShowSuccessBanner(false); // Hide the success banner
      setShowInfoBanner(true); // Show the info banner
    }
  }, [amount, target_amount]);
  console.log("************", currentProgress);

  // @ts-ignore
  const amountNeeded = Math.ceil(parseInt(target_amount) - amount);
  return (
    <>
    <BlockStack>
      <InlineLayout blockAlignment="center" columns={[
        // @ts-ignore
        currentProgress, gapBar]} minBlockSize="100%">
        <View display="block" padding={["base", "none", "base", "none"]} border="none">
          <Image cornerRadius="base" source="https://cdn.shopify.com/s/files/1/0821/7886/7497/files/green-progress-bar.png?v=1694263966" />
        </View>
        <View display="block" padding={["base", "base", "base", "none"]} border="none">
          <Image cornerRadius={["none", "base", "base", "none"]} fit="cover" source="https://cdn.shopify.com/s/files/1/0821/7886/7497/files/Frame_1_1.png?v=1694264278" />
        </View> 
        <View>
          {currentProgress}
        </View>
      </InlineLayout>
      </BlockStack>
      {showSuccessBanner && (
        <Banner
          status="success"
          title="Free shipping unlocked"
        />
      )}
      {showInfoBanner && (
        <Banner
          status="info"
          title={`Add ${amountNeeded} ${currencyCode} to unlock free shipping`}
        />
      )}
    </>

  );
}