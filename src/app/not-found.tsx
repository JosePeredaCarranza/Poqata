import Link from "next/link";
import { siteName } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="landing" aria-labelledby="not-found-title">
      <div className="landing__content">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Página no encontrada</h1>
        <Link className="home-link" href="/">
          Volver a {siteName}
        </Link>
      </div>
    </main>
  );
}
