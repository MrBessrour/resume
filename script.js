  // Load reusable header and footer
  async function loadLayout() {
    const header = await fetch('header.html').then(res => res.text());
    const footer = await fetch('footer.html').then(res => res.text());
    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;
  }

  loadLayout();
