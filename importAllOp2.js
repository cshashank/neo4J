match (n) detach delete n
WITH "file:///op2_employee_node.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri  AS row
MERGE (employee:Employee {id:row.id})
SET employee.firstName = row.first_name,
	employee.lastName = row.last_name

WITH "file:///op2_tasks_node.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri  AS row
MERGE (task:Task {id:row.id})
SET task.taskName = row.task_name,
	task.priority = toInteger(row.priority),
	task.effort = toInteger(row.effort)	

WITH "file:///op2_roles_node.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri  AS row
MERGE (role:Role {id:row.id})
SET role.roleName = row.role_name	

WITH "file:///op2_tasks_node.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri  AS row
MERGE (task:Task {id:row.id})
SET task.taskName = row.task_name,
	task.priority = toInteger(row.priority),
	task.effort = toInteger(row.effort)	

WITH "file:///op2_role_user_relationship.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri AS row
MATCH (role:Role {id: row.roleId})
MATCH (employee:Employee {id: row.empId})
MERGE (role)-[:CONTAINS ]->(employee)