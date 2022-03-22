--liquibase formatted sql

--changeset vtsarenko:initial-schema-import-1
create table ingridient (
    id serial primary key,
    name varchar(100) not null,
    calories int not null,
    protein int not null,
    fats int not null,
    carbs int not null
);
--rollback drop table ingridient;
