CREATE TABLE IF NOT EXISTS game_store.users(
	email TEXT PRIMARY KEY,
	first_name VARCHAR ( 25 ),
	last_name VARCHAR ( 25 ),
	password TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT now(),
	avatar TEXT DEFAULT 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbanner2.kisspng.com%2F20180422%2Fboq%2Fkisspng-joystick-nintendo-switch-pro-controller-game-contr-game-guild-logo-5adc6079ab77e5.6125672515243920577023.jpg&f=1&nofb=1'
);

INSERT INTO game_store.users(email, first_name, last_name, password)
VALUES 
		('yoni.81416@gmail.com', 'Yoni', 'Yakub', '1234'),
		('anton.yakub@yahoo.com', 'Anton', 'Yakub', 'abcd'),
		('irina.yakub@yahoo', 'Irina', 'Yakub', '123');