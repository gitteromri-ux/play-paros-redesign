// ============================================================
// STRATEGY TAB — The commercial case, not a design rationale.
// Sourced from the F&B/service audit archived at
// brown_hotels_greece_leon_avigad_audit_2026-08-16.md
// Every cited figure below links to the original public source.
// ============================================================

function renderStrategy() {
  const el = document.getElementById('strategyContent');
  el.innerHTML = `
  <section class="wrap" style="padding-top:var(--space-16)">
    <span class="eyebrow">The Meeting, In One Page</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Brown doesn't have a design problem.<br>It has an <em>F&amp;B and service</em> problem — and a clock.</h2>
    <p class="lede" style="margin-top:var(--space-6); max-width:78ch">Rent is fixed and CPI-linked. Debt is off the table as a talking point — Avigad's defensive ground. Food and service are his stated pride, and the one lever that can still move EBITDA this year. This site is the leave-behind: three minutes to walk Leon through the number, the wound, and the ask.</p>
  </section>

  <div class="brand-break reveal" style="padding-block:clamp(3.5rem, 8vw, 6rem)">
    <div class="wrap">
      <p class="brand-break-line" style="max-width:26ch">EBITDAR ~ILS 29.9m collapses to EBITDA of <em>ILS 0.34m</em>. Rent ate the rest.</p>
      <p class="body-copy" style="margin-top:var(--space-6); max-width:60ch; margin-inline:auto; color:var(--color-text-faint)">Nine-month Greek room revenue ~ILS 72.9m at ADR ILS 608. Lease liabilities ~ILS 856.5m, mostly CPI-linked. With rent fixed, F&amp;B and rate are the only levers left <a href="https://www.deeptase.co.il/en/analysis/2049" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:inherit">(DeepTASE)</a>.</p>
    </div>
  </div>

  <section class="wrap">
    <span class="eyebrow">01 — The Structure Behind the Opportunity</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">A lease deal, a call option, and a hard deadline.</h2>
    <div class="split reveal" style="margin-top:var(--space-10)">
      <div>
        <p class="body-copy">Brown Hotels was insolvent — ~NIS 980m of accumulated debt, a ~NIS 4m monthly operating loss, and an 80–90% haircut for financial creditors <a href="https://www.globes.co.il/news/article.aspx?did=1001496882" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Globes)</a>. Israel Canada Hotels took the Greek activity <strong>for no cash payment</strong>, assuming leases on 8 properties (~1,076 rooms) with rent owed mainly to Aroundtown <a href="https://en.globes.co.il/en/article-brown-hotels-asks-court-to-approve-sale-to-israel-canada-1001496884" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Globes)</a>.</p>
        <p class="body-copy" style="margin-top:var(--space-4)">Three months after acquisition, part of Brown's activity was sold to parent Israel Canada for ILS 20m — with a <strong>repurchase call option exercisable 1 Oct – 31 Dec 2026</strong> <a href="https://www.deeptase.co.il/en/analysis/2049" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(DeepTASE)</a>. Whoever prices that option in Q4 needs better trailing reviews and visible ancillary revenue <em>before year-end</em> — a programme that shows movement by late September lands squarely inside that window, and inside the Play Theatrou +50-room expansion the same month <a href="https://www.ot.gr/2025/12/10/tourismos/israel-canada-hotels-stoxos-ta-3-000-domatia-stin-ellada-me-simaia-tin-brown/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(ot.gr)</a>.</p>
      </div>
      <div>
        <p class="body-copy">Meanwhile the growth plan is aggressive and unfunded by demand: <strong>1,500 rooms by 2027, 3,000 by 2030</strong> <a href="https://www.ot.gr/2025/12/10/tourismos/israel-canada-hotels-stoxos-ta-3-000-domatia-stin-ellada-me-simaia-tin-brown/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(ot.gr)</a> — while the corporate Greek Facebook page has <strong>103 followers, zero reviews, and a 5-week in-season dormant streak</strong> <a href="https://www.facebook.com/BrownHotelsGreece/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Facebook)</a>, and group Instagram reaches 39K against Casa Cook's 260K on fewer posts <a href="https://www.instagram.com/brownhotels/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Instagram)</a>.</p>
        <p class="body-copy" style="margin-top:var(--space-4)"><strong>Avigad's own exposure:</strong> Brown is pivoting into third-party hotel management — 40+ properties, ~4,000 rooms — selling <em>"restaurant organization"</em> as a service line to other owners <a href="https://bizness.gr/epekteinetai-sti-diacheirisi-xenodocheion-i-brown-hotels-ti-simatodotei-i-nea-stratigiki-kateythynsi-meta-tin-exagora-ton-xenodocheion/amp/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(bizness.gr)</a> — while his own resorts get named-and-blamed for F&amp;B failure in public reviews. That contradiction is the opening. Not the insolvency — that's his defensive ground. Food is his stated pride.</p>
      </div>
    </div>
  </section>

  <section class="wrap">
    <span class="eyebrow">02 — The Scoreboard</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Seven properties. One pattern.</h2>
    <p class="body-copy" style="margin-top:var(--space-4); max-width:80ch">This isn't a Play Paros problem — it's portfolio-wide. F&amp;B and service are named directly, by guests, at every price point.</p>
    <div class="scoreboard-wrap" style="margin-top:var(--space-10); overflow-x:auto">
      <table class="scoreboard">
        <thead>
          <tr><th>Property</th><th>TripAdvisor</th><th>Value score</th><th>Verified pain signal</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Play Paros</td><td>4.5–4.7/5 · <strong>4–7 reviews</strong></td><td>Amenities 9.2 (Expedia)</td>
            <td>No onsite food; breakfast walked next door <a href="https://www.tripadvisor.com/Hotel_Review-g642171-d33254314-Reviews-Play_Paros-Parikia_Paros_Cyclades_South_Aegean.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
          <tr>
            <td>Isla Brown Corinthia <span class="tag">Curio by Hilton</span></td><td>3.8/5 · 217 reviews</td><td>3.9</td>
            <td><strong>26% at 1–2 bubbles</strong> — "The F&amp;B manager is to blame" <a href="https://www.tripadvisor.com/Hotel_Review-g4501379-d23341412-Reviews-Isla_Brown_Corinthia_Resort_Spa_Curio_Collection_By_Hilton-Agioi_Theodoroi_Corinthia.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
          <tr>
            <td>Brown Beach Chalkida <span class="tag">Kosher</span></td><td>3.5/5 · 72 reviews</td><td>3.4</td>
            <td><strong>36% at 1–2 bubbles</strong> — restaurant called "the big black spot" <a href="https://www.tripadvisor.com/Hotel_Review-g1933469-d495537-Reviews-Brown_Beach_Chalkida-Agios_Minas_Euboea_Region_Central_Greece.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
          <tr>
            <td>Brown Beach Eretria</td><td>3.9/5 · 181 reviews</td><td>4.0</td>
            <td>AI food monotony + reservations desk stopped answering <a href="https://www.tripadvisor.com/Hotel_Review-g262045-d652883-Reviews-Brown_Beach_Eretria-Eretria_Euboea_Region_Central_Greece.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
          <tr>
            <td>Brown Acropol <span class="tag">Athens flagship</span></td><td>4.4/5 · 662 reviews</td><td>4.2–4.3</td>
            <td>Breakfast/coffee = most repeated complaint at ~€200/night <a href="https://www.tripadvisor.com/Hotel_Review-g189400-d19525668-Reviews-Brown_Acropol-Athens_Attica.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
          <tr>
            <td>Villa Brown Ermou <span class="tag">proof case</span></td><td>4.3/5 · 260 reviews</td><td>Cleanliness 4.8</td>
            <td>Best-run Greek asset — it has a restaurant + rooftop bar <a href="https://www.tripadvisor.com/Hotel_Review-g189400-d9989976-Reviews-Villa_Brown_Ermou-Athens_Attica.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
          <tr class="scoreboard-competitor">
            <td>Apollon Boutique <span class="tag">competitor, 3 doors down</span></td><td>4.6/5 · 412 reviews</td><td>4.5</td>
            <td>Breakfast is its marketed hero <a href="https://www.tripadvisor.com/Hotel_Review-g642171-d555308-Reviews-APOLLON_Design_Boutique_Hotel-Parikia_Paros_Cyclades_South_Aegean.html" target="_blank" rel="noopener noreferrer">(TripAdvisor)</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="body-copy" style="margin-top:var(--space-8); max-width:80ch">Nickel-and-diming compounds the wound: <strong>€3 per 500ml water, €1 per coffee capsule, €5 for a coke</strong>, snack bar excluded from all-inclusive <a href="https://www.tripadvisor.com/Hotel_Review-g4501379-d23341412-Reviews-Isla_Brown_Corinthia_Resort_Spa_Curio_Collection_By_Hilton-Agioi_Theodoroi_Corinthia.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(TripAdvisor)</a>. One guest's verdict, verbatim: <em>"Brown used to be synonymous with quality and detail, now it's a rip off."</em> <a href="https://www.tripadvisor.com/Hotel_Review-g262045-d652883-Reviews-Brown_Beach_Eretria-Eretria_Euboea_Region_Central_Greece.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(TripAdvisor)</a></p>
  </section>

  <div class="image-band reveal"><img src="./assets/images/breakfast-table.jpg" alt="Branded breakfast concept"><span class="caption">The fastest EBITDA lever in the portfolio — and the one Avigad already believes in.</span></div>

  <section class="wrap">
    <span class="eyebrow">03 — Why Avigad Says Yes</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">This is his own standard. We're showing him where it's breaking.</h2>
    <div class="split split--reverse reveal" style="margin-top:var(--space-10)">
      <div class="split-media"><img src="./assets/images/rooftop-sunset.jpg" alt="Rooftop bar concept"></div>
      <div>
        <p class="body-copy" style="font-style:italic; font-size:var(--text-lg); color:var(--color-text)">"Boutique hospitality is visible in the design, <strong>the food</strong>, the calm energy."</p>
        <p class="hours" style="color:var(--color-text-faint); text-transform:none; letter-spacing:0; margin-top:var(--space-2)">— Leon Avigad <a href="https://inbusinessnews.reporter.com.cy/article/436842/leon-avigad-i-kathodos-tis-brown-hotels-to-entharryntiko-ependytiko-periballon-tis-kyproy-kai-i-anazitisi-neon-efkairion" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(InBusinessNews Cyprus)</a></p>
        <p class="body-copy" style="margin-top:var(--space-6)">He's already run two kosher restaurants with a dedicated chef in Cyprus, and describes Brown as "known for establishing rooftops, bars and restaurants" <a href="https://www.calcalist.co.il/conferences/article/sk5vssn00q" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Calcalist)</a>. He personally retains his role in Greece explicitly "so that the consistency, quality and experience that characterize Brown Hotels are ensured" <a href="https://www.ot.gr/2025/12/10/tourismos/israel-canada-hotels-stoxos-ta-3-000-domatia-stin-ellada-me-simaia-tin-brown/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(ot.gr)</a>. He owns this promise already — he just hasn't seen the receipts.</p>
        <p class="body-copy" style="margin-top:var(--space-4)"><strong>Never lead with the insolvency.</strong> Debt is COVID/war/protests in his framing — defensive ground <a href="https://passportnews.co.il/article/193923" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(passportnews)</a>. Lead with his own words on food, and the gap between that and what guests report.</p>
      </div>
    </div>
  </section>

  <section class="wrap">
    <span class="eyebrow">04 — The Programme</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Three moves. One season. No rent renegotiation required.</h2>
    <div class="card-grid" style="margin-top:var(--space-10)" id="strategyDecisions"></div>
  </section>

  <section class="wrap">
    <span class="eyebrow">05 — This Site's Job</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">Proof of craft, built on the real story.</h2>
    <div class="split reveal" style="margin-top:var(--space-10)">
      <div>
        <p class="body-copy"><strong>Before:</strong> generic OTA-template layout, stock yellow brand color, standard 3-column grids, a live mailto bug pointing to a different property's inbox, and a room-copy contradiction ("King Size" vs. FAQ "queen-size only").</p>
        <p class="body-copy" style="margin-top:var(--space-4)"><strong>After:</strong> Play's own black-and-acid-green DNA pushed to full editorial confidence — oversized serif-italic type as a repeatable punctuation device, real depth and glow instead of flat cards, a full-bleed brand-break section, and horizontal edge-peek carousels replacing static grids.</p>
      </div>
      <div>
        <p class="body-copy"><strong>Fixed, not invented:</strong> room copy now says "Double Bed" consistently. No fictional in-house restaurant is claimed — the real beach bar is promoted to a hero facility and the neighboring breakfast partner is told honestly as a "Neighborhood Breakfast" story, with the in-house upgrade path flagged as the opportunity, not pretended into existence.</p>
        <p class="body-copy" style="margin-top:var(--space-4)">The site is the proof-of-craft leave-behind. The commercial case is the meeting.</p>
      </div>
    </div>
  </section>

  <section class="wrap">
    <span class="eyebrow">06 — The Ask</span>
    <h2 class="h-section mt-0" style="margin-top:var(--space-4)">One pilot. One property. Ninety days.</h2>
    <p class="lede" style="margin-top:var(--space-6); max-width:78ch">Give us Play Paros as the pilot — the smallest, cleanest asset, already proving demand with a <strong>10.0 breakfast score</strong> on an outsourced product <a href="https://www.booking.com/hotel/gr/play-paros.html" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(Booking.com)</a>. We bring the branded breakfast + bar module in-house, fix the review-generation gap, and show a measurable score and revenue move before the <strong>Q4 2026 call-option window</strong> closes <a href="https://www.deeptase.co.il/en/analysis/2049" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">(DeepTASE)</a>. If it works at 40 rooms, it's the reference case for Corinthia, Chalkida, and the Brown Hospitality Management sales deck itself.</p>
    <div class="stat-row" style="margin-top:var(--space-10)">
      <div><div class="num">90</div><div class="label">Days to first measurable score + revenue movement</div></div>
      <div><div class="num">40</div><div class="label">Rooms in the pilot — lowest risk, fastest proof</div></div>
      <div><div class="num">Q4</div><div class="label">'26 call-option window this must land inside</div></div>
    </div>
  </section>
  `;
  renderStrategyDecisions();
}

