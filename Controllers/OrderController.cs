using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data.Models;
using DutchTreat.Data.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
                return Ok(_orderRepository.GetAllOrders());
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get orders:\n{e}");
                return BadRequest("Failed to get orders.");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOrderById(int id)
        {
            try
            {
                var order = _orderRepository.GetAllOrders().Where(order => order.Id == id).FirstOrDefault();

                if (order != null)
                {
                    return Ok(order);
                }
                else
                {
                    return NotFound($"Order with id: {id} not found.");
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get order with Id: {id}\n{e}");
                return BadRequest($"Failed to get order with Id: {id}");
            }
        }

        [HttpPost]
        public IActionResult CreateOrder([FromBody]Order order)
        {
            bool isOrderSaved = false;
            bool isOrderAdded = false;
            try
            {
                isOrderAdded = _orderRepository.AddEntity(order);

                if (isOrderAdded)
                {
                    isOrderSaved = _orderRepository.SaveAll();
                    
                    if (isOrderSaved)
                    {                        
                        return Created($"/api/order/{order.Id}", order);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save order{ex}");
                return BadRequest("Failed to save order.");
            }
            return BadRequest("Failed to save order.");
        }
    }
}
