import { Text, Title } from "@/components";
import { Row } from "../..";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <div className="-mt-20 mb-8 bg-white shadow-sm shadow-slate-500  p-2 rounded-sm">
      <Row className="items-center">
        <div className="p-2 w-full md:w-1/2 text-center md:text-left">
          <Title tag="h6">Newsletters</Title>
          <Text>Get latest news and discounts</Text>
        </div>
        <div className="p-2 w-full md:w-1/2">
          <NewsletterForm />
        </div>
      </Row>
    </div>
  );
};

export default Newsletter;
