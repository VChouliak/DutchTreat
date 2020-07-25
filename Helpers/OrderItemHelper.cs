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
        

        public OrderItemHelper()
        {

        }
        public OrderItemHelper(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;           
        }
       

        public bool IsOrderExists(int orderId)
        {
            return _orderRepository
                .GetAllOrders()
                .Where(order => order.Id == orderId)
                .FirstOrDefault() != null;
        }
    }
}
