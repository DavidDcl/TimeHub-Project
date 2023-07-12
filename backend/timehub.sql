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
        `title` VARCHAR(150) NOT NULL,
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
        'Loulou',
        'Albert',
        'Einstein',
        '1900PC'
    );

INSERT INTO
    `posts` (`title`, `content`, `author`)
VALUES (
        'My first post',
        'Is really awesome',
        1
    );

-- SELECT p.id, p.title, p.content, u.firstname, u.lastname, u.picture

-- FROM posts p

-- JOIN users u ON  p.author = u.id