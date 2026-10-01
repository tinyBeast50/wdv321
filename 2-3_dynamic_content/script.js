const dynamicContent = document.getElementById("dynamicContent");


const reasonLabel = document.createElement("label");

reasonLabel.textContent = "Reason for Contact";
reasonLabel.setAttribute("for", "reasonSelect");

const reasonSelect = document.createElement("select");

reasonSelect.id = "reasonSelect";
reasonSelect.name = "reasonSelect";

const defaultOption = document.createElement("option");

defaultOption.value = "";
defaultOption.textContent = "Select a Reason";

const complaintOption = document.createElement("option");

complaintOption.value = "complaint";
complaintOption.textContent = "Complaint";

const technicalOption = document.createElement("option");

technicalOption.value = "technical";
technicalOption.textContent = "Technical Issues";

reasonSelect.add(defaultOption);
reasonSelect.add(complaintOption);
reasonSelect.add(technicalOption);


dynamicContent.add(reasonLabel);
dynamicContent.add(reasonSelect);

const contactHeading = document.createElement("h3");
contactHeading.textContent = "Preferred Contact Method";

dynamicContent.add(contactHeading);

const emailRadio = document.createElement("input");

emailRadio.type = "radio";
emailRadio.name = "contactMethod";
emailRadio.id = "email";
emailRadio.value = "email";

const emailLabel = document.createElement("label");

emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email";

dynamicContent.add(emailRadio);
dynamicContent.add(emailLabel);
dynamicContent.add(document.createElement("br"));

const phoneRadio = document.createElement("input");

phoneRadio.type = "radio";
phoneRadio.name = "contactMethod";
phoneRadio.id = "phone";
phoneRadio.value = "phone";

const phoneLabel = document.createElement("label");

phoneLabel.setAttribute("for", "phone");
phoneLabel.textContent = "Phone";

dynamicContent.add(phoneRadio);
dynamicContent.add(phoneLabel);
dynamicContent.add(document.createElement("br"));

const textRadio = document.createElement("input");

textRadio.type = "radio";
textRadio.name = "contactMethod";
textRadio.id = "text";
textRadio.value = "text";

const textLabel = document.createElement("label");

textLabel.setAttribute("for", "text");
textLabel.textContent = "Text";

dynamicContent.add(textRadio);
dynamicContent.add(textLabel);

const messageDiv = document.createElement("div");

messageDiv.id = "messageBox";
messageDiv.textContent = "Thank you for contacting us. Please select a reason for contacting us and your preferred contact method.";

dynamicContent.add(messageDiv);

