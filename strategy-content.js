// ============================================================
// STRATEGY TAB — Design & commercial rationale.
// Sourced from the F&B/service audit archived at
// brown_hotels_greece_leon_avigad_audit_2026-08-16.md
// Every cited figure below links to the original public source.
// ============================================================

function renderStrategy() {
  const el = document.getElementById('strategyContent');
  el.innerHTML = `
  <section class="wrap" style="padding-top:var(--space-16)">
    <span class="eyebrow">The Brief</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Not a paint job.<br>A revenue thesis.</h2>
    <p class="lede" style="margin-top:var(--space-6)">This redesign is built around one verified fact: Play Paros's biggest guest complaint is not the design of the hotel — it's the absence of an owned food &amp; beverage experience. Everything below is designed to fix that, using the existing asset, at low capex.</p>
  </section>

  <section class="wrap">
    <div class="stat-row" style="border-top:none; padding-top:0">
      <div><div class="num">10.0</div><div class="label">Booking.com breakfast score for a fully outsourced breakfast <a href="https://www.booking.com/hotel/gr/play-paros.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Booking.com)</a></div></div>
      <div><div class="num">4–7</div><div class="label">TripAdvisor reviews vs. 412 for the competitor 3 doors down <a href="https://www.tripadvisor.com/Hotel_Review-g642171-d33254314-Reviews-Play_Paros-Parikia_Paros_Cyclades_South_Aegean.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(TripAdvisor)</a></div></div>
      <div><div class="num">4.6/5</div><div class="label">Apollon Boutique Hotel, Parikia — breakfast is its marketed hero <a href="https://www.tripadvisor.com/Hotel_Review-g642171-d555308-Reviews-APOLLON_Design_Boutique_Hotel-Parikia_Paros_Cyclades_South_Aegean.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(TripAdvisor)</a></div></div>
    </div>
  </section>

  <section class="wrap">
    <span class="eyebrow">01 — What Guests Actually Say</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">The F&amp;B void, in their own words.</h2>
    <div class="card-grid card-grid--3col-fixed" style="margin-top:var(--space-10)">
      <div class="facility-tile">
        <p style="font-style:italic; color:var(--color-text)">"It was clean and safe. Very expensive and no onsite food services."</p>
        <p class="hours" style="color:var(--color-text-faint); text-transform:none; letter-spacing:0">— Danielle, Jul 2025, 6/10 <a href="https://www.expedia.com/Paros-Hotels-Play-Paros.h95040727.Hotel-Information" target="_blank" rel="noopener noreferrer">(Expedia)</a></p>
      </div>
      <div class="facility-tile">
        <p style="font-style:italic; color:var(--color-text)">"The hotel doesn't have its own breakfast or bar, but literally next door is a shop and cafe."</p>
        <p class="hours" style="color:var(--color-text-faint); text-transform:none; letter-spacing:0">— Guest review, Sept 2025 <a href="https://www.trip.com/hotels/paros-hotel-detail-110088042/play-paros/review.html" target="_blank" rel="noopener noreferrer">(Trip.com)</a></p>
      </div>
      <div class="facility-tile">
        <p style="font-style:italic; color:var(--color-text)">"Breakfast, served at a nearby restaurant, was fine but nothing special."</p>
        <p class="hours" style="color:var(--color-text-faint); text-transform:none; letter-spacing:0">— Joerg Hoegi R, Sept 2025 <a href="https://www.tripadvisor.com/Hotel_Review-g642171-d33254314-Reviews-Play_Paros-Parikia_Paros_Cyclades_South_Aegean.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></p>
      </div>
    </div>
    <p class="body-copy" style="margin-top:var(--space-8)">Play Paros scores well across OTAs — but is <strong>invisible where discovery happens</strong> (a handful of TripAdvisor reviews against a neighbor's 412) and <strong>undifferentiated where margin lives</strong>: its direct Parikia competitor wins on the exact axis Play Paros has abandoned — breakfast <a href="https://www.tripadvisor.com/Hotel_Review-g642171-d555308-Reviews-APOLLON_Design_Boutique_Hotel-Parikia_Paros_Cyclades_South_Aegean.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(TripAdvisor — Apollon Design Boutique Hotel)</a>.</p>
  </section>

  <div class="image-band reveal"><img src="./assets/images/breakfast-table.jpg" alt="Branded breakfast concept"><span class="caption">The fastest EBITDA lever in the portfolio: an owned breakfast + bar module.</span></div>

  <section class="wrap">
    <span class="eyebrow">02 — The Commercial Logic</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Why F&amp;B, why now.</h2>
    <div class="split reveal" style="margin-top:var(--space-10)">
      <div>
        <p class="body-copy">Brown's Greek portfolio sits inside a lease-heavy structure: Israel Canada Hotels acquired the Greek leases and brand from Brown's founders as part of a 2024 insolvency restructuring, assuming leases on roughly 8 properties (~1,076 rooms) with rent owed mostly to Aroundtown <a href="https://en.globes.co.il/en/article-brown-hotels-asks-court-to-approve-sale-to-israel-canada-1001496884" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Globes)</a> <a href="https://www.ered.gr/real-estate-news/brown-hotels-in-greece-and-israel-were-sold" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(ered.gr)</a>.</p>
        <p class="body-copy" style="margin-top:var(--space-4)">Because rent is fixed and contractual, the fastest route to positive property-level EBITDA is <strong>incremental F&amp;B contribution</strong>, not rate negotiation <a href="https://www.deeptase.co.il/en/analysis/2049" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(DeepTASE)</a>. F&amp;B quality, temperature, monotony and stock-outs are already the single most repeated complaint category across the wider Brown Greek portfolio — a management failure, not a taste problem.</p>
      </div>
      <div>
        <p class="body-copy">Play Paros itself already proves the demand exists: its fully outsourced breakfast scores a <strong>10.0</strong> on Booking.com <a href="https://www.booking.com/hotel/gr/play-paros.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Booking.com)</a> — guests want it, they just want it delivered by the hotel, not walked to next door.</p>
        <p class="body-copy" style="margin-top:var(--space-4)">Meanwhile the growth plan has no demand engine behind it: management targets 1,500 rooms by 2027 and 3,000 by 2030 <a href="https://www.ot.gr/2025/12/10/tourismos/israel-canada-hotels-stoxos-ta-3-000-domatia-stin-ellada-me-simaia-tin-brown/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(ot.gr)</a>, while the corporate Greek Facebook page has just 103 followers <a href="https://www.facebook.com/BrownHotelsGreece/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Facebook)</a> and the group Instagram reaches 39K vs. Casa Cook's 260K <a href="https://www.instagram.com/brownhotels/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Instagram)</a>.</p>
      </div>
    </div>
  </section>

  <section class="wrap">
    <span class="eyebrow">03 — What This Redesign Does About It</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Five design decisions, each tied to a commercial fix.</h2>
    <div class="card-grid" style="margin-top:var(--space-10)" id="strategyDecisions"></div>
  </section>

  <section class="wrap">
    <span class="eyebrow">04 — Visual &amp; Brand Overhaul</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">From template to editorial.</h2>
    <div class="split split--reverse reveal" style="margin-top:var(--space-10)">
      <div class="split-media"><img src="./assets/images/rooftop-sunset.jpg" alt="New Cycladic editorial direction"></div>
      <div>
        <p class="body-copy"><strong>Before:</strong> body font CalibreRegular, primary brand color a bright, generic yellow (rgb(223,223,31)), no video, no trust badges, standard OTA-template 3-column grids, and a live mailto bug pointing to a different property's inbox.</p>
        <p class="body-copy" style="margin-top:var(--space-4)"><strong>After:</strong> an editorial Cycladic system in the spirit of Casa Cook and Aman — deep Aegean ink, sun-bleached limestone, a single burnt-terracotta accent used only for calls-to-action. Fraunces serif display type paired with General Sans for a boutique-hospitality register instead of an OTA-template one. Full-bleed photography with real captions, a rooftop-terrace pull quote, and a masonry gallery that actually filters by category.</p>
        <p class="body-copy" style="margin-top:var(--space-4)"><strong>Fixed:</strong> the room-card "King Size" vs. FAQ "queen-size double beds only" contradiction is resolved — room copy now says "Double Bed" consistently, matching the FAQ's authoritative answer. No new in-house restaurant is invented; the real beach bar and neighboring breakfast partner are repositioned aspirationally as a "Neighborhood Breakfast" story, true to what exists on the ground today.</p>
      </div>
    </div>
  </section>

  <section class="wrap">
    <span class="eyebrow">05 — The Ask</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">The pitch for the meeting.</h2>
    <p class="lede" style="margin-top:var(--space-6)">A low-capex, high-margin branded breakfast + rooftop/beach-bar module across the Play hotels captures spend that currently walks next door, neutralizes the single most common complaint in Play Paros's own reviews, and — because lease costs are fixed and contractual — is the fastest available route to positive property-level EBITDA without renegotiating a single rent line <a href="https://www.deeptase.co.il/en/analysis/2049" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(DeepTASE)</a>.</p>
    <p class="body-copy" style="margin-top:var(--space-6); max-width:70ch">This is the case for owning F&amp;B and service delivery on the Play Paros asset first — proven demand (10.0 breakfast score), proven complaint (repeated "no onsite food" reviews), and a design system that finally matches the ambition of the pitch.</p>
  </section>
  `;
  renderStrategyDecisions();
}

