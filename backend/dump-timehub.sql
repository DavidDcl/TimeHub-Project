-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)

--

-- Host: 127.0.0.1    Database: timehub

-- ------------------------------------------------------

-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!50503 SET NAMES utf8mb4 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

--

-- Table structure for table `users`

--

DROP TABLE IF EXISTS `users`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `users` (
        `id` int NOT NULL AUTO_INCREMENT,
        `nickname` varchar(20) NOT NULL,
        `firstname` varchar(20) NOT NULL,
        `lastname` varchar(20) NOT NULL,
        `era` varchar(20) NOT NULL,
        `picture` varchar(150) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `users`

--

LOCK TABLES `users` WRITE;

/*!40000 ALTER TABLE `users` DISABLE KEYS */

;

INSERT INTO `users`
VALUES (
        1,
        'E=mc²',
        'Albert',
        'Einstein',
        '1900',
        NULL
    ), (
        2,
        'Reine_Du_Nil',
        'Cleopatra',
        'Patra',
        '-69',
        NULL
    ), (
        3,
        'Italia_Ekip',
        'Leonardo',
        'de Vinci',
        '1480',
        NULL
    ), (
        4,
        'OubaOuba',
        'Lucy',
        'Magnon',
        '-3.2M',
        NULL
    ), (
        5,
        'Pomme_dapi',
        'Isaac',
        'Newton',
        '1780',
        NULL
    ), (
        6,
        'Grand-Homme',
        'Napoleon',
        'Bonaparte',
        '1800',
        NULL
    ), (
        7,
        'Tothemoon',
        'Elon',
        'Musk',
        '2022',
        NULL
    ), (
        8,
        'Elektric',
        'Nikola',
        'Tesla',
        '1900',
        NULL
    ), (
        9,
        'Vini_Vidi_Vici',
        'Julius',
        'Caesar',
        '-50',
        NULL
    ), (
        10,
        'Dream',
        'Martin Luther',
        'King',
        '1950',
        NULL
    ), (
        11,
        'Rage_quit',
        'Louis',
        'Pasteur',
        '1850',
        NULL
    ), (
        12,
        'Radium',
        'Marie',
        'Curie',
        '1900',
        NULL
    ), (
        13,
        'Poupoupidou',
        'Marilyn',
        'Monroe',
        '1945',
        NULL
    ), (
        14,
        'MarieSansTete',
        'Marie',
        'Antoinette',
        '1780',
        NULL
    );

/*!40000 ALTER TABLE `users` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `posts`

--

DROP TABLE IF EXISTS `posts`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `posts` (
        `id` int NOT NULL AUTO_INCREMENT,
        `content` text NOT NULL,
        `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
        `author` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `author` (`author`),
        CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 133 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `posts`

--

LOCK TABLES `posts` WRITE;

/*!40000 ALTER TABLE `posts` DISABLE KEYS */

;

INSERT INTO `posts`
VALUES (
        1,
        'Mon premier message est vraiment relatif.',
        '2023-07-13 08:12:39',
        1
    ), (
        2,
        'Quoi, mon nez ?! Qu\'est-ce qu\'il a mon nez ?',
        '2023-07-13 08:12:39',
        2
    ), (
        4,
        'test edité',
        '2023-07-13 08:12:39',
        13
    ), (
        5,
        'Le hasard porte quelquefois en avant ceux que la modestie retient en arrière.',
        '2023-07-13 08:12:39',
        11
    ), (
        6,
        'A-t-on jamais fait construire trois cents navires de guerre sans qu’il y ait la guerre ?',
        '2023-07-13 08:12:39',
        2
    ), (
        7,
        'J’ai appris que la voie du progrès n’était ni rapide ni facile.',
        '2023-07-13 08:12:39',
        12
    ), (
        8,
        'Les hommes croient ce qu\'ils désirent.',
        '2023-07-13 08:12:39',
        9
    ), (
        9,
        'La folie est de toujours se comporter de la même manière et de s’attendre à un résultat différent.',
        '2023-07-13 08:12:39',
        1
    ), (
        10,
        'Les malentendus sont toujours causés par l\'incapacité à apprécier le point de vue d\'autrui.',
        '2023-07-13 08:12:39',
        8
    ), (
        11,
        'La mort n\'est rien, mais vivre vaincu et sans gloire, c\'est mourir tous les jours.',
        '2023-07-13 08:12:39',
        6
    ), (
        12,
        'La sagesse est fille de l\'expérience.',
        '2023-07-13 08:12:39',
        3
    ), (
        13,
        'Je fais le rêve que mes quatre jeunes enfants vivront un jour dans une nation où ils ne seront pas jugés par leur couleur de peau mais à la mesure de leur caractère. Je fais un rêve aujourd\'hui.',
        '2023-07-13 08:12:39',
        10
    ), (
        14,
        'Deux choses sont infinies : l\'Univers et la bêtise humaine. Mais en ce qui concerne l\'Univers, je n\'en ai pas encore acquis la certitude absolue.',
        '2023-07-13 08:12:39',
        1
    ), (
        15,
        'La peinture est une poésie qui se voit au lieu de se sentir et la poésie est une peinture qui se sent au lieu de se voir.',
        '2023-07-13 08:12:39',
        3
    ), (
        16,
        'C’est l’humeur et l’état d’esprit d’une femme qu’un homme doit stimuler pour que le sexe ait un intérêt. L’amant, le vrai, est celui qui vous fait fondre rien qu’en vous touchant la tête, en vous souriant droit dans les yeux.',
        '2023-07-13 08:12:39',
        13
    ), (
        17,
        'Pensez à être moins curieux des personnes que de leurs idées.',
        '2023-07-13 08:12:39',
        12
    ), (
        18,
        'La paix est un mot vide de sens ; c\'est une paix glorieuse qu\'il nous faut.',
        '2023-07-13 08:12:39',
        6
    ), (
        19,
        'Sachez vous éloigner, car quand vous reviendrez à votre travail, votre jugement sera plus sûr.',
        '2023-07-13 08:12:39',
        3
    ), (
        20,
        'Je me refuse à avoir l’amour pour maître !',
        '2023-07-13 08:12:39',
        2
    ), (
        21,
        'La vie n’est facile pour aucun de nous. Mais quoi, il faut avoir de la persévérance, et surtout de la confiance en soi. Il faut croire que l’on est doué pour quelque chose, et que, cette chose, il faut l’atteindre coûte que coûte.',
        '2023-07-13 08:12:39',
        12
    ), (
        22,
        'Une belle femme plaît aux yeux, une bonne femme plaît au coeur ; l\'une est un bijou, l\'autre un trésor.',
        '2023-07-13 08:12:39',
        6
    ), (
        23,
        'Tiiiiiimeeee Huuuuuuuub !!! Houba !!!',
        '2023-07-13 08:12:39',
        4
    ), (
        24,
        'L’imperfection est beauté, la folie est génie et il vaut mieux être totalement ridicule que totalement ennuyeux.',
        '2023-07-13 08:12:39',
        13
    ), (
        25,
        'Les scientifiques d\'aujourd\'hui ont substitué les mathématiques aux expériences, et ils s\'égarent d\'équation en équation, pour finalement construire une structure qui n\'a aucun rapport avec la réalité.',
        '2023-07-13 08:12:39',
        8
    ), (
        26,
        'Si vous vous levez le matin en vous disant que l’avenir sera meilleur, c’est une belle journée. Sinon, ce n’en est pas une.',
        '2023-07-13 08:12:39',
        7
    ), (
        27,
        'Ouga bouga',
        '2023-07-13 08:12:39',
        4
    ), (
        28,
        'Celui qui ressent sa propre vie et celle des autres comme dénuées de sens est fondamentalement malheureux, puisqu\'il n\'a aucune raison de vivre.',
        '2023-07-13 08:12:39',
        1
    ), (
        29,
        'En sciences, nous devons nous intéresser aux choses, pas aux personnes.',
        '2023-07-13 08:12:39',
        12
    ), (
        30,
        'De tous les peuples gaulois, les Belges sont les plus braves.',
        '2023-07-13 08:12:39',
        9
    ), (
        31,
        'Il y a ceux qui craignent l’ambition de César. Mais qu’y a-t-il à craindre ? Qu’il détruise un jour la république ? Oui, il le fera. Je vous promets qu’il le fera.',
        '2023-07-13 08:12:39',
        2
    ), (
        32,
        'Je sais calculer le mouvement des corps pesants, mais pas la folie des foules.',
        '2023-07-13 08:12:39',
        5
    ), (
        33,
        'Je suis égoïste, impatiente et peu sûre de moi. Je fais des erreurs, je suis hors de contrôle et parfois difficile à gérer. Mais si vous ne pouvez pas me supporter pour le pire, nul doute que vous ne me méritez pas pour le meilleur. ',
        '2023-07-13 08:12:39',
        13
    ), (
        34,
        'Un dealer de rue a plus de connaissance sur comment gérer une boite que 95% des professeurs de business administration .',
        '2023-07-13 08:12:39',
        7
    ), (
        35,
        'Premier principe: ne jamais se laisser abattre par des personnes ou par des événements.',
        '2023-07-13 08:12:39',
        12
    ), (
        36,
        'Les hommes construisent trop de murs et pas assez de ponts.',
        '2023-07-13 08:12:39',
        5
    ), (
        37,
        'Si vous dissuadez des gens d\'utiliser une voiture autonome, vous tuez des gens',
        '2023-07-13 08:12:39',
        7
    ), (
        38,
        'Une carrière est née en public, le talent en privé. ',
        '2023-07-13 08:12:39',
        13
    ), (
        39,
        'Quand on veut on peut, quand on peut on doit.',
        '2023-07-13 08:12:39',
        6
    ), (
        40,
        'L\'idée de l\'énergie atomique est illusoire, mais elle a pris une telle emprise sur les esprits que, bien que je prêche contre elle depuis vingt-cinq ans, il y a encore des gens qui croient qu\'elle est réalisable.',
        '2023-07-13 08:12:39',
        8
    ), (
        41,
        'Ceux qui aiment marcher en rangs sur une musique : ce ne peut être que par erreur qu’ils ont reçu un cerveau, une moelle épinière leur suffirait amplement.',
        '2023-07-13 08:12:39',
        1
    ), (
        42,
        'La science enfante chaque jour des prodiges. Vous avez voulu témoigner une fois de plus de l\'impression profonde que le monde, les habitudes de la vie, les lettres à leur tour reçoivent de tant de découvertes accumulées',
        '2023-07-13 08:12:39',
        11
    ), (
        43,
        'Ce que l\'on désire ardemment, constamment, on l\'obtient toujours.',
        '2023-07-13 08:12:39',
        6
    ), (
        44,
        'Une injustice où qu\'elle soit est une menace pour la justice partout. Nous sommes tous inéluctablement pris dans un réseau de relations mutuelles, liés par un destin commun. Tout ce qui affecte directement quelqu\'un, nous affecte tous indirectement.',
        '2023-07-13 08:12:39',
        10
    ), (
        45,
        'Le sot a un grand avantage sur l\'homme d\'esprit : il est toujours content de lui-même.',
        '2023-07-13 08:12:39',
        6
    ), (
        46,
        'L\'argent ne représente pas la valeur que les hommes lui ont attribuée. Tout mon argent a été investi dans des expériences avec lesquelles j\'ai fait de nouvelles découvertes permettant à l\'humanité d\'avoir une vie un peu plus facile.',
        '2023-07-13 08:12:39',
        8
    ), (
        47,
        'Feu ! Je vouloir feu !',
        '2023-07-13 08:12:39',
        4
    ), (
        48,
        'Dans les révolutions, il y a deux sortes de gens : ceux qui les font et ceux qui en profitent.',
        '2023-07-13 08:12:39',
        6
    ), (
        49,
        'Dieu n\'est pas l\'éternité, il n\'est pas l\'infini, mais il est éternel et infini. Il n\'est ni la durée ni l\'espace, mais il a existé de tout temps et sa présence est partout.',
        '2023-07-13 08:12:39',
        5
    ), (
        51,
        'J’aimerais bien mourir sur Mars, mais pas pendant l’impact.',
        '2023-07-13 08:12:39',
        7
    ), (
        52,
        'Le roi n’a qu’un homme, c’est sa femme.',
        '2023-07-13 08:12:39',
        14
    ), (
        53,
        'J\'ai vu plus loin que les autres parce que je me suis juché sur les épaules de géants.',
        '2023-07-13 08:12:39',
        5
    ), (
        54,
        'Je pense que les gens ordinaires peuvent choisir d’être extraordinaires.',
        '2023-07-13 08:12:39',
        7
    ), (
        55,
        'Groumpf',
        '2023-07-13 08:12:39',
        4
    ), (
        56,
        'L’expérience, voilà le maître en toutes choses. ',
        '2023-07-13 08:12:39',
        9
    ), (
        57,
        'Le vin peut-être à bon droit considéré comme la plus saine, la plus hygiénique des boissons. ',
        '2023-07-13 08:12:39',
        11
    ), (
        58,
        'Avec l\'intelligence artificielle, nous invoquons le démon.',
        '2023-07-13 08:12:39',
        7
    ), (
        59,
        'De toutes les choses, celles que je préfère sont les livres. Mon père avait une grande bibliothèque et chaque fois que je le pouvais, j\'essayais d\'assouvir ma passion pour la lecture.',
        '2023-07-13 08:12:39',
        8
    ), (
        60,
        'La vraie justice n\'est pas simplement l\'absence de tension, mais la présence de la justice.',
        '2023-07-13 08:12:39',
        10
    ), (
        61,
        'La valeur morale ne peut pas être remplacée par la valeur intelligence et j\'ajouterai : Dieu merci !',
        '2023-07-13 08:12:39',
        1
    ), (
        62,
        'Je chasser gros mammouth, moi manger gros mammouth',
        '2023-07-13 08:12:39',
        4
    ), (
        63,
        'Laissez à l\'avenir le soin de dire la vérité et d\'évaluer chacun en fonction de son travail et de ses réalisations. Le présent est le leur, le futur, pour lequel j\'ai vraiment travaillé, est le mien...',
        '2023-07-13 08:12:39',
        8
    ), (
        64,
        'Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.',
        '2023-07-13 08:12:39',
        7
    ), (
        65,
        'Comment ça, je suis petit ?! Sachez qu\'Alexandre Le Grand lui-même n\'était pas plus grand que moi ! ',
        '2023-07-13 08:12:39',
        6
    ), (
        66,
        'Le développement continu de l\'homme dépend de façon vitale de l\'invention. Celle-ci est le fruit le plus important de son cerveau créatif. Son but ultime est la maîtrise complète de l\'esprit sur le monde matériel, la mise à profit des forces de la nature pour les besoins de l\'homme. C\'est la tâche difficile de l\'inventeur qui est souvent incompris et non reconnu.',
        '2023-07-13 08:12:39',
        8
    ), (
        67,
        'La guerre confère aux conquérants le droit d\'imposer n\'importe quelle condition aux vaincus. ',
        '2023-07-13 08:12:39',
        9
    ), (
        68,
        'Laboratoires et découvertes sont des termes corrélatifs. Supprimez les laboratoires, les sciences physiques deviendront l\'image de la stérilité et de la mort.',
        '2023-07-13 08:12:39',
        11
    ), (
        69,
        'Tout propos soutenu l’accable, toute réflexion le déroute. ',
        '2023-07-13 08:12:39',
        14
    ), (
        70,
        'Il y eut un violent combat. On les attaqua dans l\'eau, qui gênait leurs mouvements et l\'on en tua un grand nombre ; les autres, pleins d\'audace, essayaient de passer par-dessus les cadavres. Une grêle de traits les repoussa ; ceux qui avaient déjà passé, la cavalerie les enveloppa et ils furent massacrés.',
        '2023-07-13 08:12:39',
        9
    ), (
        71,
        ' Mon Dieu, guidez-nous, protégez-nous, nous régnons trop jeunes !',
        '2023-07-13 08:12:39',
        14
    ), (
        72,
        'Dieu, qui connaît le mieux les capacités des hommes, cache ses mystères aux sages et aux prudents de ce monde, et les révèle aux petits enfants.',
        '2023-07-13 08:12:39',
        5
    ), (
        73,
        'La non-violence est une arme puissante et juste, qui tranche sans blesser et ennoblit l\'homme qui la manie. C\'est une épée qui guérit.',
        '2023-07-13 08:12:39',
        10
    ), (
        74,
        'Être antisocial dans un monde rempli de gens conformistes est un signe d\'intelligence.',
        '2023-07-13 08:12:39',
        8
    ), (
        75,
        'Le succès pousse beaucoup de gens à vous détester. J’aimerais qu’il en soit autrement. Ce serait merveilleux si on pouvait profiter du succès sans sentir la jalousie dans les yeux de ceux qui nous entourent.',
        '2023-07-13 08:12:39',
        13
    ), (
        76,
        '@Brutus Tu quoque mi fili',
        '2023-07-13 08:12:39',
        9
    ), (
        77,
        'Nous les déhérités de cette terre, nous qui avons été si longtemps opprimés, sommes fatigués de notre longue nuit de captivité. Et maintenant, nous aspirons à la liberté, la justice et l\'égalité.',
        '2023-07-13 08:12:39',
        10
    ), (
        78,
        'Quand la Chine s\'éveillera, le monde tremblera.',
        '2023-07-13 08:12:39',
        6
    ), (
        79,
        'L\'espace absolu, par nature sans relation avec quoi que ce soit d\'extérieur, reste toujours identique à lui-même et sans mouvement.',
        '2023-07-13 08:12:39',
        5
    ), (
        80,
        'Madame, si c\'est possible, c\'est fait ; impossible, cela se fera. ',
        '2023-07-13 08:12:39',
        14
    ), (
        81,
        'Quand on est enfin arrivé à la certitude, on éprouve l\'une des plus grandes joies que puisse ressentir l\'âme humaine.',
        '2023-07-13 08:12:39',
        11
    ), (
        82,
        'On ne fait jamais attention à ce qui a été fait ; on ne voit que ce qui reste à faire.',
        '2023-07-13 08:12:39',
        12
    ), (
        83,
        'Je crois que la vérité désarmée et l\'amour inconditionnel auront le mot de la fin en réalité. C\'est pourquoi le juste, même temporairement vaincu, est plus fort que le mal triomphant.',
        '2023-07-13 08:12:39',
        10
    ), (
        84,
        'Le virus est constitué par un parasite microscopique qu\'on multiplie aisément par la culture, en dehors du corps des animaux que le mal peut frapper.',
        '2023-07-13 08:12:39',
        11
    ), (
        85,
        'Ce ne sont pas les richesses, qui peuvent être perdues. La vertu est notre vrai bien et la vraie récompense de son possesseur. Elle ne peut être perdue, elle ne peut nous abandonner, sauf quand la vie s\'enfuit.',
        '2023-07-13 08:12:39',
        3
    ), (
        86,
        'La grandeur des actions humaines se mesure à l\'inspiration qui les fait naître. Heureux celui qui porte en soi un dieu, un idéal de la beauté et qui lui obéit : idéal de l\'art, idéal de la science, idéal de la patrie, idéal des vertus de l\'Évangile ! ',
        '2023-07-13 08:12:39',
        11
    ), (
        87,
        'Mes amis, j’irai à Paris avec mes enfants : c’est à l’amour de mes bons et fidèles sujets que je confie ce que j’ai de plus précieux.',
        '2023-07-13 08:12:39',
        14
    ), (
        88,
        'Je être Lucy',
        '2023-07-13 08:12:39',
        4
    ), (
        89,
        'La grandeur des actions humaines se mesure à l\'inspiration qui les fait naître.',
        '2023-07-13 08:12:39',
        11
    ), (
        90,
        'L’imagination est plus importante que le savoir.',
        '2023-07-13 08:12:39',
        1
    ), (
        91,
        'Agrougrou !!!',
        '2023-07-13 08:12:39',
        4
    ), (
        92,
        'Les conceptions les plus hardies, les spéculations les plus légitimes, ne prennent un corps et une âme que le jour où elles sont consacrées par l\'observation et l\'expérience.',
        '2023-07-13 08:12:39',
        11
    ), (
        93,
        'Dans la vie, rien n’est à craindre, tout est à comprendre.',
        '2023-07-13 08:12:39',
        12
    ), (
        94,
        'Créer une entreprise, c\'est comme préparer un gâteau : il faut doser chaque ingrédient dans les bonnes proportions.',
        '2023-07-13 08:12:39',
        7
    ), (
        95,
        'S’ils n’ont pas de pain, qu’ils mangent de la brioche. ',
        '2023-07-13 08:12:39',
        14
    ), (
        96,
        'La simplicité est le comble de la sophistication.',
        '2023-07-13 08:12:39',
        3
    ), (
        97,
        'Certaines peuplades ont des mannequins de proportions colossales, faits d\'osier tressé, qu\'on remplit d\'hommes vivants : on y met le feu et les hommes sont la proie des flammes. ',
        '2023-07-13 08:12:39',
        9
    ), (
        98,
        'Les détails font la perfection et la perfection n\'est pas un détail.',
        '2023-07-13 08:12:39',
        3
    ), (
        99,
        'Dieu ne joue pas aux dés.',
        '2023-07-13 08:12:39',
        1
    ), (
        100,
        'Chacun de nous doit travailler pour son propre perfectionnement et en même temps partager une responsabilité générale pour toute l’humanité.',
        '2023-07-13 08:12:39',
        12
    ), (
        101,
        'Ne te vante pas d’avoir été le premier dans mon cœur, si tu n’as pas été suffisamment intelligent pour être le dernier',
        '2023-07-13 08:12:39',
        13
    ), (
        102,
        'Téléphone pas bon ! Pas bon manger !',
        '2023-07-13 08:12:39',
        4
    ), (
        103,
        'Il n\'en est point d\'assez brave pour n\'être pas affolé par une situation si nouvelle.',
        '2023-07-13 08:12:39',
        9
    ), (
        104,
        'Dix mille difficultés ne font pas un doute.',
        '2023-07-13 08:12:39',
        5
    ), (
        105,
        'Personne ne m’a jamais dit que j’étais jolie quand j’étais une petite fille. Toutes les petites filles devraient s’entendre dire qu’elles sont jolies, même si ce n’est pas vrai.',
        '2023-07-13 08:12:39',
        13
    ), (
        106,
        'Ne parlez point allemand, Monsieur ; à dater de ce jour, je n\'entends plus d\'autre langue que le français.',
        '2023-07-13 08:12:39',
        14
    ), (
        107,
        'Le succès ne s\'explique pas. L\'échec ne s\'excuse pas.',
        '2023-07-13 08:12:39',
        6
    ), (
        108,
        'L\'air, dès que point le jour, est rempli d\'innombrables images auxquelles l’œil sert d\'aimant',
        '2023-07-13 08:12:39',
        3
    ), (
        109,
        'Une femme n’a pas besoin d’une personne qui n’a pas besoin d’elle. ',
        '2023-07-13 08:12:39',
        13
    ), (
        110,
        'L\'éternité était dans nos yeux et sur nos lèvres',
        '2023-07-13 08:12:39',
        2
    ), (
        111,
        'Une loi ne pourra jamais obliger un homme à m\'aimer, mais il est important qu\'elle lui interdise de me lyncher.',
        '2023-07-13 08:12:39',
        10
    ), (
        112,
        'La tradition des germains c\'est, quel que soit l\'agresseur, de se défendre et de ne pas implorer la paix. ',
        '2023-07-13 08:12:39',
        9
    ), (
        113,
        'Piètre disciple, qui ne surpasse pas son maître !',
        '2023-07-13 08:12:39',
        3
    ), (
        114,
        'Nous savons douloureusement, par l\'expérience, que la liberté n\'est jamais donnée volontairement par l\'oppresseur, elle doit exigée par les opprimés.',
        '2023-07-13 08:12:39',
        10
    ), (
        115,
        'Lorsque deux forces sont jointes, leur efficacité est double.',
        '2023-07-13 08:12:39',
        5
    ), (
        116,
        'Quand quelque chose a de l’importance, on le fait, même si les chances ne sont pas de notre côté.',
        '2023-07-13 08:12:39',
        7
    ), (
        117,
        'Tous les hommes ont naturellement au coeur l\'amour de la liberté et la haine de la servitude. ',
        '2023-07-13 08:12:39',
        9
    ), (
        118,
        'Ils peuvent être mes bourreaux, mais ils ne seront jamais mes juges.',
        '2023-07-13 08:12:39',
        14
    ), (
        120,
        'Dogecoin to the moon !!! ',
        '2023-07-13 08:12:39',
        7
    ), (
        121,
        'Petite balade le long du Nil, toujours entourée de mes serviteurs dévoués.',
        '2023-07-13 08:12:39',
        2
    ), (
        130,
        'J\'envoie',
        '2023-07-13 15:42:29',
        1
    );

/*!40000 ALTER TABLE `posts` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `comments`

--

DROP TABLE IF EXISTS `comments`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `comments` (
        `id` int NOT NULL AUTO_INCREMENT,
        `content` text NOT NULL,
        `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
        `post_id` int NOT NULL,
        `author` int NOT NULL,
        PRIMARY KEY (`id`),
        KEY `post_id` (`post_id`),
        KEY `author` (`author`),
        CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
        CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`author`) REFERENCES `users` (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `comments`

--

LOCK TABLES `comments` WRITE;

/*!40000 ALTER TABLE `comments` DISABLE KEYS */

;

INSERT INTO `comments`
VALUES (
        1,
        'test commentaire',
        '2023-07-13 08:13:21',
        1,
        7
    ), (
        4,
        'test edité',
        '2023-07-13 08:13:21',
        2,
        1
    ), (
        5,
        'T\'es au frais',
        '2023-07-13 10:42:48',
        121,
        1
    );

/*!40000 ALTER TABLE `comments` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Dumping routines for database 'timehub'

--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2023-10-09 10:15:31