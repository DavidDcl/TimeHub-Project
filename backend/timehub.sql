-- Active: 1688391395018@@127.0.0.1@3306@timehub

DROP TABLE IF EXISTS `posts`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE
    `users` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `nickname` VARCHAR(20) NOT NULL,
        `firstname` VARCHAR(20) NOT NULL,
        `lastname` VARCHAR(20) NOT NULL,
        `era` VARCHAR(20) NOT NULL,
        `picture` VARCHAR(150),
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `posts` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `content` TEXT NOT NULL,
        `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
        `author` INTEGER NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`author`) REFERENCES `users` (id)
    );

INSERT INTO
    `users` (
        `nickname`,
        `firstname`,
        `lastname`,
        `era`
    )
VALUES (
        'E=mc²',
        'Albert',
        'Einstein',
        '1900'
    ), (
        'Reine_Du_Nil',
        'Cleopatra',
        'Patra',
        '-69'
    ), (
        'Italia_Ekip',
        'Leonardo',
        'de Vinci',
        '1480'
    ), (
        'OubaOuba',
        'Lucy',
        'Magnon',
        '-3.2M'
    ), (
        'Pomme_dapi',
        'Isaac',
        'Newton',
        '1780'
    ), (
        'Grand-Homme',
        'Napoleon',
        'Bonaparte',
        '1800'
    ), (
        'Tothemoon',
        'Elon',
        'Musk',
        '2022'
    ), (
        'Elektric',
        'Nikola',
        'Tesla',
        '1900'
    ), (
        'Vini_Vidi_Vici',
        'Julius',
        'Caesar',
        '-50'
    ), (
        'Dream',
        'Martin Luther',
        'King',
        '1950'
    ), (
        'Rage_quit',
        'Louis',
        'Pasteur',
        '1850'
    ), (
        'Radium',
        'Marie',
        'Curie',
        '1900'
    ), (
        'Poupoupidou',
        'Marilyn',
        'Monroe',
        '1945'
    ), (
        'MarieSansTete',
        'Marie',
        'Antoinette',
        '1780'
    );

INSERT INTO
    `posts` (`content`, `author`)
VALUES (
        'My first post is really relative',
        1
    );

-- SELECT p.id, p.title, p.content, u.firstname, u.lastname, u.picture

-- FROM posts p

-- JOIN users u ON  p.author = u.id