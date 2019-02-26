WITH "file:///op2_relationship.csv"
AS uri
LOAD CSV WITH HEADERS FROM uri AS row
MATCH (employee:Employee {id: row.emp})
MATCH (task:Task {id: row.task})
MERGE (employee)-[:PERFORMS {prioriy: toInteger(row.priority), effort: toInteger(row.effort)}]->(task)