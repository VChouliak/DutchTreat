using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contact()
        {
            ViewBag.Title = "Contact us";
            return View();
        }
        public IActionResult About()
        {
            ViewBag.Title = "About us";
            return View();
        }


    }

}
