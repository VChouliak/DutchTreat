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
        public IActionResult Contact([FromBody] ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _mailService.SendMessage("johndoe@hotmail.com", model.Subject, $"From: {model.UserName} - {model.Email} Message: {model.Message}");
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            ViewBag.Title = "About us";
            return View();
        }


        public IActionResult Shop()
        {
            var results = _productRepository.GetAll().OrderBy(p => p.Category);
            return View(results);
        }


    }

}
