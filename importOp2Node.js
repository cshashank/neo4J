WITH "file:///op2_node.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri  AS row
MERGE (employee:Employee {id:row.id})
SET employee.firstName = row.frist_name,
	employee.firstName = row.frist_name