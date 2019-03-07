MATCH (source:Task {id: "t001"}),      
	(destination:Task {id: "t011"})
CALL algo.shortestPath.stream(source, destination,  "effort")
YIELD nodeId, cost
RETURN algo.getNodeById(nodeId).id AS task, cost