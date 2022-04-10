create table dish (
	id serial primary key,
	name varchar(100) not null
);

create table dish_ingridients (
	id serial primary key,
	dish_id int not null,
	product_id int not null,
	weight_gr int not null,
	constraint fk_dish_ingridients_dish foreign key (dish_id) references dish(id)
);

insert into dish(name) values 
('una salad по-вегетариански'),
('Азиатский салат с сырными шариками'),
('А-ля рыбные бутерброды');

insert into dish_ingridients(dish_id, product_id, weight_gr) values
(1, 8, 100),
(1, 9, 100),
(1, 10, 300),
(1, 11, 20),
(1, 12, 20),
(1, 13, 70),
(1, 14, 1),
(1, 15, 1),
(1, 16, 20),
(2, 1, 200),
(2, 17, 40),
(2, 18, 20),
(2, 19, 4),
(2, 20, 20),
(2, 21, 150),
(2, 15, 5),
(2, 12, 15),
(2, 22, 50),
(2, 23, 300),
(2, 24, 80),
(2, 25, 40),
(3, 3, 250),
(3, 26, 150),
(3, 27, 150),
(3, 28, 70),
(3, 22, 25),
(3, 29, 5);

