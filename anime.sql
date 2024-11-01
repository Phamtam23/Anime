
create database db_webanime
go
use db_webanime
go
-- Bảng Account
CREATE TABLE Account (
    accountName VARCHAR(50) PRIMARY KEY,
    passWord VARCHAR(50) NOT NULL,
    userName NVARCHAR(50),
    role int
);
go

-- thể loại
Create Table Type_anime(
	  id_type INT PRIMARY KEY IDENTITY(1,1) ,
	  name_type NVARCHAR(50)
)
go

-- Quốc gia
Create Table Nation(
	  id_Nation INT PRIMARY KEY IDENTITY(1,1) ,
	  name_type NVARCHAR(50)
)
go
--
-- Bảng Anime
CREATE TABLE Anime (
    id_anime INT PRIMARY KEY IDENTITY(1,1) ,
    name NVARCHAR(100) NOT NULL,
    day_start date,
    author NVARCHAR(50),
    content TEXT,
    status bit, -- 0 là chưa xong
  	number_episode int,
	image_outside text,
	image_inside text,
	number_like int,
	number_watch int,
	id_Nation int,
	id_type int,
	foreign key (id_Nation) references Nation(id_Nation),
	foreign key (id_type) references Type_anime(id_type)
   
);
go
-- Tập
CREATE TABLE Episode (
    id_episode INT PRIMARY KEY IDENTITY(1,1) ,
    id_anime INT,
	season int,
    name_episode NVARCHAR(10),
    video VARCHAR(255),
    FOREIGN KEY (id_anime) REFERENCES Anime(id_anime)
);
go
-- Bảng Comment
CREATE TABLE Comment (
	id_commnet INT PRIMARY KEY IDENTITY(1,1) ,
    accountName VARCHAR(50),
	id_episode INT,
    content TEXT,
	FOREIGN KEY (id_episode) REFERENCES Anime(id_anime),
	FOREIGN KEY (accountName) REFERENCES  Account(accountName)

);
go
-- Bảng Repose_Comment
CREATE TABLE Repose_Comment (
	id_repose INT PRIMARY KEY IDENTITY(1,1) ,
    id_comment INT ,
    accountName VARCHAR(50),
	content TEXT,
    FOREIGN KEY (id_comment) REFERENCES Comment(id_commnet),
    FOREIGN KEY (accountName) REFERENCES Account(accountName)
);








insert into Account values('admin','admin','admin',0),
						('nhavien1','nhanvien','Thanh lý',1),
							('tam','tam','123',2)
go


--Insert
insert into Type_anime(name_type) values (N'Hành động'),(N'Phiêu lưu'),(N'Hài hước'),(N'Đời sống'),(N'Khoa học'),(N'Giả tưởng'),(N'Phép ')

insert into Nation(name_type) values (N'Nhật Bản'),(N'Trung Quốc'),(N'Việt Nam'),(N'Hàn Quốc')

insert into Anime(name,day_start,author,content,status,number_episode,image_inside,image_outside,number_like,number_watch,id_Nation,id_type) values 
		(N'One pice','01-01-2013',N'Phạm Tâm',N'Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,132,1,1),
		(N'One pice','01-01-2013',N'Phạm Tâm',N'Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',112,12,1,1),
		(N'One pice','01-01-2014',N'Phạm Tâm',N'Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,142,1,1),
		(N'One pice','01-01-2013',N'Phạm Tâm',N'Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',142,142,1,1),
		(N'One pice','01-01-2020',N'Phạm Tâm',N'Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',152,12,1,1),
		(N'One pice','01-01-2013',N'Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',132,12,1,1),
		(N'One pice','01-01-2016',N'Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,12,1,1),
		(N'One pice','01-01-2022',N'Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',142,12,1,1),
		(N'One pice','01-01-2013',N'Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,12,1,1),
		(N'One pice','01-01-2013',N'Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',102,142,1,1),
		(N'One pice','01-01-2033','Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,12,1,1),
		(N'One pice','01-01-2013','Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,192,1,1),
		(N'One pice','01-01-2023','Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',412,12,1,1),
		(N'One pice','01-01-2013','Phạm Tâm','Kể về hành trình đi chơi',0,1,'fsdfsd','fsdfsd',12,12,1,1)



go

UPDATE Anime 
SET 
    name = N'One Piece Updated', 
    day_strart = '01-02-2014', 
    author = N'Phạm Tâm Updated', 
    content = N'Cập nhật hành trình đi chơi', 
    status = 1, 
    number_episode = 2, 
    image_inside = 'updated_fsdfsd', 
    image_outside = 'updated_fsdfsd', 
    number_like = 15, 
    number_watch = 150, 
    id_Nation = 2, 
    id_type = 2 
WHERE id_anime = 1;


-- top anime
select * from anime where number_watch in
		(select distinct top 3 number_watch from Anime order by number_watch desc )


select * from anime where day_strart in
		(select distinct top 3 day_strart from Anime order by day_strart desc )


select * from anime where number_like in
		(select distinct top 3 number_like from Anime order by number_like desc )


select * from Anime where name like 'm%'




--nation

select * from Nation
update  Nation  set name_type=N'Việt Nam' where id_Nation=3



select * from Type_anime


select * from Account