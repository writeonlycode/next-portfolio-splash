"use client";

import { useState } from "react";

export default function ContactForm({ button }: { button: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isMutating, setIsMutating] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setData(undefined);
    setError(undefined);
    setIsMutating(true);

    const JSONdata = JSON.stringify({ name, email, message });
    const endpoint = "/api/send-email";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result);
      }

      setIsMutating(false);
      setData(result);
    } catch (e: any) {
      setIsMutating(false);
      setError(e.message);
    }
  };
  return (
    <form
      className=""
      action="/api/send-email"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <input
          type="text"
          className="w-full border text-xl p-2 border-dark disabled:bg-neutral-200 disabled:border-neutral-400 disabled:placeholder-shown:text-neutral-400 disabled:text-neutral-400"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          disabled={isMutating || data}
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          className="w-full border text-xl p-2 border-dark disabled:bg-neutral-200 disabled:border-neutral-400 disabled:placeholder-shown:text-neutral-400 disabled:text-neutral-400"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={isMutating || data}
          required
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={8}
          className="w-full border text-xl p-2 border-dark disabled:bg-neutral-200 disabled:border-neutral-400 disabled:placeholder-shown:text-neutral-400 disabled:text-neutral-400"
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          disabled={isMutating || data}
          required
        />
      </div>
      <div className="mb-6">
        <button
          className="flex items-center text-light font-medium bg-dark px-6 py-4 disabled:text-neutral-400 disabled:bg-neutral-600"
          type="submit"
          disabled={isMutating || data}
        >
          {isMutating && (
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
            </svg>
          )}
          <span className="">{button}</span>
        </button>
      </div>
      {error && (
        <div className="">
          Oops, it seems there was a hiccup. The messaging service might be
          experiencing a temporary issue or could be temporarily disabled. Please
          try again later or feel free to reach out through alternative means.
          Thank you for your understanding!
        </div>
      )}
      {data && (
        <div className="">
          Thank you for reaching out! Your message has been successfully sent.
          I&apos;ll be in touch with you shortly. Have a great day!
        </div>
      )}
    </form>
  );
}
