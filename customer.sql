-- to make and use the database
DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;
-- to create the table
CREATE TABLE products (
  item_id INT(100) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10, 4) NULL,
  stock_quantity INT (100) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire Starter", "Survival", "20.00", "54");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", "15.00", "67");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Purifier", "Survival", "35.95", "19");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket", "Clothing", "29.00", "43");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grateful Dead Patch", "Vintage", "25.00", "13");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hemp Seeds", "Food", "7.95", "74");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Prince Button Collection", "Vintage", "49.00", "81");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza", "Food", "12.00", "56");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lacrosse Stick", "Sports", "180.00", "29");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mouthguard", "Sports", "8.00", "40");
