import { Link, FooterHelp } from "@shopify/polaris";

export default function SupportFooter() {
  return (
    <FooterHelp>
      For help reach us at{" "}
      <Link url="mailto:support@checkoutextension.com">
        support@checkoutextension.com
      </Link>
    </FooterHelp>
  );
}
