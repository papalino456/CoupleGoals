import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-800.css';
import '@fontsource/barlow-condensed/latin-900.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import './styles.css';

import logoUrl from './assets/brand/logo.svg';
import iconUrl from './assets/brand/icon.svg';
import heroDevicesUrl from './assets/imagery/hero-devices.png';

const sourceUrl = 'https://github.com/papalino456/CoupleGoals';

const arrowIcon = `
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M8 5h7v7" />
  </svg>`;

const boltIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.2 2 5 13h6l-.4 9L19 10h-6.1l.3-8Z" />
  </svg>`;

const goalIcons = {
  travel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-7-7 18-3-8-8-3Z"/><path d="m11 14 3-3"/></svg>`,
  fitness: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6M7 6v12M17 6v12M20 9v6M7 12h10"/></svg>`,
  finance: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 15h2"/></svg>`,
  learning: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z"/></svg>`,
};

const capabilityIcons = {
  sync: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M27 11A12 12 0 0 0 6.2 7.3L3 11m2-8 1.2 4.3L11 8M5 21a12 12 0 0 0 20.8 3.7L29 21m-2 8-1.2-4.3L21 24"/></svg>`,
  partner: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="10" r="5"/><circle cx="23" cy="12" r="4"/><path d="M2 27c.7-6.2 4-9 9-9s8.3 2.8 9 9M20 19c5.5-.4 8.7 2.2 9.5 7"/></svg>`,
  categories: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="1"/><rect x="19" y="3" width="10" height="10" rx="1"/><rect x="3" y="19" width="10" height="10" rx="1"/><rect x="19" y="19" width="10" height="10" rx="1"/></svg>`,
  mood: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13"/><path d="M11 13h.01M21 13h.01M10.5 20c1.6 2.2 3.4 3 5.5 3s3.9-.8 5.5-3"/></svg>`,
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header" data-header>
    <div class="shell header-inner">
      <a class="brand" href="#top" aria-label="CoupleGoals home">
        <img src="${logoUrl}" alt="CoupleGoals" width="322" height="60" />
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#how-it-works">How it works</a>
        <a href="#shared-goals">Shared goals</a>
        <a href="#check-ins">Check-ins</a>
      </nav>

      <a class="button button-outline header-cta" href="${sourceUrl}" target="_blank" rel="noopener noreferrer" aria-label="View CoupleGoals source on GitHub">
        <span class="button-icon">${boltIcon}</span>
        View source
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Open navigation">
        <span></span><span></span>
      </button>
    </div>

    <nav class="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden>
      <a href="#how-it-works">How it works</a>
      <a href="#shared-goals">Shared goals</a>
      <a href="#check-ins">Check-ins</a>
      <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer" aria-label="View CoupleGoals source on GitHub">View source ${arrowIcon}</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="hero-slashes hero-slashes-left" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="shell hero-grid">
        <div class="hero-copy" data-reveal>
          <p class="hero-kicker">SHARED GOALS + DAILY CHECK-INS</p>
          <h1>SET GOALS.<br /><span>WIN TOGETHER.</span></h1>
          <p class="hero-summary">
            A React Native prototype for couples to connect, create shared goals, and record daily mood check-ins—together.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${sourceUrl}" target="_blank" rel="noopener noreferrer" aria-label="View CoupleGoals source on GitHub">
              View source ${arrowIcon}
            </a>
            <a class="button button-quiet" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <ul class="hero-capabilities" aria-label="Core capabilities">
            <li><span class="mini-mark">${boltIcon}</span>Shared goals</li>
            <li><span class="mini-mark cyan">${boltIcon}</span>Daily check-ins</li>
            <li><span class="sync-mark" aria-hidden="true">↻</span>Real-time data</li>
          </ul>
          <p class="hero-status">OPEN-SOURCE PROTOTYPE</p>
        </div>

        <figure class="hero-media" data-reveal data-delay="1">
          <div class="hero-bracket" aria-hidden="true"></div>
          <img
            src="${heroDevicesUrl}"
            alt="Illustrative interface concept showing categorized shared goals and a 1–10 daily mood check-in on two phones"
            width="1672"
            height="939"
            fetchpriority="high"
          />
          <figcaption>Illustrative interface concept</figcaption>
        </figure>
      </div>
      <div class="hero-dots" aria-hidden="true"></div>
    </section>

    <section class="goal-board" id="shared-goals" aria-labelledby="goal-board-title">
      <div class="goal-board-label">
        <span id="goal-board-title">GOAL BOARD</span>
      </div>
      <div class="goal-board-track" role="list" aria-label="Example shared goal categories" tabindex="0">
        <article class="goal-tile" role="listitem">
          <span class="goal-icon magenta">${goalIcons.travel}</span>
          <div><strong>TRAVEL</strong><small>New adventure together</small></div>
          <b>ACTIVE</b>
        </article>
        <article class="goal-tile" role="listitem">
          <span class="goal-icon cyan">${goalIcons.fitness}</span>
          <div><strong>FITNESS</strong><small>Build a shared routine</small></div>
          <b>ACTIVE</b>
        </article>
        <article class="goal-tile" role="listitem">
          <span class="goal-icon magenta">${goalIcons.finance}</span>
          <div><strong>FINANCE</strong><small>Plan the next step</small></div>
          <b>COMPLETE</b>
        </article>
        <article class="goal-tile" role="listitem">
          <span class="goal-icon cyan">${goalIcons.learning}</span>
          <div><strong>LEARNING</strong><small>Grow side by side</small></div>
          <b>ACTIVE</b>
        </article>
      </div>
      <div class="goal-board-note">
        <span>${boltIcon}</span>
        <p><strong>Shared progress.</strong><br />Not a competition.</p>
      </div>
    </section>

    <section class="process-section" id="how-it-works">
      <div class="shell">
        <div class="section-heading" data-reveal>
          <p class="section-index">01 / HOW IT WORKS</p>
          <h2>A SHARED RHYTHM,<br /><span>BUILT FOR TWO.</span></h2>
          <p>Connect, create, check in, and close the loop together.</p>
        </div>

        <ol class="process-grid">
          <li class="process-step magenta-step" data-reveal>
            <span class="step-number">01</span>
            <div class="step-copy">
              <h3>Connect</h3>
              <p>Pair two accounts so goals and check-ins can belong to the same partnership.</p>
            </div>
            <div class="step-visual connect-visual" aria-hidden="true">
              <span class="person one"></span><img src="${iconUrl}" alt="" /><span class="person two"></span>
            </div>
          </li>
          <li class="process-step cyan-step" data-reveal data-delay="1">
            <span class="step-number">02</span>
            <div class="step-copy">
              <h3>Create a shared goal</h3>
              <p>Add a title, category, optional description, and optional target date.</p>
            </div>
            <div class="step-visual create-visual" aria-hidden="true">
              <span>${goalIcons.travel}</span><span>${goalIcons.fitness}</span><span>${goalIcons.learning}</span>
            </div>
          </li>
          <li class="process-step magenta-step" id="check-ins" data-reveal data-delay="2">
            <span class="step-number">03</span>
            <div class="step-copy">
              <h3>Check in</h3>
              <p>Record a 1–10 mood and add a short note when there is more to say.</p>
            </div>
            <div class="step-visual mood-visual" aria-hidden="true">
              <span>1</span><span>5</span><span class="selected">8</span><span>10</span>
            </div>
          </li>
          <li class="process-step cyan-step" data-reveal data-delay="3">
            <span class="step-number">04</span>
            <div class="step-copy">
              <h3>Complete together</h3>
              <p>Either partner can mark a shared goal complete.</p>
            </div>
            <div class="step-visual complete-visual" aria-hidden="true">
              <svg viewBox="0 0 72 72"><circle cx="36" cy="36" r="31"/><path d="m20 37 10 10 22-24"/></svg>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="capabilities-section" aria-labelledby="capabilities-heading">
      <div class="shell capabilities-layout">
        <div class="capabilities-intro" data-reveal>
          <p class="section-index">02 / THE FOUNDATION</p>
          <h2 id="capabilities-heading">SMALL ACTIONS.<br /><span>SHARED DIRECTION.</span></h2>
          <p>Focused tools for the everyday work of moving forward together.</p>
        </div>

        <div class="capability-list">
          <article class="capability-item" data-reveal>
            <span class="capability-number">01</span>
            <span class="capability-icon">${capabilityIcons.sync}</span>
            <div><h3>Real-time foundation</h3><p>Convex queries and mutations keep application data reactive.</p></div>
          </article>
          <article class="capability-item" data-reveal data-delay="1">
            <span class="capability-number">02</span>
            <span class="capability-icon cyan">${capabilityIcons.partner}</span>
            <div><h3>Partner connection</h3><p>Link two user records into one partnership.</p></div>
          </article>
          <article class="capability-item" data-reveal data-delay="2">
            <span class="capability-number">03</span>
            <span class="capability-icon">${capabilityIcons.categories}</span>
            <div><h3>Shared goals</h3><p>Keep categorized goals connected to both partners.</p></div>
          </article>
          <article class="capability-item" data-reveal data-delay="3">
            <span class="capability-number">04</span>
            <span class="capability-icon cyan">${capabilityIcons.mood}</span>
            <div><h3>Mood + notes</h3><p>Pair a simple 1–10 mood with an optional written check-in.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="stack-section" aria-labelledby="stack-heading">
      <div class="stack-tab"><span id="stack-heading">BUILT WITH</span></div>
      <div class="shell stack-grid">
        <article>
          <span class="stack-mark react-mark" aria-hidden="true">◎</span>
          <div><strong>React Native + Expo</strong><small>Cross-platform application shell</small></div>
        </article>
        <article>
          <span class="stack-word clerk-mark" aria-hidden="true">clerk</span>
          <div><strong>Clerk</strong><small>Google OAuth sign-in</small></div>
        </article>
        <article>
          <span class="stack-mark convex-mark" aria-hidden="true"><i></i></span>
          <div><strong>Convex</strong><small>Reactive data and backend functions</small></div>
        </article>
      </div>
    </section>

    <section class="closing-section">
      <div class="closing-slashes closing-slashes-left" aria-hidden="true"></div>
      <div class="closing-slashes closing-slashes-right" aria-hidden="true"></div>
      <div class="shell closing-inner" data-reveal>
        <img src="${iconUrl}" alt="" width="96" height="96" />
        <div>
          <h2>SET GOALS. <span>WIN TOGETHER.</span></h2>
          <p>Explore the prototype, architecture, and source.</p>
        </div>
        <a class="button button-primary" href="${sourceUrl}" target="_blank" rel="noopener noreferrer" aria-label="View CoupleGoals source on GitHub">
          <span class="button-icon">${boltIcon}</span>View source ${arrowIcon}
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="shell footer-inner">
      <a class="footer-brand" href="#top" aria-label="Back to top"><img src="${logoUrl}" alt="CoupleGoals" width="322" height="60" /></a>
      <p>Open-source prototype <span aria-hidden="true">•</span> MIT License</p>
      <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">GitHub ${arrowIcon}</a>
    </div>
  </footer>
`;

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLElement>('.mobile-nav');

const setMenuOpen = (open: boolean) => {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
};

menuToggle?.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) setMenuOpen(false);
});

const header = document.querySelector<HTMLElement>('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroMedia = document.querySelector<HTMLElement>('.hero-media');
if (heroMedia && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  heroMedia.addEventListener('pointermove', (event) => {
    const bounds = heroMedia.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroMedia.style.setProperty('--tilt-x', `${y * -1.1}deg`);
    heroMedia.style.setProperty('--tilt-y', `${x * 1.4}deg`);
  });
  heroMedia.addEventListener('pointerleave', () => {
    heroMedia.style.setProperty('--tilt-x', '0deg');
    heroMedia.style.setProperty('--tilt-y', '0deg');
  });
}
