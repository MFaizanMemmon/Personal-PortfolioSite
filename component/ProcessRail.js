'use client';

import { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function ProcessRail({ steps }) {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const items = Array.from(rail.querySelectorAll('.workflow-step'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = rail.getBoundingClientRect();
      const focusLine = window.innerHeight * 0.48;
      const progress = Math.min(
        Math.max((focusLine - rect.top) / Math.max(rect.height, 1), 0),
        1,
      );
      rail.style.setProperty('--workflow-progress', progress.toFixed(4));

      let active = -1;
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= focusLine && itemRect.bottom > focusLine) active = index;
      });

      if (active === -1 && items.length > 0) {
        active = rect.bottom < focusLine ? items.length - 1 : 0;
      }

      items.forEach((item, index) => {
        item.classList.toggle('is-active', index === active);
        item.classList.toggle('is-passed', index < active);
        if (index === active) item.setAttribute('aria-current', 'step');
        else item.removeAttribute('aria-current');
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      items.forEach((item) => {
        item.classList.remove('is-active', 'is-passed');
        item.removeAttribute('aria-current');
      });
    };
  }, []);

  return (
    <ol className="workflow-rail" ref={railRef} aria-label="Delivery process">
      {steps.map((step, index) => (
        <li
          key={step.step}
          className="workflow-step"
          tabIndex={0}
          aria-label={`Stage ${step.step}: ${step.title}. ${step.detail}`}
        >
          <span className="workflow-number">{step.step}</span>
          <div>
            <strong>{step.title}</strong>
            <p>{step.detail}</p>
          </div>
          {index < steps.length - 1 && (
            <FiArrowRight className="workflow-arrow" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
