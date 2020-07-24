using DutchTreat.Data.Models;
using DutchTreat.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Helpers
{
    public class OrderItemHelper
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderItemRepository _orderItemRepository;

        public OrderItemHelper()
        {

        }
        public OrderItemHelper(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;           
        }
        public OrderItemHelper(IOrderRepository orderRepository, IOrderItemRepository orderItemRepository)
        {
            _orderRepository = orderRepository;
            _orderItemRepository = orderItemRepository;
        }

        public bool IsOrderExists(int orderId)
        {
            return _orderRepository
                .GetAllOrders()
                .Where(order => order.Id == orderId)
                .FirstOrDefault() != null;
        }

        public bool IsItemExists(int id)
        {
            return _orderItemRepository.FindBy(nameof(OrderItem.Id),id).FirstOrDefault() != null;
        }
    }
}
