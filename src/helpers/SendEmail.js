const sendEmail = async (data) => {
  console.log(JSON.stringify(data));
  fetch("https://lsdsoftware.io/ifuture/php/sendEmail.php", {
    method: "POST", // or 'PUT'
    mode:'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(response => response.text())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

export default sendEmail;
