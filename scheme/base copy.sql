create schema personas;
use personas;
create table if not exists persona(
    id int not null auto_increment primary key,
    nombre varchar(45) not null
):
Engine=InnoDB