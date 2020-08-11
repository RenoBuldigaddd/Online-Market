using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ViewModels
{
    public class LoginViewModel
    {
        [EmailAddress(ErrorMessage = "That must be email!")]
        [Required(ErrorMessage = "Field can`t be empty!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Field can`t be empty!")]
        public string Password { get; set; }
    }
    public class RegisterViewModel
    {
        [EmailAddress(ErrorMessage = "That must be email!")]
        [Required(ErrorMessage = "Field can`t be empty!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Field can`t be empty!")]
        [RegularExpression(@"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$", ErrorMessage = "Password must be at least 6 characters and contain digits, upper and lower case")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Field can`t be empty!")]
        public string PasswordConfirm { get; set; }
    }

    public class ConfirmEmailViewModel
    {
        [Required(ErrorMessage = "Cant't be empty")]
        public string Code { get; set; }
    }
}