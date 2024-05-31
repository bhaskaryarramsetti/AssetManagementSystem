using AssetManagementSystem.Interfaces;

using System.Net.Mail;

using System.Net;

namespace AssetManagementSystem.Repository
{
    public class EmailService : IEmailService
    {
        public Task Send(string email, string subject, string message)
        {
            var mail = "mailtrap@demomailtrap.com";

            var client = new SmtpClient("live.smtp.mailtrap.io", 587)
            {
                Credentials = new NetworkCredential("api", "88ef15fe4e835570a02dc8cf69c85779"),
                EnableSsl = true
            };

            return client.SendMailAsync(
                new MailMessage(
                    from: mail,
                    to: email,
                    subject,
                    message
                ));
        }
    }
}