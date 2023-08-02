'use client'
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Name*"
        onChange={handleInputChange}
        required
        className='border-2 border-black'
      />
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Business"
        onChange={handleInputChange}
        required
        className='border-2 border-black'
      />
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Email*"
        onChange={handleInputChange}
        required
        className='border-2 border-black'
      />
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Message"
        onChange={handleInputChange}
        required
        className='border-2 border-black'
      />
      <button type="submit">Submit</button>
    </form>
  )
}