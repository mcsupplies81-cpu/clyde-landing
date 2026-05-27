import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="loginPage">
      <div className="loginLogo">
        <Image src="/images/logo-white.png" alt="Clyde" width={140} height={34} priority />
      </div>

      <section className="loginCard" aria-label="Sign in form">
        <h1 className="loginTitle">Sign in to Clyde</h1>

        <div className="loginField">
          <label className="loginLabel" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className="loginInput" autoComplete="email" />
        </div>

        <div className="loginField">
          <label className="loginLabel" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="loginInput"
            autoComplete="current-password"
          />
        </div>

        <button type="button" className="btn btnPrimary" style={{ width: "100%" }}>
          Sign in
        </button>

        <Link className="subtleLink" href="/forgot-password" style={{ textAlign: "center", opacity: 0.75 }}>
          Forgot password?
        </Link>

        <hr className="loginDivider" />

        <Link className="subtleLink" href="/demo" style={{ textAlign: "center", color: "#a8c4ff" }}>
          Don&apos;t have access? Book a demo →
        </Link>
      </section>

      <p className="loginFooter">© 2025 Clyde</p>
    </main>
  );
}
