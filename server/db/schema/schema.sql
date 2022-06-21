DROP DATABASE IF EXISTS surf;
CREATE DATABASE surf;

\c surf;

DROP TABLE IF EXISTS forecasts CASCADE;
CREATE  TABLE forecasts (
	id                   varchar  NOT NULL  ,
	name                 varchar(100)  NOT NULL  ,
	latitude             double precision  NOT NULL  ,
	longitude            double precision  NOT NULL  ,
	forecast             json  NOT NULL  ,
	CONSTRAINT pk_forecasts PRIMARY KEY ( id )
 );

CREATE INDEX idx_forecasts_id ON forecasts  ( id );
