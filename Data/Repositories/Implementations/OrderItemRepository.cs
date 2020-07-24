using DutchTreat.Data.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class OrderItemRepository : CRUDRepository<OrderItem>, IOrderItemRepository
    {      
        private IOrderRepository _orderRepository;

        public OrderItemRepository(DutchTreatDbContext dbContext, IOrderRepository orderRepository, ILogger<CRUDRepository<OrderItem>> logger) : base(dbContext, logger)
        {
            _orderRepository = orderRepository;
        }

        public IEnumerable<OrderItem> GetItemsByOrderId(int orderID)
        {
            var order = _orderRepository
                .GetAllOrders()
                .Where(order => order.Id == orderID)
                .FirstOrDefault();
      
                return order.Items;       
        }
    }
}
