--1️⃣ INNER JOIN
--👉 Only matching records

SELECT 
    C.CustomerID,
    C.CustomerName,
    O.OrderID,
    O.OrderDate
FROM Customers C
INNER JOIN Orders O
ON C.CustomerID = O.CustomerID;

--2️⃣ LEFT JOIN (LEFT OUTER JOIN)
--👉 All customers + matching orders

SELECT 
    C.CustomerID,
    C.CustomerName,
    O.OrderID
FROM Customers C
LEFT JOIN Orders O
ON C.CustomerID = O.CustomerID;

--3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)
--👉 All orders + matching customers

SELECT 
    C.CustomerName,
    O.OrderID
FROM Customers C
RIGHT JOIN Orders O
ON C.CustomerID = O.CustomerID;

--4️⃣ FULL JOIN (FULL OUTER JOIN)
--👉 All customers + all orders (matched or not)

SELECT 
    C.CustomerName,
    O.OrderID
FROM Customers C
FULL OUTER JOIN Orders O
ON C.CustomerID = O.CustomerID;

--5️⃣ CROSS JOIN
--👉 Every customer × every order

SELECT 
    C.CustomerName,
    O.OrderID
FROM Customers C
CROSS JOIN Orders O;

--6️⃣ SELF JOIN
--👉 Table joined with itself
--Example: find customers from same city

SELECT 
    A.CustomerName,
    B.CustomerName,
    A.City
FROM Customers A
JOIN Customers B
ON A.City = B.City
AND A.CustomerID != B.CustomerID;