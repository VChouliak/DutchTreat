using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Data.Repository;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private IMailService _mailService;
        private IProductRepository _productRepository;    

        public AppController(IMailService mailService, IProductRepository productRepository)
        {
            _mailService = mailService;
            _productRepository = productRepository;
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

        [Authorize]
        public IActionResult Shop()
        {
            var results = _productRepository.GetAll().OrderBy(p=>p.Category);
            return View(results);
        }


    }

}
