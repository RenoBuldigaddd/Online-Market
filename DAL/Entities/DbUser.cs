using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DAL.Entities
{

    public class DbUser : IdentityUser
    {
        public virtual UserImage UserImage { get; set; }
        public ICollection<MicroInfo> Microblogs { get; set; }
    }
}