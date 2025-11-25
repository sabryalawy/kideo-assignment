const ContactMessagesUI = ({
  page,
  pageIncrement,
  pageDecrement,
  data,
  loading,
}) => {
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    return date.toLocaleString();
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                  }}
                >
                  Message
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                  }}
                >
                  Created At
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "left",
                  }}
                >
                  Updated At
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((message, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {message.name}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {message.email}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {message.message}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {formatDate(message.created_at)}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {formatDate(message.updated_at)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      border: "1px solid #ddd",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    No messages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={pageDecrement}
              style={{ padding: "8px 16px", cursor: "pointer" }}
            >
              Previous
            </button>
            <span style={{ padding: "8px 16px" }}>Page {page}</span>
            <button
              onClick={pageIncrement}
              style={{ padding: "8px 16px", cursor: "pointer" }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ContactMessagesUI;
