create database if not exists clientes_miprogreso;
use clientes_miprogreso;
create table if not exists usuarios (
id int auto_increment primary key,
nombre varchar(255) not null,
apellido varchar(255)not null,
email varchar(255)not null,
provincia varchar(255)not null,
localidad varchar(255)not null,
codigo_postal int not null,
medio_pago varchar(255) not null
);
