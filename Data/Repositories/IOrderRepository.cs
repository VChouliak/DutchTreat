using DutchTreat.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories
{
    public interface IOrderRepository : IBaseRepository<Order>
    {
        IEnumerable<Order> GetAllOrders();
        IEnumerable<Order> GetAllOrdersByUserName(string username);
        public bool AddOrder(Order newOrder);
        public bool UpdateOrder(Order order);
    }
}
