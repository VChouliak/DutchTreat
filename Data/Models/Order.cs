using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Data.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<OrderItem> Items { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Order order &&
                   Id == order.Id &&
                   OrderDate == order.OrderDate &&
                   OrderNumber == order.OrderNumber;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, OrderDate, OrderNumber);
        }
    }
}
