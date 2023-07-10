import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !comment) {
      setMessage("Please fill in the form");
      setTimeout(() => {
        setMessage("");
      }, 4000);

      return;
    }

    setMessage(
      `Thanks for contacting us. We'll get back to you as soon as possible.`
    );

    setEmail("");
    setName("");
    setPhone("");
    setComment("");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold uppercase tracking-wider">
        Contact form
      </h1>
      <p className="my-6 text-black first-letter:capitalize">{message}</p>
      <form onSubmit={handleForm} className="mt-5 flex flex-col gap-5">
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-3 transition duration-300 focus-within:border-rose-600"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-3 transition duration-300 focus-within:border-rose-600"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          className="border p-3 transition duration-300 focus-within:border-rose-600"
        />
        <textarea
          className="resize-none border p-3 transition duration-300 focus-within:border-rose-600"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="w-44 bg-rose-600 py-3 text-white transition duration-300 hover:bg-yellow-500">
          SEND
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
