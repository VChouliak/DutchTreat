using DutchTreat.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data.Repositories.Implementations
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        private readonly DutchTreatDbContext _dbContext;
        public OrderRepository(DutchTreatDbContext dbContext, ILogger<BaseRepository<Order>> logger) : base(dbContext, logger)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Order> GetAllOrders()
        {
            return _dbContext.Orders.AsNoTracking()                
                .Include(order=>order.User)
                .Include(order => order.Items)
                .ThenInclude(item => item.Product)                
                .ToList();
        }

        public IEnumerable<Order> GetAllOrdersByUserName(string username)
        {
            return GetAllOrders().Where(order => order.User.UserName.Equals(username)).ToList();
        }

        public bool AddOrder(Order newOrder)
        {            
            foreach (var item in newOrder.Items)
            {
                item.Product = _dbContext.Products.Find(item.Product.Id);
            }

            return AddEntity(newOrder);
        }
    }
}
