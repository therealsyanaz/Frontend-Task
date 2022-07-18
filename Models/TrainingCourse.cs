namespace Training_Management_System.Models
{
    public class TrainingCourse
    {
        public int TCSeqNum { get; set; }
        public string CourseName { get; set; }
        public string Subjects { get; set; }
        public string Type { get; set; }
        public string CreatedBy { get; set; }
        public string CreatedDateTime { get; set; }
        public string EditedBy { get; set; }
        public string EditedDateTime { get; set; }
    }
}
