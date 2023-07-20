import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import banner from '../assets/heroimagetwo.jpg';
import Footer from './Footer';
import Chatbox from './Chatbot';
import './hiringpage.css'

const HiringPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true); 

  const emailServiceId = 'service_ukcglio';
  const emailTemplateId = 'template_l9fxsel';
  const emailUserId = 'Ga6mCfBij5QMNG5jW';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !date) {
      setAlertMessage('Please fill in all the fields');
      setShowAlert(true);
      return;
    }

    const templateParams = {
      name: name,
      phone_number: phoneNumber,
      email_address: email,
      date: date,
    };

    emailjs
      .send(emailServiceId, emailTemplateId, templateParams, emailUserId)
      .then(() => {
        setName('');
        setEmail('');
        setPhoneNumber('');
        setDate('');
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setAlertMessage('Failed to send email. Please try again later.');
        setShowAlert(true);
      });
  };

  const toggleLanguage = () => {
    setIsEnglish((prevValue) => !prevValue);
  };

  return (
    <div>
      <Chatbox />

      <div className="min-h-screen bg-white py-8 mb-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 ">
              <img src={banner} alt="Banner" className="object-cover w-full h-32" />
            </div>
            <div className="p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {isEnglish
                  ? 'Looking for a Job? Come Work at the #1 International Food Store in Gatineau!'
                  : 'Vous cherchez un emploi ? Venez travailler dans le meilleur magasin alimentaire international de Gatineau !'}
              </h2>
              <button className="lbtn" onClick={toggleLanguage}>
                {isEnglish ? 'Français' : 'English'}
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-8">
                {isEnglish
                  ? 'We have various positions available at our store. If you are interested in joining our team, please fill out the application form below and we will get back to you as soon as possible :)'
                  : 'Nous avons plusieurs postes disponibles dans notre magasin. Si vous êtes intéressé(e) à rejoindre notre équipe, veuillez remplir le formulaire ci-dessous et nous vous répondrons dès que possible :)'}
              </p>
              {isFormSubmitted ? (
                <p className="text-green-500 mb-8">
                  {isEnglish ? 'Application submitted successfully!' : 'Candidature soumise avec succès !'}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      {isEnglish ? 'Name' : 'Nom'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      {isEnglish ? 'Email' : 'E-mail'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                      {isEnglish ? 'Phone Number' : 'Numéro de téléphone'}
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-blue-500"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                      {isEnglish ? 'Date Available for Interview' : 'Date disponible pour l\'entrevue'}
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-blue-500"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md  focus:outline-none"
                  >
                    {isEnglish ? 'Submit Application' : 'Soumettre la candidature'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <Footer />

      </div>

    </div>
  );
};

export default HiringPage;
