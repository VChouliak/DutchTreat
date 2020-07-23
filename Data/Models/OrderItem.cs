using System;
using System.Collections.Generic;

namespace DutchTreat.Data.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public Product Product { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public Order Order { get; set; }

        public override bool Equals(object obj)
        {
            return obj is OrderItem item &&
                   Id == item.Id &&
                   EqualityComparer<Product>.Default.Equals(Product, item.Product);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Product);
        }
    }
}