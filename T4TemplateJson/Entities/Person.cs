using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace T4TemplateJson.Entities
{
    /// <summary>
    /// A person who does things
    /// </summary>
    [ScriptDto]
    public class Person
    {
        /// <summary>
        /// First name of the person
        /// </summary>
        [Display(Name ="First Name", Description ="Your first name")]
        public string FirstName { get; set; }

        /// <summary>
        /// Last name of the person
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Age of the person in years
        /// </summary>
        public int Age { get; set; }
    }
}
