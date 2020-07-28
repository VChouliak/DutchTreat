using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data.Models;
using DutchTreat.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat.Controllers
{
    [Route("api/[Controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductRepository productRepository, ILogger<ProductController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                return Ok(_productRepository.GetAll().OrderBy(p=>p.Artist));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products:\n{ex}");
                return BadRequest("Failed to get products:");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult FindById(int id)
        {
            return Ok(_productRepository.FindBy(nameof(Product.Id),id));
        }
        public IActionResult Index()
        {
            return View();
        }

    }
}
