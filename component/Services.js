import {
  FiArrowRight,
  FiBarChart2,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiShoppingBag,
} from "react-icons/fi";
import PointerGlow from "./PointerGlow";
import { services } from "@/data/site";

const serviceIcons = {
  erp: FiLayers,
  pos: FiShoppingBag,
  web: FiGlobe,
  desktop: FiMonitor,
  database: FiDatabase,
  report: FiBarChart2,
};

export default function Services() {
  return (
    <section id="services" className="section section-services">
      <div className="section-shell">
        <div className="section-heading services-heading" data-reveal="up">
          <p className="eyebrow">Freelance services</p>
          <div className="services-heading-row">
            <h2>
              Practical software for <em>specific business problems.</em>
            </h2>
            <div>
              <p className="section-intro">
                I take on focused builds where the requirement is clear and the software has to
                hold up in daily use. No guaranteed delivery dates or invented client metrics.
              </p>
              <a className="text-link" href="#contact">
                Discuss your project
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="service-grid" data-reveal-group>
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? FiLayers;
            return (
              <article
                key={service.number}
                className="service-card"
                data-reveal="scale"
                style={{ "--reveal-index": Math.min(index, 5) }}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <a href="#contact" className="service-link">
                  Discuss this service
                  <FiArrowRight aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="services-cta" data-reveal="up">
          <div>
            <p className="eyebrow">A different requirement?</p>
            <h3>Tell me what the business needs to do. We can work out the software from there.</h3>
          </div>
          <a className="button button-primary" href="#contact">
            Discuss your project
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <PointerGlow selector=".service-card" />
    </section>
  );
}
