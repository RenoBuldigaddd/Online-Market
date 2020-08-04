using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using backend.DAL.Entities;

namespace backend.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server database
            options.UseSqlServer(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<UserProfile> Users { get; set; }
    }
}