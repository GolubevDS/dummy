const fs = require('node:fs');
const path = require('node:path');

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
		const { users = [] } = db;

		const userFromBd = users.find(
			(user) => user.username === username && user.password === password,
		);

		if (userFromBd) {
			delete userFromBd.password;
			return res.json(userFromBd);
		}

		return res.status(403).json({ message: 'User not found' });
	} catch (e) {
		return res.status(500).json({ message: e.message });
	}
});

server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}

	next();
});

server.use(router);

server.listen(8000);
