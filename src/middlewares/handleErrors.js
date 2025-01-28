function handleErrors(error, response, statusCode = 400) {
    response.writeHead(statusCode, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: error.message || "Bad Request" }));
}
