create table measurements
(
	id                   bigint auto_increment primary key comment 'A unique identifier for the measurement',
	user_id              bigint unsigned                     not null comment 'Foreign key linking the user who owns this measurement',
	client_id            varchar(80)                         not null comment 'Foreign key linking to the Oauth API client that created the record',
	connector_id         int unsigned                        null comment 'Foreign key linking the connector data source from which the measurement was obtained',
	variable_id          int unsigned                        not null comment 'Foreign key linking the variable for which we are creating the measurement records',
	start_at             timestamp                       	 not null comment 'UTC start time for the measurement event in YYYY-MM-DD HH:MM:SS format',
	value                double                              not null comment 'The value of the measurement after conversion to the default unit for the common variable',
	unit_id              smallint unsigned                   not null comment 'The default unit for the common variable',
	original_value       double                              not null comment 'Value of measurement as originally submitted (before conversion to default unit defined by the common variable)',
	original_unit_id     smallint unsigned                   not null comment 'Foreign key linking the unit of measurement as originally submitted (before conversion to the default unit defined by the common variable)',
	duration             int(10)                             null comment 'Duration of the event being measured in seconds',
	note                 text                                null comment 'An optional note the user may include with their measurement',
	latitude             double                              null comment 'Latitude at which the measurement was taken',
	longitude            double                              null comment 'Longitude at which the measurement was taken',
	location             varchar(255)                        null comment 'A text description of the location at which the measurement was taken such as a city name or zip code',
	created_at           timestamp default CURRENT_TIMESTAMP not null comment 'UTC time the measurement record was created in YYYY-MM-DD HH:MM:SS format',
	updated_at           timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment 'UTC time the measurement record last modified in YYYY-MM-DD HH:MM:SS format',
	error                text                                null comment 'An error message if there is a problem with the measurement quality',
	variable_category_id tinyint unsigned                    not null comment 'Foreign key linking to the variable category',
	deleted_at           datetime                            null comment 'The UTC time the measurement as soft-deleted in the format YYYY-MM-DD HH:MM:SS',
	user_variable_id     int unsigned                        not null comment 'Foreign key linking to the user variable settings and statistics',
	connection_id        int(11) unsigned                    null comment 'ID of the user API connection from which the measurement was made',
	connector_import_id  int(11) unsigned                    null comment 'ID of the user API import batch from which the measurement was made',
	deletion_reason      varchar(280)                        null comment 'The reason the measurement was soft-deleted.',
	original_start_at    timestamp                           not null comment 'This field is used to store the original start_at value before rounding.  Rounding is done to prevent duplicate measurements from being entered. For instance, if one submitted a Daily Step Count measurement at 1:00:00 and another at 1:00:01, the second measurement would be rounded to 1:00:00 and the first measurement would be replaced.  ',
	constraint measurements_pk
		unique (user_id, variable_id, start_at),
	constraint measurements_client_id_fk
		foreign key (client_id) references oauth_clients (client_id),
	constraint measurements_connections_id_fk
		foreign key (connection_id) references connections (id),
	constraint measurements_connector_imports_id_fk
		foreign key (connector_import_id) references connector_imports (id),
	constraint measurements_connectors_id_fk
		foreign key (connector_id) references connectors (id),
	constraint measurements_original_unit_id_fk
		foreign key (original_unit_id) references units (id),
	constraint measurements_unit_id_fk
		foreign key (unit_id) references units (id),
	constraint measurements_user_id_fk
		foreign key (user_id) references users (id),
	constraint measurements_user_variables_user_variable_id_fk
		foreign key (user_variable_id) references user_variables (id),
	constraint measurements_variable_category_id_fk
		foreign key (variable_category_id) references variable_categories (id),
	constraint measurements_variables_id_fk
		foreign key (variable_id) references variables (id)
)
	comment 'Measurements are any value that can be recorded like a lab test result, daily steps, a mood rating, or apples eaten.'
	charset = utf8;

create index measurements_start_at_index
	on measurements (start_at);

create index measurements_user_id_variable_category_id_start_at_index
	on measurements (user_id, variable_category_id, start_at);

create index measurements_user_variables_variable_id_user_id_fk
	on measurements (variable_id, user_id);

create index measurements_variable_id_start_at_index
	on measurements (variable_id, start_at);

create index measurements_variable_id_value_start_at_index
	on measurements (variable_id, value, start_at);
