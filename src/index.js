addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const url = new URL(request.url);
	const fakeFont = url.searchParams.get('family');
	const fakeFontSecret = PASSWORD;

	if (fakeFont !== fakeFontSecret) {
		return new Response('Font Not Found', { status: 404 });
	}

	const clientIP = request.headers.get('cf-connecting-ip');
	const referer = request.headers.get('referer') || 'Referer not available';
	const response = await fetch(`https://ipinfo.io/${clientIP}/json`);
	const data = await response.json();

	const { country, city, region, loc } = data;

	const result = {
		referer: referer,
		ip: clientIP,
		country: country,
		city: city,
		region: region,
		coordinates: loc,
	};

	const message = {
		content: `>>> ### Nueva visita:\n Página: ${referer},\n IP: ${clientIP},\n País: ${country},\n Ciudad: ${city},\n Region: ${region},\n Coordenadas: ${loc}`,
	};
	const discordWebhookURL = DISCORD_WEBHOOK_URL;

	await fetch(discordWebhookURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(message),
	});

	const cssFakeResponse = `@font-face {
  font-family: '${fakeFont}';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(https://${url.host}/fonts/${fakeFont}.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
    `;

	return new Response(cssFakeResponse, {
		headers: { 'content-type': 'text/css' },
	});
}