function renderStrategyDecisions() {
  const items = [
    {
      t: 'Own the breakfast, don\u2019t outsource it',
      d: 'Play Paros already scores 10.0 on Booking.com for a breakfast it doesn\u2019t control (Booking.com). Bring it in-house at the beach bar site \u2014 same demand, captured margin, and it directly neutralizes the #1 complaint across guest reviews.'
    },
    {
      t: 'Par-stock and holding-temperature discipline at the resorts',
      d: 'Corinthia and Chalkida\u2019s worst reviews are fixable operations: cold food, multi-day stock-outs, a 14-day menu cycle that never rotates (TripAdvisor). This is a protocol fix, not a capex ask \u2014 the cheapest rate-defense available on a Hilton-affiliated asset.'
    },
    {
      t: 'Re-price all-inclusive from extraction to upsell',
      d: '\u20ac3 water and \u20ac1 coffee capsules produced \u201cBrown used to be synonymous with quality, now it\u2019s a rip-off\u201d (TripAdvisor). Free the basics, sell a premium dining tier as a bookable upgrade \u2014 same or better margin, opposite sentiment.'
    },
    {
      t: 'Make F&B the content pillar, not an afterthought',
      d: 'Casa Cook earns ~322 followers per post off a dedicated \u201cGastronomy\u201d pillar; Brown Greece earns ~27 per post with a broken restaurant video (Instagram). A food-and-rooftop content engine turns the fix into the demand-generation story management needs for its 3,000-room target.'
    },
    {
      t: 'Ship the pilot inside the call-option clock',
      d: 'The Israel Canada repurchase option opens 1 Oct 2026 (DeepTASE). A 90-day Play Paros pilot beginning now lands a measurable score and revenue delta on the table before whoever prices that option needs the number.'
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
