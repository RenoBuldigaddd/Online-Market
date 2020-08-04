using backend.Model;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.EntityFrameworkCore;

namespace backend.DAL.Entities
{
    public class EFDbContext : IdentityDbContext<DbUser>
    {
        public EFDbContext(DbContextOptions<EFDbContext> options)
            : base(options)
        {

        }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<UserImage> UserImages { get; set; }
        public DbSet<Tags> Tags { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<MicroInfo> Microblogs { get; set; }
    }
}