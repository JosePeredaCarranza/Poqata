import { siteName } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="landing" aria-labelledby="site-title">
      <div className="landing__content">
        <h1 id="site-title">{siteName}</h1>
        <p>Proyecto en desarrollo</p>
      </div>
    </main>
  );
}
