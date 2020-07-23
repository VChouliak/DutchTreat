using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DutchTreat.Data.Models;
using DutchTreat.Data.Repositories;
using DutchTreat.ViewModels;
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
        private readonly IMapper _mapper;

        public OrderController(IOrderRepository orderRepository, ILogger<OrderController> logger, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(_orderRepository.GetAllOrders()));
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
                    return Ok(_mapper.Map<Order, OrderViewModel>(order));
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
        public IActionResult CreateOrder([FromBody] OrderViewModel order)
        {
            bool isOrderSaved = false;
            bool isOrderAdded = false;

            try
            {
                if (ModelState.IsValid)
                {
                    var newOrder = _mapper.Map<OrderViewModel, Order>(order);
                    if (newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }

                    isOrderAdded = _orderRepository.AddEntity(newOrder);

                    if (isOrderAdded)
                    {
                        isOrderSaved = _orderRepository.SaveAll();

                        if (isOrderSaved)
                        {
                            return Created($"/api/order/{order.OrderId}", _mapper.Map<Order, OrderViewModel>(newOrder));
                        }
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
