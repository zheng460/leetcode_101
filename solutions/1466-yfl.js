/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}


 Clarification: 
 1) Can we make sure n and conections are always valid? yes. 
 2) is n > 0? yes, n >= 2

 Algorithm: using dfs on created graph via map with a variable count as result.        
 1) build a graph via map, where key is node, value is a list of neibors => key: 0, value: [[1, 1], [4, 0]]
                                                                                          nei weight
 2) using dfs, base case is a)when there is no more child, no more neibor, b)the neibor not in map. 

 Time complexity: O(n) -> number of nodes in dfs of tree, each node only add which is constant time. 
 Space complexity: O(n) -> a) map use O(n); b) traverse of height of tree is O(n) on call stack. 
 */
var minReorder = function(n, connections) {
    // We clarified that n and connections have no edge cases.
    // n >= 2; connections is valid;
    let result = [0], graph = new Map();

    // build a map;
    for (let pair of connections) {
        let from = pair[0], to = pair[1];
        // if from goto to, then we think it is not we want we put 1 as weight. 
        if (!graph.has(from)) graph.set(from, [[to, 1]]);
        else graph.get(from).push([to, 1]);

        // In order to keep all neibors: 
        if (!graph.has(to)) graph.set(to, [[from, 0]]);
        else graph.get(to).push([from, 0]);
    }
    console.log("Graph map: ", graph);

    //curNode, parent, graph, result.
    dfs(0, -1, graph, result);
    return result[0];
};

var dfs = function(curNode, parent, graph, result) {
    // base case: 
    if (!graph.has(curNode)) return;

    // traverse neibors and update result
    for (let nei of graph.get(curNode)) {
        let neighbor = nei[0], sign = nei[1];
        if (neighbor !== parent) {
            // console.log("curNode, parent, sign, nei", curNode, parent, sign, neighbor);
            result[0] += sign;
            dfs(neighbor, curNode, graph, result);
        }
    }
}
