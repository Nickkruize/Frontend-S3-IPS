using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_API
{
    public class Album
    {
        public int id { get; set; }
        public string title { get; set; }
        public int artistID { get; set; }
        public int releaseYear { get; set; }
        public IReadOnlyCollection<Song> Songs { get; set; }
    }
}
