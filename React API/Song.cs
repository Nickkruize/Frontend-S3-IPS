using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_API
{
    public class Song
    {
        public int id { get; set; }
        public string title { get; set; }
        public int length { get; set; }
        public int numberOnAlbum { get; set; }
        public int albumID { get; set; }

    }
}
