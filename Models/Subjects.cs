namespace Training_Management_System.Models
{
    public class Subjects
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int SubjectSeqNum { get; set; }
        public string Subject { get; set; }
        public string Stream { get; set; }
        public string CreatedBy { get; set; }
        public string CreatedDateTime { get; set; }
        public string EditedBy { get; set; }
        public string EditedDateTime { get; set; }
    }
}
