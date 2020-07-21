using Microsoft.Extensions.Logging;

namespace DutchTreat.Services
{
    public class DummyMailService : IMailService
    {
        private ILogger<DummyMailService> _logger;

        public DummyMailService(ILogger<DummyMailService> logger)
        {
            this._logger = logger;
        }
        public void SendMessage(string to, string subject, string body)
        {
            _logger.LogInformation($"To: {to}\nSubject: {subject}\nBody: {body}\n");
        }
    }
}
