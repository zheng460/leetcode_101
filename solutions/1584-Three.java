class Solution {
    public int minCostConnectPoints(int[][] points) {
        int length = points.length;
        if (length == 0) {
            return 0;
        }

        List<Node> nodes = new ArrayList<Node>();
        for (int i = 0; i < length; i++) {
            nodes.add(new Node(points[i][0], points[i][1]));
        }

        Map<Node, List<Edge>> graph = buildGraph(nodes);

        Set<Node> visited = new HashSet<Node>();
        PriorityQueue<Edge> curEdges = new PriorityQueue<Edge>(new Comparator<Edge>() {
            public int compare(Edge e1, Edge e2) {
                return e1.dis - e2.dis;
            }
        });
        visited.add(nodes.get(0));
        curEdges.addAll(graph.get(nodes.get(0)));
        // List<Edge> pickedEdges = new ArrayList<Edge>();  // debug

        int res = 0;
        while (visited.size() < length) {
            Edge minEdge = curEdges.poll();
            if (!visited.contains(minEdge.b)) {
                visited.add(minEdge.b);
                curEdges.addAll(graph.get(minEdge.b));
                res += minEdge.dis;
                // pickedEdges.add(minEdge); // debug
            }
        }

        return res;
    }

    private Map<Node, List<Edge>> buildGraph(List<Node> nodes) {
        int length = nodes.size();
        Map<Node, List<Edge>> m = new HashMap<Node, List<Edge>>();
        
        for (int i = 0; i < length; i++) {
            Node a = nodes.get(i);
            List<Edge> edges = new ArrayList<Edge>();
            for (int j = 0; j < length; j++) {
                Node b = nodes.get(j);
                if (i != j) {
                    edges.add(new Edge(a, b, dis(a, b)));
                }
            }
            m.put(a, edges);
        }

        return m;
    }

    private int dis(Node a, Node b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    class Edge {
        Node a;
        Node b;
        int dis;

        public Edge(Node a, Node b, int dis) {
            this.a = a;
            this.b = b;
            this.dis = dis;
        }

        @Override
        public String toString() { // debug
            return "E:" + a + " to " + b + " l:" + dis;
        }
    }

    class Node {
        int x;
        int y;

        public Node(int x, int y) {
            this.x = x;
            this.y = y;
        }

        public String toString() { // debug
            return "(" + x + ", " + y + ")";
        }
    }
}
