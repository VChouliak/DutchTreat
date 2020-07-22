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
                return Ok(_productRepository.GetAllProducts());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products:\n{ex}");
                return BadRequest("Failed to get products:");
            }
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
