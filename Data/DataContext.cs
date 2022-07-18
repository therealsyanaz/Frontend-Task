using Microsoft.EntityFrameworkCore;
using Training_Management_System.Models;

namespace Training_Management_System.Data
{
    public class DataContext : DbContext
    {


        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Subjects> Subjects { get; set; }
        public DbSet<TrainingCourse> TrainingCourse { get; set; }
    }
}
