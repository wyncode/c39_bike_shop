const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `<a target="_blank" rel="noopener noreferrer" href=${process.env.APP_URL}/api/password/${token}">Reset Password</a>`;

  SpeechGrammarList.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Password Reset.',
    // text: `Hi ${name}! Please click the link below to reset your password.`
    html: exampleHTMLEmail
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
};
