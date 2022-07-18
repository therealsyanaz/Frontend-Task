using Training_Management_System.Data;
using Training_Management_System.Models;

namespace Training_Management_System.Services
{
    public class SubjectsService
    {

        private readonly DataContext _dataContext;

        public SubjectsService(DataContext context) { 
            _dataContext = context; 
        }

        public List<Subjects> ListSubjects()
        {
            var subjects = new List<Subjects>();

            //subjects = _context.Subjects.ToList();
            return subjects;
        }
    }
}
