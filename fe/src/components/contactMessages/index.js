import { useEffect, useState } from "react";
import ContactMessagesUI from "./ContactMessagesUI";
import axios from "axios";

const ContactMessages = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8081/contact?page=${page}`)
      .then((response) => {
        setData(response.data.data.messages);
        console.log(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);
  const pageIncrement = () => {
    setPage(page + 1);
  };

  const pageDecrement = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <ContactMessagesUI
      page={page}
      pageIncrement={pageIncrement}
      pageDecrement={pageDecrement}
      data={data}
      loading={loading}
    />
  );
};

export default ContactMessages;
