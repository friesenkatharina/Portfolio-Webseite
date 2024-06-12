document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceId = "service_i2pt7ql";
    const templateId = "template_lhcwv5e";
    const publicKey = "Hexgh2WaL894SwgtW";

    emailjs.init(publicKey);

    emailjs.sendForm(serviceId, templateId, this).then(
      function () {
        console.log("Email successfully sent!");
        alert("Message sent!");
        form.reset(); // Reset form after submission
      },
      function (error) {
        console.error("Failed to send email:", error);
        alert("Something went wrong, please try again later.");
      }
    );
  });
});
