using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private IMailService _mailService;

        public AppController(IMailService mailService)
        {
            _mailService = mailService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact us";
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            string message = "";

            if (ModelState.IsValid)
            {
                _mailService.SendMessage("johndoe@hotmail.com", model.Subject, $"From: {model.UserName} - {model.Email} Message: {model.Message}");
                message = "Message sent!!!";
            } 
            else
            {
                message = "Please fill all requered fields";
            }

            ViewBag.Message = message;
            ModelState.Clear();
            return View();
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            ViewBag.Title = "About us";
            return View();
        }


    }

}
