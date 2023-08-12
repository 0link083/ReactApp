CREATE TABLE employees
(
    id SERIAL,
    name text,
    title text,
    avatarurl text,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
);

INSERT INTO employees(name, title, avatarurl) VALUES
 ('Chewbacca', 'Mechanic','https://podfanz.com/wp-content/uploads/2019/06/chewbacca_photograph_square_sticker-r1adf54f271d94bba90fc477a6d213997_0ugmc_8byvr_699.jpg'),
 ('Yoda', 'Jedi Master', 'https://i.imgflip.com/3wxdg2.png'),
 ('Obi-Wan Kenobi', 'Jedi Master','https://staticg.sportskeeda.com/editor/2022/06/1e4c9-16556208946670-1920.jpg'),
 ('Darth Vader', 'Dark Lord of the Sith', 'https://i.imgflip.com/3wxdg2.png'),
 ('Luke Skywalker', 'Jedi Knight', 'https://i.imgflip.com/3wxdg2.png'),
 ('Leia Organa', 'Princess of Alderaan', 'https://static.wikia.nocookie.net/disney-star-wars/images/e/e9/Leia_Endor_PROMO.png'),
 ('Han Solo', 'Smuggler', 'https://d33wubrfki0l68.cloudfront.net/cb29bdbd3117fc389b6c04b294a52e908fa2e025/93c4e/_images/square-how-much-did-han-solo-owe.jpg');