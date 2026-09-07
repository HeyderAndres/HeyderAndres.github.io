const email = "heiderarellano@outlook.com";
const form = document.querySelector("#form-email");

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  const name = encodeURIComponent(data.get("name") ?? "");
  const subject = encodeURIComponent(data.get("subject") ?? "");
  const message = encodeURIComponent(data.get("message") ?? "");
  const link = document.createElement("a");
  link.href = `mailto:${email}?subject=${name} : ${subject}&body=${message}`;
  link.click();
});
