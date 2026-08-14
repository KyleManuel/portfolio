import { basePath } from "@/lib/basePath";

export function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.75)
          ),
          url("${basePath}/assets/img/background/background-1.jpg")
        `,
      }}
    >
      <div className="hero-content">
        <p className="hero-header">Hi, I&apos;m Kyle!</p>

        <p className="hero-description">
          I’m a Full-Stack Developer who builds modern, dynamic, end-to-end web experiences and many more!
        </p>

        <p className="hero-description">
          I have a passion for coding and enjoy the challenges it brings, being able to solve complex logical problems brings me satisfaction.
        </p>

        <p className="hero-description">
          Check out my portfolio to see some of the projects I&apos;ve worked on!
        </p>
      </div>
    </section>
  );
}