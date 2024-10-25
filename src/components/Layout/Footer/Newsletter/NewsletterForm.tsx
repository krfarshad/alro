import { Text } from "@/components";
import { useState } from "react";

const NewsletterForm = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
      {submit ? (
        <Text className="!text-white bg-green-800 text-center p-4 rounded-md">
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
            className="shadow-sm text-sm w-[70%] outline-none shadow-slate-300 border border-gray-200 text-dark placeholder:text-gray-500 font-light p-2 rounded-l-sm"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="w-20 text-white text-sm border border-primary bg-primary  shadow-slate-300 hover:bg-amber-700 rounded-r-sm p-2 font-light cursor-pointer transition-all hover:transition-all"
          />
        </form>
      )}
    </>
  );
};

export default NewsletterForm;
