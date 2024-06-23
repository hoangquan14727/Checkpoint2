const form = document.querySelector(".form-container");

emailjs.init({
  publicKey: "LKNZnlH75-QcwaSwJ",
});

function getParams() {
  const userName = document.querySelector("#user_name").value;
  const userEmail = document.querySelector("#user_email").value;
  const userPhone = document.querySelector("#user_phone").value;
  const userAddress = document.querySelector("#user_address").value;
  const userMessage = document.querySelector("#user_message").value;

  const orderId = Math.random().toString(16).slice(2);

  const currentDate = new Date();
  const orderDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getMinutes()}`;

  return {
    order_id: orderId,
    order_date: orderDate,
    order_items: "Áo thun",
    user_name: userName,
    user_email: userEmail,
    user_phone: userPhone,
    user_address: userAddress,
    user_message: userMessage,
    payment_method: "Credit card",
    total: "10$",
  };
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const params = getParams();
  emailjs.send("service_adfxi7q", "template_prsve95", params).then(
    () => {
      window.location.href = "./order-confirmed.html";
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});
