
exports.up = function(knex, Promise) {
  return knex.raw(`
  CREATE TABLE records 
  (
    id SERIAL PRIMARY KEY,
    user_id varchar(255), 
    app_name  varchar(255), 
    message varchar(255), 
    level varchar(255), 
    created_at bigint, 
    updated_at bigint
  ); 
  
  CREATE OR REPLACE FUNCTION notify_trigger() RETURNS trigger AS $$
DECLARE
BEGIN
  PERFORM pg_notify('watchers', TG_TABLE_NAME || NEW.id || NEW.message || NEW.level);
  RETURN new;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER watched_table_trigger AFTER INSERT ON records
FOR EACH ROW EXECUTE PROCEDURE notify_trigger();
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
  DROP TABLE records;
`);
};
