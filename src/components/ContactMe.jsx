import { useState } from "react";

const ContactMe = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  function handleContactMeClick() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;

    // You should also get other form field values here

    const emailData = {
      to: "ankitkr00.india@gmail.com",
      subject: `${name} wants to contact with you`,
      // You can add more properties like message, etc.
      message: `name : ${name} \n email : ${email} \n ${phoneNumber}`,
    };
    console.log(emailData);

    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the parsed JSON data here
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="contact text-slate-800 space-y-8">
        {/* <h2 className="text-black">Contact Me</h2> */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="m-2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className="border w-full"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="m-2">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                className="border w-full"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="m-2">
              <label htmlFor="phone">Phone Number:</label>
              <br />
              <input
                className="border w-full"
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            {/* <div className="m-2">
              <label htmlFor="file">Upload Job Description</label>
              <br />
              <input
                className="border"
                type="file"
                id="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </div> */}

            {/* {uploadedFile && (
              <div className="m-2">
                <a
                  href={URL.createObjectURL(uploadedFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {uploadedFile.name}
                </a>
              </div>
            )} */}

            <button
              className="m-2 flex justify-end items-end text-1xl px-3 py-2 text-white bg-blue-500 hover:text-blue-600 rounded-full shadow-lg"
              //   onClick={handleContactMeClick}
              onClick={handleContactMeClick && onClose}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
