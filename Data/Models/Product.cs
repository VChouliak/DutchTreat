using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Data.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Size { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string ArtDescription { get; set; }
        public string ArtDating { get; set; }
        public string ArtId { get; set; }
        public string Artist { get; set; }
        public DateTime ArtistBirthDate { get; set; }
        public DateTime ArtistDeathDate { get; set; }
        public string ArtistNationality { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Product product &&
                   Id == product.Id &&
                   Category == product.Category &&
                   Size == product.Size &&
                   Price == product.Price &&
                   Title == product.Title &&
                   ArtDescription == product.ArtDescription &&
                   ArtDating == product.ArtDating &&
                   ArtId == product.ArtId &&
                   Artist == product.Artist &&
                   ArtistBirthDate == product.ArtistBirthDate &&
                   ArtistDeathDate == product.ArtistDeathDate &&
                   ArtistNationality == product.ArtistNationality;
        }

        public override int GetHashCode()
        {
            HashCode hash = new HashCode();
            hash.Add(Id);
            hash.Add(Category);
            hash.Add(Size);
            hash.Add(Price);
            hash.Add(Title);
            hash.Add(ArtDescription);
            hash.Add(ArtDating);
            hash.Add(ArtId);
            hash.Add(Artist);
            hash.Add(ArtistBirthDate);
            hash.Add(ArtistDeathDate);
            hash.Add(ArtistNationality);
            return hash.ToHashCode();
        }
    }
}
