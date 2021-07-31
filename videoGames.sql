CREATE SCHEMA game_store;

CREATE TABLE game_store.companies (
	company_name VARCHAR ( 25 ) PRIMARY KEY,
	country_origin VARCHAR ( 20 ) NOT NULL,
	ceo VARCHAR ( 50 ) NOT NULL,
	logo TEXT DEFAULT 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png&f=1&nofb=1'
);

CREATE TABLE game_store.video_games (
	game_name TEXT PRIMARY KEY,
	company_name VARCHAR ( 25 ) NOT NULL,
	price REAL NOT NULL,
	logo TEXT DEFAULT 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbanner2.kisspng.com%2F20180422%2Fboq%2Fkisspng-joystick-nintendo-switch-pro-controller-game-contr-game-guild-logo-5adc6079ab77e5.6125672515243920577023.jpg&f=1&nofb=1',
	FOREIGN KEY (company_name) REFERENCES game_store.companies (company_name) ON DELETE CASCADE
);

CREATE TABLE game_store.genres (
	genre_name VARCHAR ( 20 ) PRIMARY KEY
);

CREATE TABLE game_store.game_genres (
	game_name TEXT FOREIGN KEY REFERENCES game_store.video_games (game_name) NOT NULL ON DELETE CASCADE,
	genre_name VARCHAR ( 20 ) FOREIGN KEY REFERENCES game_store.genres (genre_name) NOT NULL ON DELETE CASCADE,
	PRIMARY KEY (game_name, genre_name)
);