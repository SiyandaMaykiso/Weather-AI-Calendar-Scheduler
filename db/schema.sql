CREATE DATABASE weather_calendar;
USE weather_calendar;

create table activities(
	id int not null auto_increment,
	ACTIVITY varchar(255) not null,
    TEMP int not null,
    createdAt DATETIME default null,
    updatedAt DATETIME default null,
    primary key(id)
    )