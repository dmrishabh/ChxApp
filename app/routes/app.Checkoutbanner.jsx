import {
  Button,
  Card,
  Page,
  Layout,
  Icon,
  Link,
  VerticalStack,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import SupportFooter from "../shared/components/SupportFooter";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import customStyles from "../shared/styles/CustomStyles.css";
export function links() {
  return [{ rel: "stylesheet", href: customStyles }];
}

// import { Redirect } from "@shopify/app-bridge/actions";
// import { useAppBridge } from "@shopify/app-bridge-react";

// A utility hook for redirecting back to the checkout theme customizer
// function useRedirectToCustomizations() {
//   const app = useAppBridge();
//   const redirect = Redirect.create(app);
//   return () => {
//     redirect.dispatch(Redirect.Action.ADMIN_PATH, {
//       path: "/settings/checkout/editor?extensionPicker=true",
//     });
//   };
// }

export default function Checkoutbanner() {
  return (
    <Page
      backAction={{ content: "Products", url: "/app" }}
      title="Checkout Banner Instructions"
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <img
              src="https://cdn.shopify.com/s/files/1/0660/6657/9705/files/ezgif.com-optimize.gif?v=1681996230"
              alt="demo_gify"
            />
          </Card>
        </Layout.Section>

        <Layout.Section secondary>
          <Card title="Complete the following steps" sectioned>
            <VerticalStack>
              <p>
                <strong> Step 1:</strong> Click on{" "}
                <em>Go to checkout editor</em>
              </p>
              <p>
                <strong> Step 3:</strong> Select Checkout Banner
              </p>
              <p>
                <strong> Step 4:</strong> Add data in all required fields
              </p>
              <p>
                <strong>Note:</strong> We can have different banner for all of
                checkout steps as <em>Information page</em>,{" "}
                <em>Shipping page</em> and <em>Payment page</em>.
              </p>
              <p></p>
            </VerticalStack>
            <Button
              onClick={() => {
                console.log("====================================");
                console.log("HI");
                console.log("====================================");
              }}
              plain
            >
              <div className="flex">
                <Icon source={CirclePlusMinor} />
                Open checkout editor
              </div>
            </Button>
          </Card>
        </Layout.Section> 
      </Layout>
      <SupportFooter />
    </Page>
  );
}
