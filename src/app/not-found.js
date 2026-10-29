import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-inner">
        <div className="section-kicker"><span /> 404</div>
        <h1>That page is not part of the build.</h1>
        <p>
          The link may be old, or the project may have moved. The selected work and case studies
          are still a click away.
        </p>
        <div className="not-found-actions">
          <Link className="hero-button hero-button-primary" href="/">
            <FiArrowLeft aria-hidden="true" />
            Back to the portfolio
          </Link>
          <Link className="hero-button hero-button-secondary" href="/#projects">
            View selected work
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
