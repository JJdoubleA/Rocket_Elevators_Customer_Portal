using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("Views/Home/Index.cshtml");
        }
        public IActionResult Registration()
        {
            return View("Views/Home/Registration.cshtml");
        }
        public IActionResult Sign_in()
        {
            return View("Views/Home/Sign_in.cshtml");
        }
        public IActionResult Intervention()
        {
            return View("Areas/Identity/Pages/Account/Intervention.cshtml");
        }
        public IActionResult Product_Management()
        {
            return View("Areas/Identity/Pages/Account/Product_Management.cshtml");
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
