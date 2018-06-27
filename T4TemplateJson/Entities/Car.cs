using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T4TemplateJson.Entities
{
    /// <summary>
    /// Describes a car
    /// </summary>
    [ScriptDto]
    public class Car
    {
        /// <summary>
        /// Make of the car such as Ford, Subaru
        /// </summary>
        public string Make { get; set; }

        /// <summary>
        /// Model of the car such as Model-T, 180B
        /// </summary>
        public string Model { get; set; }
    }
}
