using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data.Models;
using DutchTreat.Data.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat.Controllers
{
    [Route("api/[Controller]")]
    public class OrderController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<OrderController> _logger;

        public OrderController(IOrderRepository orderRepository, ILogger<OrderController> logger)
        {
            _orderRepository = orderRepository;
            _logger = logger;
        }

       [HttpGet]
       public IActionResult GetOrders()
        {
            try
            {
                return Ok(_orderRepository.GetAll());
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get orders:\n{e}");
                return BadRequest("Failed to get orders.");
            }
        }
  

        [HttpPost]
        public IActionResult CreateOrder([FromBody]Order order)
        {
            try
            {
                return Ok("Order created.");               
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save order{ex}");
                return BadRequest("Failed to save order.");
            }
        }
    }
}
