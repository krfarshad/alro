import { Text } from "@/components";
import { useState } from "react";

const NewsletterForm = () => {
  const [submited, setSubmited] = useState<boolean>(false);
  const handleSubmit = () => {
    setSubmited(true);
  };

  return (
    <>
      {submited ? (
        <Text className="!text-white bg-green-700 rounded-sm text-center">
          Thank you for subscribing to our newsletter! You will receive a
          confirmation email shortly. Please click the confirmation link to
          complete the subscription process.
        </Text>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-center md:justify-end"
        >
          <input
            type="email"
            placeholder="Enter your email address..."
            className="shadow-sm text-sm w-[70%] outline-none shadow-slate-300 placeholder:text-gray-400 font-light p-2 rounded-l-sm"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="w-20 text-white text-sm border border-primary bg-primary  shadow-slate-300  rounded-r-sm p-2 font-light"
          />
        </form>
      )}
    </>
  );
};

export default NewsletterForm;
