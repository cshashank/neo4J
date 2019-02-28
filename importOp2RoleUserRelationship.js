WITH "file:///op2_role_user_relationship.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri AS row
MATCH (role:Role {id: row.roleId})
MATCH (employee:Employee {id: row.empId})
MERGE (role)-[:CONTAINS ]->(employee)