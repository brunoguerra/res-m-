const indexHtml = (nodeString, relayPayload) => `
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>TheApp</title>
<link rel="stylesheet" href="/assets/styles.css">
</head>

<body>
<div id="root">${nodeString}</div>

<script>
window.__RELAY_PAYLOADS__ = ${relayPayload}
</script>
<script src="/assets/bundle.js"></script>
</body>

</html>
`

export default indexHtml
