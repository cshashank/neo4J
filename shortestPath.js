MATCH (source:Task {id: "t001"}),      
	(destination:Task {id: "t011"})
CALL algo.shortestPath.stream(source, destination,  "distance")
YIELD nodeId, cost
RETURN algo.getNodeById(nodeId).id AS place, cost