using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_API
{
    public class Artist
    {
        public int id { get; set; }
        public string name { get; set; }
        public int startYear { get; set; }

        public IReadOnlyCollection<Album> Albums { get; set; }
    }
}
