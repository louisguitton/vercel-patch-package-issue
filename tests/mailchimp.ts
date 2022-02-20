import mailchimp from "@mailchimp/mailchimp_marketing";

const handler = async () => {
  const response = await mailchimp.lists.setListMember(
    "listId_03dsfe4",
    "userId_sdfsd",
    {
      email_address: "email@gmail.com",
      status_if_new: "pending",
    }
  );
};
