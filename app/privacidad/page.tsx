import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Unravelled Corner",
  description: "Información sobre el tratamiento de datos y el uso de cookies en Unravelled Corner.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-monnama-brown-mid mb-10">
        <Link href="/" className="hover:text-monnama-terra transition-colors">Inicio</Link>
        <span>/</span>
        <span className="text-monnama-brown font-medium">Política de privacidad</span>
      </nav>

      <div className="mb-12">
        <h1 className="font-display text-5xl text-monnama-brown mb-3">Política de privacidad</h1>
        <p className="text-monnama-brown-mid text-lg">Última actualización: septiembre de 2026.</p>
      </div>

      <div className="space-y-10 text-monnama-brown-mid leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Responsable</h2>
          <p>
            Esta web es un proyecto personal de Monika, bajo el nombre comercial Unravelled Corner. Para
            cualquier consulta sobre esta política o sobre tus datos, puedes escribir a{" "}
            <a href="mailto:unravelledcorner@gmail.com" className="text-monnama-terra hover:text-monnama-terra-dark underline underline-offset-2">
              unravelledcorner@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Qué datos tratamos</h2>
          <p>
            Esta web no tiene formularios ni sistema de registro: no recogemos ni almacenamos datos
            personales tuyos en ningún servidor propio. Si nos contactas por Instagram o por email, esa
            conversación se gestiona directamente en esas plataformas (Instagram / tu gestor de correo),
            sujeta a sus propias políticas de privacidad.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Cookies y analítica</h2>
          <p className="mb-3">
            Usamos Vercel Analytics para entender, de forma anónima y agregada, cuántas personas visitan la
            web y qué páginas les interesan más. No usamos cookies de publicidad ni de seguimiento entre
            sitios, y no vendemos ni compartimos ningún dato con terceros con fines comerciales.
          </p>
          <p>
            Al entrar por primera vez puedes elegir aceptar o rechazar esta analítica en el banner que
            aparece en la parte inferior. Si rechazas, el script de analítica nunca se carga en tu navegador.
            Puedes cambiar tu elección en cualquier momento borrando los datos de este sitio en la
            configuración de tu navegador, lo que hará que el banner vuelva a aparecer.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Tus derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición sobre cualquier dato
            que nos hayas facilitado directamente (por ejemplo, en una conversación por email), escribiendo a{" "}
            <a href="mailto:unravelledcorner@gmail.com" className="text-monnama-terra hover:text-monnama-terra-dark underline underline-offset-2">
              unravelledcorner@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-monnama-brown mb-3">Cambios en esta política</h2>
          <p>
            Si esta política cambia de forma relevante, actualizaremos la fecha al principio de esta página.
          </p>
        </section>
      </div>
    </div>
  );
}
