using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DutchTreat.Data.Models;
using DutchTreat.Data.Repositories;
using DutchTreat.Helpers;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DutchTreat.Controllers
{
    [Route("/api/order/{orderId}/items")]
    public class OrderItemController : Controller
    {
        private readonly IOrderItemRepository _orderItemRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<OrderItemController> _logger;
        private readonly IMapper _mapper;

        public OrderItemController(IOrderItemRepository orderItemrepository, IOrderRepository orderRepository, ILogger<OrderItemController> logger, IMapper mapper)
        {
            _orderItemRepository = orderItemrepository;
            _orderRepository = orderRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetItems(int orderId)
        {
            var helper = new OrderItemHelper();
            var isOrderExists = helper.IsOrderExists(orderId);

            if (isOrderExists)
            {
                var items = _orderItemRepository.GetItemsByOrderId(orderId);
                return Ok(_mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(items));
            }
            else
            {
                return NotFound($"Order with id: {orderId} was not found\n");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetOrderItemByItemId(int orderId, int id)
        {
            var helper = new OrderItemHelper();
            var isOrderExists = helper.IsOrderExists(orderId);

            if (isOrderExists)
            {
                var item = _orderItemRepository.GetItemsByOrderId(id).Where(item => item.Id == id).FirstOrDefault();

                if (item != null)
                {
                    return Ok(_mapper.Map<OrderItem, OrderItemViewModel>(item));
                }
                else
                {
                    return NotFound($"Item with id: {id} was not found\n");
                }

            }
            else
            {
                return NotFound($"Order with id: {orderId} was not found\n");
            }
        }

        [HttpPost("{id}")]
        public IActionResult CreateItem(int orderId, [FromBody] OrderItemViewModel item)
        {
            bool isItemSaved = false;
            bool isItemAdded = false;

            try
            {
                if (ModelState.IsValid)
                {
                    var newItem = _mapper.Map<OrderItemViewModel, OrderItem>(item);

                    isItemAdded = _orderItemRepository.AddEntity(newItem);

                    if (isItemAdded)
                    {
                        isItemSaved = _orderRepository.SaveAll();

                        if (isItemSaved)
                        {
                            return Created($"/api/order/{orderId}/items/{item.Id}", _mapper.Map<OrderItem, OrderItemViewModel>(newItem));
                        }
                    }
                }
            }

            catch (Exception ex)
            {
                _logger.LogError($"Failed to save item\n{ex}");
                return BadRequest("Failed to save item.");
            }


            return BadRequest("Failed to save item.");
        }

        [HttpPut]
        public IActionResult UpdateItem(int orderId, [FromBody] OrderItemViewModel item)
        {
            bool isItemUpdated = false;
            bool isUpdateSaved = false;

            try
            {
                if (ModelState.IsValid)
                {
                    var newItem = _mapper.Map<OrderItemViewModel, OrderItem>(item);

                    isItemUpdated = _orderItemRepository.UpdateEntity(newItem);

                    if (isItemUpdated)
                    {
                        isUpdateSaved = _orderRepository.SaveAll();

                        if (isUpdateSaved)
                        {
                            return Created($"/api/order/{orderId}/items/{item.Id}", _mapper.Map<OrderItem, OrderItemViewModel>(newItem));
                        }
                    }
                }
            }

            catch (Exception ex)
            {
                _logger.LogError($"Failed to update item\n{ex}");
                return BadRequest("Failed to update item.");
            }


            return BadRequest("Failed to update item.");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteItemById(int orderId, int id)
        {
            var helper = new OrderItemHelper();
            var isItemExists = helper.IsItemExists(id);
            var isOrderExists = helper.IsOrderExists(orderId);
            var isItemDeletedFromSet = false;
            var isChangeSaved = false;

            if (isOrderExists)
            {
                if (isItemExists)
                {
                    var itemToDelete = _orderItemRepository.GetItemsByOrderId(orderId).Where(item => item.Id == id).FirstOrDefault();
                    try
                    {
                        isItemDeletedFromSet = _orderItemRepository.DeleteEntity(itemToDelete);

                        if (isItemDeletedFromSet)
                        {
                            isChangeSaved = _orderItemRepository.SaveAll();

                            if (isChangeSaved)
                            {
                                return Ok($"Item with id: {id} is deleted");
                            }

                        }
                    }
                    catch (Exception ex)
                    {
                        return BadRequest($"Item with id: {id} was not deleted\n{ex}");
                    }
                }
                else
                {
                    return NotFound($"Item with id: {id} was not found");
                }
            }
            else
            {
                return NotFound($"Order with id: {orderId} was not found");
            }

            return BadRequest($"Item with id: {id} was not deleted\n");
        }

    }
}
