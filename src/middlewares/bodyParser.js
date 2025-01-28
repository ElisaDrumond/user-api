function bodyParser(request, callback) {
    let body = '';

    request.on('data', (chunk) => {
        body += chunk;
    });

    request.on('end', () => {
        try {
            body = JSON.parse(body);
            request.body = body;
            callback();

        } catch (error) {
            request.body = null;
            callback(new Error('Invalid JSON payload'));
        }
    });
}

module.exports = bodyParser;