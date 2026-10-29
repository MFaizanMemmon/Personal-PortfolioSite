import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="not-found section-shell">
      <p className="eyebrow">404 — Page not found</p>
      <h1>That page is not part of the build.</h1>
      <p>
        The link may be old, or the project may have moved. The selected work and case studies
        are still a click away.
      </p>
      <div>
        <Link className="button button-primary" href="/">
          <FiArrowLeft aria-hidden="true" />
          Back to the portfolio
        </Link>
        <Link className="button button-secondary" href="/#work">
          View selected work
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
