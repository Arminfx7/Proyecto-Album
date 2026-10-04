// Product cards contain facts only; editorial advice lives outside the cards.
(() => {
  const kind = document.body.dataset.catalog;
  const container = document.querySelector('#catalog-results');
  if (!container) return;
  const hardware = kind === 'componentes';
  const software = kind === 'software';
  const categories = hardware ? window.hardwareCatalog : [{
    id: kind,
    name: kind === 'celulares' ? 'Celulares' : kind === 'laptops' ? 'Laptops' : 'Software',
    products: software ? window.softwareCatalog.map(p => ({
      brand: p.type, model: p.name, image: p.image, source: p.source,
      specs: [['Categoría', p.type], ['Característica principal', p.desc]],
    })) : window.deviceCatalog[kind]
  }];
  const search = document.querySelector('#catalog-search');
  const categorySelect = document.querySelector('#catalog-category');
  const tierSelect = document.querySelector('#catalog-tier');
  const status = document.querySelector('#catalog-status');
  const previous = document.querySelector('#catalog-prev');
  const next = document.querySelector('#catalog-next');
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let current = Math.max(0, categories.findIndex(c => c.id === location.hash.slice(1)));
  if (categorySelect) {
    categorySelect.innerHTML = categories.map((c, i) => '<option value="' + i + '">' + escape(c.name) + '</option>').join('');
    categorySelect.value = current;
  }
  const tierTitles = { baja: 'Gama baja', media: 'Gama media', alta: 'Gama alta' };
  const tierDescriptions = { baja: 'Lo esencial para comenzar', media: 'Un equilibrio de funciones y rendimiento', alta: 'Opciones para necesidades exigentes' };
  function card(p, category) {
    const recommended = window.getTierAdvice?.(category, p.tier)?.product === p;
    const asset = window.hardwareImages?.[p.brand + '|' + p.model] || window.deviceImages?.[p.id];
    const image = asset?.path || (p.illustrative ? null : p.image);
    const specs = window.getProductSpecs ? window.getProductSpecs(p, category) : (p.specs || []);
    return '<article class="product-entry' + (recommended ? ' is-recommended' : '') + '">' +
      (recommended ? '<span class="choice-label">Mi elección · ' + escape(tierTitles[p.tier]) + '</span>' : '') + '<figure class="product-picture">' +
      (image ? '<img loading="lazy" decoding="async" src="' + escape(image) + '" alt="' + escape(p.brand + ' ' + p.model) + '">' : '<span class="photo-pending">Fotografía exacta pendiente.<br>No mostramos otro modelo en su lugar.</span>') +
      '</figure><div class="product-copy"><span class="kicker">' + escape(p.brand) + '</span><h3>' + escape(p.model) + '</h3><dl>' +
      specs.map(([name, value]) => '<div><dt>' + escape(name) + '</dt><dd>' + escape(value) + '</dd></div>').join('') +
      '</dl>' +
      (asset?.source || p.source ? '<a class="source-link" href="' + escape(asset?.source || p.source) + '" target="_blank" rel="noopener noreferrer">Consultar fabricante ↗</a>' : '') +
      '</div></article>';
  }
  function render() {
    const query = normalize(search.value.trim());
    const scope = query ? categories : [categories[current]];
    const selectedTier = tierSelect?.value || 'todas';
    let count = 0;
    container.innerHTML = scope.map(category => {
      const products = category.products.filter(p => normalize(p.brand + ' ' + p.model + ' ' + category.name).includes(query));
      const groups = software ? ['software'] : ['baja', 'media', 'alta'];
      const content = groups.filter(tier => selectedTier === 'todas' || selectedTier === tier).map(tier => {
        const entries = products.filter(p => software || p.tier === tier);
        count += entries.length;
        if (!entries.length) return '';
        const advice = window.getTierAdvice?.(category, tier);
        const visibleAdvice = advice && entries.includes(advice.product);
        const recommendation = visibleAdvice ? '<aside class="tier-advice"><div><span class="kicker">Mi elección en esta gama</span><h3>' +
          escape(advice.product.brand + ' ' + advice.product.model) + '</h3></div><div><p>' +
          escape(advice.text) + '</p><small>Una elección según este uso, no un ganador para todo el mundo.</small></div></aside>' : '';
        return '<section class="tier-block"><div class="tier-heading"><h2>' +
          escape((query && hardware ? category.name + ' · ' : '') + (tierTitles[tier] || 'Herramientas y sistemas')) +
          '</h2><p>' + escape(tierDescriptions[tier] || 'Elige según tu trabajo') + '</p></div><div class="product-grid">' +
          entries.map(p => card(p, category)).join('') + '</div>' + recommendation + '</section>';
      }).join('');
      return content;
    }).join('') || '<p class="empty-state">No encontramos resultados. Prueba otra marca o modelo.</p>';
    status.textContent = query ? count + ' resultados en el catálogo' : categories[current].name + ' · ' + count + ' modelos' + (hardware ? ' · Hoja ' + (current + 1) + ' de ' + categories.length : '');
    if (previous) previous.disabled = current === 0 || Boolean(query);
    if (next) next.disabled = current === categories.length - 1 || Boolean(query);
    container.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
      const placeholder = document.createElement('span');
      placeholder.className = 'photo-pending';
      placeholder.textContent = 'Fotografía no disponible. Consulta el fabricante.';
      img.replaceWith(placeholder);
    }, { once: true }));
  }
  function navigate(index) {
    current = index;
    categorySelect.value = current;
    search.value = '';
    history.replaceState(null, '', '#' + categories[current].id);
    render();
  }
  categorySelect?.addEventListener('change', () => navigate(Number(categorySelect.value)));
  previous?.addEventListener('click', () => navigate(current - 1));
  next?.addEventListener('click', () => navigate(current + 1));
  tierSelect?.addEventListener('change', render);
  search.addEventListener('input', render);
  render();
})();
