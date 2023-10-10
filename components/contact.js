import { SendContact } from "@/controllers/contact";
import { useState } from "react";

export default function ContactForm() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [alert, setAlert]   = useState({});

  return (
    <form className="md:w-[50%]" onSubmit={(event) => {
      event.preventDefault();
      SendContact({subject, email, content, name}, setAlert);
      if(alert?.status == 'success') {
        setSubject('')
        setEmail('')
        setName('')
        setContent('')
      }
    }}>
      <div className="mb-6">
        <h1 className="text-3xl font-medium">Contact Me</h1>
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          onChange={(event) => setSubject(event.target.value)}
          value={subject}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Insert Subject"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="name"
          id="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
          Content
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        cols="30" rows="10" onChange={(event) => setContent(event.target.value)} defaultValue={content}></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