function renderStrategyDecisions() {
  const items = [
    {
      t: 'Neighborhood Breakfast, reframed',
      d: 'Instead of hiding the outsourced breakfast, the Facilities page now tells its story honestly and confidently — turning a 30-meter walk into a "live like a local" narrative, while flagging the clear opportunity to bring it in-house.'
    },
    {
      t: 'Beach bar promoted to a hero facility',
      d: 'PLAY Paros Beach — the only real on-site F&B asset — gets full editorial treatment: its own image band, hours, and a direct link to the existing menu PDF, instead of being buried in a bullet list.'
    },
    {
      t: 'Rooftop terrace positioned as the F&B expansion site',
      d: 'The rooftop terrace, currently a view-only amenity, is visually staged throughout the site (hero-adjacent imagery, dusk lighting) as the natural home for a future bar/light-kitchen module.'
    },
    {
      t: 'Trust rebuilt through specificity, not superlatives',
      d: 'Generic "luxury" language is replaced with concrete, verifiable detail (exact hours, exact walk times, exact amenities) — closing the credibility gap that a near-empty TripAdvisor profile creates.'
    },
    {
      t: 'One clear direct-booking path',
      d: 'A single persistent booking bar and consistent CTA hierarchy funnel every page toward direct reservations — protecting margin currently leaking to OTAs where the same generic template competes on price alone.'
    }
  ];
  document.getElementById('strategyDecisions').innerHTML = items.map((it, i) => `
    <div class="facility-tile">
      <div class="icon"><span style="font-family:var(--font-display); font-size:var(--text-lg)">${i + 1}</span></div>
      <h3>${it.t}</h3>
      <p>${it.d}</p>
    </div>
  `).join('');
}
