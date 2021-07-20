using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DashboardCotizador.Controllers
{
    public class CotizacionController : Controller
    {
        // GET: CotizacionController
        public ActionResult CrearCotizaciones()
        {
            return View();
        }
        // GET: CotizacionController/VerCotizaciones
        public ActionResult VerCotizaciones()
        {
            return View();
        }

        // GET: CotizacionController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CotizacionController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CotizacionController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CotizacionController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CotizacionController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CotizacionController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CotizacionController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
