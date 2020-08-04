using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DAL.Entities
{
    public class UserProfile
    {
        [ForeignKey("User")]
        public string Id { get; set; }
        public string Login { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Street { get; set; }
        public string City { get;set; }
        public virtual DbUser User { get; set; }
    }
}