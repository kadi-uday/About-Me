import { CONTACT_FORM_KEY } from "../utils/constants";

const OnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", CONTACT_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        alert("Form Sent Successfully.");
        event.target.reset();
    } else {
        alert("Oops! Submission failed. Please check your details or try again later.");
    }
};

export default OnSubmit;
